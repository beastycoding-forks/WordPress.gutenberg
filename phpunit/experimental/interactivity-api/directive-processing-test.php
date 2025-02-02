<?php
/**
 * Directive processing test.
 *
 * @package Gutenberg
 * @subpackage Interactivity API
 *
 * @phpcs:disable Generic.Files.OneObjectStructurePerFile.MultipleFound
 */


class Helper_Class {
	// phpcs:ignore VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
	public function process_foo_test( $tags, $context ) {
	}

	public function increment( $store ) {
		return $store['state']['count'] + $store['context']['count'];
	}

	public static function static_increment( $store ) {
		return $store['state']['count'] + $store['context']['count'];
	}
}

function gutenberg_test_process_directives_helper_increment( $store ) {
	return $store['state']['count'] + $store['context']['count'];
}

/**
 * Tests for the gutenberg_interactivity_process_rendered_html function.
 *
 * @group  interactivity-api
 * @covers gutenberg_interactivity_process_rendered_html
 */
class Tests_Process_Directives extends WP_UnitTestCase {
	public function test_correctly_call_attribute_directive_processor_on_closing_tag() {

		// PHPUnit cannot stub functions, only classes.
		$test_helper = $this->createMock( Helper_Class::class );

		$test_helper->expects( $this->exactly( 2 ) )
				->method( 'process_foo_test' )
				->with(
					$this->callback(
						function ( $p ) {
							return 'DIV' === $p->get_tag() && (
								// Either this is a closing tag...
								$p->is_tag_closer() ||
								// ...or it is an open tag, and has the directive attribute set.
								( ! $p->is_tag_closer() && 'abc' === $p->get_attribute( 'foo-test' ) )
							);
						}
					)
				);

		$directives = array(
			'foo-test' => array( $test_helper, 'process_foo_test' ),
		);

		$markup = '<div>Example: <div foo-test="abc"><img><span>This is a test></span><div>Here is a nested div</div></div></div>';
		$tags   = new WP_Directive_Processor( $markup );
		$tags->process_rendered_html( $tags, 'foo-', $directives );
	}

	public function test_directives_with_double_hyphen_processed_correctly() {
		$test_helper = $this->createMock( Helper_Class::class );
		$test_helper->expects( $this->atLeastOnce() )
				->method( 'process_foo_test' );

		$directives = array(
			'foo-test' => array( $test_helper, 'process_foo_test' ),
		);

		$markup = '<div foo-test--value="abc"></div>';
		$tags   = new WP_Directive_Processor( $markup );
		$tags->process_rendered_html( $tags, 'foo-', $directives );
	}

	public function test_interactivity_process_directives_in_root_blocks() {

		$block_content =
		'<!-- wp:paragraph -->' .
			'<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>' .
		'<!-- /wp:paragraph -->' .
		'<!-- wp:paragraph -->' .
			'<p>Welcome to WordPress.</p>' .
		'<!-- /wp:paragraph -->';

		$parsed_block = parse_blocks( $block_content )[0];

		$source_block = $parsed_block;

		$rendered_content = render_block( $parsed_block );

		$parsed_block_second = parse_blocks( $block_content )[1];

		$fake_parent_block = array();

		// Test that root block is intially emtpy.
		$this->assertEmpty( WP_Directive_Processor::$root_block );

		// Test that root block is not added if there is a parent block.
		gutenberg_interactivity_mark_root_blocks( $parsed_block, $source_block, $fake_parent_block );
		$this->assertEmpty( WP_Directive_Processor::$root_block );

		// Test that root block is added if there is no parent block.
		gutenberg_interactivity_mark_root_blocks( $parsed_block, $source_block, null );
		$current_root_block = WP_Directive_Processor::$root_block;
		$this->assertNotEmpty( $current_root_block );

		// Test that a root block is not added if there is already a root block defined.
		gutenberg_interactivity_mark_root_blocks( $parsed_block_second, $source_block, null );
		$this->assertSame( $current_root_block, WP_Directive_Processor::$root_block );

		// Test that root block is removed after processing.
		gutenberg_process_directives_in_root_blocks( $rendered_content, $parsed_block );
		$this->assertEmpty( WP_Directive_Processor::$root_block );
	}
}


/**
 * Tests for the gutenberg_interactivity_evaluate_reference function.
 *
 * @group  interactivity-api
 * @covers gutenberg_interactivity_evaluate_reference
 */
class Tests_Utils_Evaluate extends WP_UnitTestCase {
	public function test_evaluate_function_should_access_state() {
		// Init a simple store.
		wp_store(
			array(
				'state' => array(
					'core' => array(
						'number' => 1,
						'bool'   => true,
						'nested' => array(
							'string' => 'hi',
						),
					),
				),
			)
		);
		$this->assertSame( 1, gutenberg_interactivity_evaluate_reference( 'state.core.number' ) );
		$this->assertTrue( gutenberg_interactivity_evaluate_reference( 'state.core.bool' ) );
		$this->assertSame( 'hi', gutenberg_interactivity_evaluate_reference( 'state.core.nested.string' ) );
		$this->assertFalse( gutenberg_interactivity_evaluate_reference( '!state.core.bool' ) );
	}

	public function test_evaluate_function_should_access_passed_context() {
		$context = array(
			'local' => array(
				'number' => 2,
				'bool'   => false,
				'nested' => array(
					'string' => 'bye',
				),
			),
		);
		$this->assertSame( 2, gutenberg_interactivity_evaluate_reference( 'context.local.number', $context ) );
		$this->assertFalse( gutenberg_interactivity_evaluate_reference( 'context.local.bool', $context ) );
		$this->assertTrue( gutenberg_interactivity_evaluate_reference( '!context.local.bool', $context ) );
		$this->assertSame( 'bye', gutenberg_interactivity_evaluate_reference( 'context.local.nested.string', $context ) );
		// Previously defined state is also accessible.
		$this->assertSame( 1, gutenberg_interactivity_evaluate_reference( 'state.core.number' ) );
		$this->assertTrue( gutenberg_interactivity_evaluate_reference( 'state.core.bool' ) );
		$this->assertSame( 'hi', gutenberg_interactivity_evaluate_reference( 'state.core.nested.string' ) );
	}

	public function test_evaluate_function_should_return_null_for_unresolved_paths() {
		$this->assertNull( gutenberg_interactivity_evaluate_reference( 'this.property.doesnt.exist' ) );
	}

	public function test_evaluate_function_should_execute_anonymous_functions() {
		$context = new WP_Directive_Context( array( 'count' => 2 ) );
		$helper  = new Helper_Class();

		wp_store(
			array(
				'state'     => array(
					'count' => 3,
				),
				'selectors' => array(
					'anonymous_function'           => function ( $store ) {
						return $store['state']['count'] + $store['context']['count'];
					},
					// Other types of callables should not be executed.
					'function_name'                => 'gutenberg_test_process_directives_helper_increment',
					'class_method'                 => array( $helper, 'increment' ),
					'class_static_method'          => 'Helper_Class::static_increment',
					'class_static_method_as_array' => array( 'Helper_Class', 'static_increment' ),
				),
			)
		);

		$this->assertSame( 5, gutenberg_interactivity_evaluate_reference( 'selectors.anonymous_function', $context->get_context() ) );
		$this->assertSame(
			'gutenberg_test_process_directives_helper_increment',
			gutenberg_interactivity_evaluate_reference( 'selectors.function_name', $context->get_context() )
		);
		$this->assertSame(
			array( $helper, 'increment' ),
			gutenberg_interactivity_evaluate_reference( 'selectors.class_method', $context->get_context() )
		);
		$this->assertSame(
			'Helper_Class::static_increment',
			gutenberg_interactivity_evaluate_reference( 'selectors.class_static_method', $context->get_context() )
		);
		$this->assertSame(
			array( 'Helper_Class', 'static_increment' ),
			gutenberg_interactivity_evaluate_reference( 'selectors.class_static_method_as_array', $context->get_context() )
		);
	}
}
