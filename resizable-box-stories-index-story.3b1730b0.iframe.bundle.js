(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[4593],{"./packages/components/src/text/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _ui_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/view/component.tsx"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/text/hook.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Text(props,forwardedRef){const textProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.Z)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__.Z,{as:"span",...textProps,ref:forwardedRef})}Text.displayName="Text";const __WEBPACK_DEFAULT_EXPORT__=(0,_ui_context__WEBPACK_IMPORTED_MODULE_3__.Iq)(Text,"Text");Text.__docgenInfo={description:"@param {import('../ui/context').WordPressComponentProps<import('./types').Props, 'span'>} props\n@param {import('react').ForwardedRef<any>}                                                forwardedRef",methods:[],displayName:"Text"}},"./packages/components/src/ui/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{cT:()=>COMPONENT_NAMESPACE,_3:()=>CONNECTED_NAMESPACE,rE:()=>CONNECT_STATIC_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/ui/context/context-connect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Iq:()=>contextConnect,Kc:()=>contextConnectWithoutRef,H:()=>hasConnectNamespace});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/warning/build-module/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/ui/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__.Z)("contextConnect: Please provide a namespace");let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/ui/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{eb:()=>useComponentsContext,G8:()=>ContextSystemProvider});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/warning/build-module/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=({children,value})=>{const contextValue=function useContextSystemBridge({value}){const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__.Z)(`Please memoize your context: ${JSON.stringify(value)}`)}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_6__.P})),[parentContext,value])}({value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"}},"./packages/components/src/ui/context/get-styled-class-name-from-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/ui/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>useContextSystem});var build_module=__webpack_require__("./packages/warning/build-module/index.js"),context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/ui/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,build_module.Z)("useContextSystem: Please provide a namespace");const contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/ui/utils/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>space});const GRID_BASE="4px";function space(value){if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&window.CSS?.supports?.("margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(${GRID_BASE} * ${value})`}},"./packages/components/src/utils/font.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>font});const font_values={"default.fontFamily":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif","default.fontSize":"13px","helpText.fontSize":"12px",mobileTextMinFontSize:"16px"};function font(value){var _FONT$value;return null!==(_FONT$value=font_values[value])&&void 0!==_FONT$value?_FONT$value:""}},"./packages/components/src/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View";const __WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/compose/build-module/hooks/use-resize-observer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useResizeAware});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const extractSize=(entry,boxProp,sizeType)=>entry[boxProp]?entry[boxProp][0]?entry[boxProp][0][sizeType]:entry[boxProp][sizeType]:"contentBoxSize"===boxProp?entry.contentRect["inlineSize"===sizeType?"width":"height"]:void 0;function useResizeObserver(opts={}){const onResize=opts.onResize,onResizeRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);onResizeRef.current=onResize;const round=opts.round||Math.round,resizeObserverRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[size,setSize]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({width:void 0,height:void 0}),didUnmount=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(didUnmount.current=!1,()=>{didUnmount.current=!0})),[]);const previous=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)({width:void 0,height:void 0}),refCallback=function useResolvedElement(subscriber,refOrElement){const callbackRefElement=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),lastReportRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),cleanupRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),callSubscriber=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{let element=null;callbackRefElement.current?element=callbackRefElement.current:refOrElement&&(element=refOrElement instanceof HTMLElement?refOrElement:refOrElement.current),lastReportRef.current&&lastReportRef.current.element===element&&lastReportRef.current.reporter===callSubscriber||(cleanupRef.current&&(cleanupRef.current(),cleanupRef.current=null),lastReportRef.current={reporter:callSubscriber,element},element&&(cleanupRef.current=subscriber(element)))}),[refOrElement,subscriber]);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callSubscriber()}),[callSubscriber]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((element=>{callbackRefElement.current=element,callSubscriber()}),[callSubscriber])}((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((element=>(resizeObserverRef.current&&resizeObserverRef.current.box===opts.box&&resizeObserverRef.current.round===round||(resizeObserverRef.current={box:opts.box,round,instance:new ResizeObserver((entries=>{const entry=entries[0];let boxProp="borderBoxSize";boxProp="border-box"===opts.box?"borderBoxSize":"device-pixel-content-box"===opts.box?"devicePixelContentBoxSize":"contentBoxSize";const reportedWidth=extractSize(entry,boxProp,"inlineSize"),reportedHeight=extractSize(entry,boxProp,"blockSize"),newWidth=reportedWidth?round(reportedWidth):void 0,newHeight=reportedHeight?round(reportedHeight):void 0;if(previous.current.width!==newWidth||previous.current.height!==newHeight){const newSize={width:newWidth,height:newHeight};previous.current.width=newWidth,previous.current.height=newHeight,onResizeRef.current?onResizeRef.current(newSize):didUnmount.current||setSize(newSize)}}))}),resizeObserverRef.current.instance.observe(element,{box:opts.box}),()=>{resizeObserverRef.current&&resizeObserverRef.current.instance.unobserve(element)})),[opts.box,round]),opts.ref);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({ref:refCallback,width:size.width,height:size.height})),[refCallback,size?size.width:null,size?size.height:null])}function useResizeAware(){const{ref,width,height}=useResizeObserver(),sizes=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({width:null!=width?width:null,height:null!=height?height:null})),[width,height]);return[(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",opacity:0,overflow:"hidden",zIndex:-1},"aria-hidden":"true",ref}),sizes]}},"./node_modules/deepmerge/dist/cjs.js":module=>{"use strict";var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{"use strict";module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/highlight-words-core/dist/index.js":module=>{module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape,caseSensitive,sanitize,searchWords,textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start,end,highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])},"./packages/components/src/resizable-box/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DisabledDirections:()=>DisabledDirections,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),lib=__webpack_require__("./node_modules/re-resizable/lib/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),use_resize_observer=__webpack_require__("./packages/compose/build-module/hooks/use-resize-observer/index.js");const noop=()=>{},POSITIONS={bottom:"bottom",corner:"corner"};function useResizeLabel({axis,fadeTimeout=180,onResize=noop,position=POSITIONS.bottom,showPx=!1}){const[resizeListener,sizes]=(0,use_resize_observer.Z)(),isAxisControlled=!!axis,[moveX,setMoveX]=(0,react.useState)(!1),[moveY,setMoveY]=(0,react.useState)(!1),{width,height}=sizes,heightRef=(0,react.useRef)(height),widthRef=(0,react.useRef)(width),moveTimeoutRef=(0,react.useRef)(),debounceUnsetMoveXY=(0,react.useCallback)((()=>{moveTimeoutRef.current&&window.clearTimeout(moveTimeoutRef.current),moveTimeoutRef.current=window.setTimeout((()=>{isAxisControlled||(setMoveX(!1),setMoveY(!1))}),fadeTimeout)}),[fadeTimeout,isAxisControlled]);(0,react.useEffect)((()=>{if(!(null!==width||null!==height))return;const didWidthChange=width!==widthRef.current,didHeightChange=height!==heightRef.current;if(didWidthChange||didHeightChange){if(width&&!widthRef.current&&height&&!heightRef.current)return widthRef.current=width,void(heightRef.current=height);didWidthChange&&(setMoveX(!0),widthRef.current=width),didHeightChange&&(setMoveY(!0),heightRef.current=height),onResize({width,height}),debounceUnsetMoveXY()}}),[width,height,onResize,debounceUnsetMoveXY]);const label=function getSizeLabel({axis,height,moveX=!1,moveY=!1,position=POSITIONS.bottom,showPx=!1,width}){if(!moveX&&!moveY)return;if(position===POSITIONS.corner)return`${width} x ${height}`;const labelUnit=showPx?" px":"";if(axis){if("x"===axis&&moveX)return`${width}${labelUnit}`;if("y"===axis&&moveY)return`${height}${labelUnit}`}if(moveX&&moveY)return`${width} x ${height}`;if(moveX)return`${width}${labelUnit}`;if(moveY)return`${height}${labelUnit}`;return}({axis,height,moveX,moveY,position,showPx,width});return{label,resizeListener}}var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),component=__webpack_require__("./packages/components/src/text/component.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),font=__webpack_require__("./packages/components/src/utils/font.js");const Root=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1wq7y4k3"})({name:"1cd7zoc",styles:"bottom:0;box-sizing:border-box;left:0;pointer-events:none;position:absolute;right:0;top:0"}),TooltipWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1wq7y4k2"})({name:"ajymcs",styles:"align-items:center;box-sizing:border-box;display:inline-flex;justify-content:center;opacity:0;pointer-events:none;transition:opacity 120ms linear"}),Tooltip=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1wq7y4k1"})("background:",colors_values.D.gray[900],";border-radius:2px;box-sizing:border-box;font-family:",(0,font.L)("default.fontFamily"),";font-size:12px;color:",colors_values.D.ui.textDark,";padding:4px 8px;position:relative;"),LabelText=(0,emotion_styled_base_browser_esm.Z)(component.Z,{target:"e1wq7y4k0"})("&&&{color:",colors_values.D.ui.textDark,";display:block;font-size:13px;line-height:1.4;white-space:nowrap;}");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Label({label,position=POSITIONS.corner,zIndex=1e3,...props},ref){const showLabel=!!label,isBottom=position===POSITIONS.bottom,isCorner=position===POSITIONS.corner;if(!showLabel)return null;let style={opacity:showLabel?1:void 0,zIndex},labelStyle={};return isBottom&&(style={...style,position:"absolute",bottom:-10,left:"50%",transform:"translate(-50%, 0)"},labelStyle={transform:"translate(0, 100%)"}),isCorner&&(style={...style,position:"absolute",top:4,right:(0,build_module.dZ)()?void 0:4,left:(0,build_module.dZ)()?4:void 0}),(0,jsx_runtime.jsx)(TooltipWrapper,{"aria-hidden":"true",className:"components-resizable-tooltip__tooltip-wrapper",ref,style,...props,children:(0,jsx_runtime.jsx)(Tooltip,{className:"components-resizable-tooltip__tooltip",style:labelStyle,children:(0,jsx_runtime.jsx)(LabelText,{as:"span",children:label})})})}Label.displayName="Label";const resize_tooltip_label=(0,react.forwardRef)(Label);try{label.displayName="label",label.__docgenInfo={description:"",displayName:"label",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"corner"'}]}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/resizable-box/resize-tooltip/label.tsx#label"]={docgenInfo:label.__docgenInfo,name:"label",path:"packages/components/src/resizable-box/resize-tooltip/label.tsx#label"})}catch(__react_docgen_typescript_loader_error){}const resize_tooltip_noop=()=>{};function ResizeTooltip({axis,className,fadeTimeout=180,isVisible=!0,labelRef,onResize=resize_tooltip_noop,position=POSITIONS.bottom,showPx=!0,zIndex=1e3,...props},ref){const{label,resizeListener}=useResizeLabel({axis,fadeTimeout,onResize,showPx,position});if(!isVisible)return null;const classes=classnames_default()("components-resize-tooltip",className);return(0,jsx_runtime.jsxs)(Root,{"aria-hidden":"true",className:classes,ref,...props,children:[resizeListener,(0,jsx_runtime.jsx)(resize_tooltip_label,{"aria-hidden":props["aria-hidden"],label,position,ref:labelRef,zIndex})]})}ResizeTooltip.displayName="ResizeTooltip";const resize_tooltip=(0,react.forwardRef)(ResizeTooltip);try{resizetooltip.displayName="resizetooltip",resizetooltip.__docgenInfo={description:"",displayName:"resizetooltip",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"(data: { width: number; height: number; }) => void"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"corner"'}]}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},axis:{defaultValue:null,description:"",name:"axis",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'}]}},fadeTimeout:{defaultValue:null,description:"",name:"fadeTimeout",required:!1,type:{name:"number"}},isVisible:{defaultValue:null,description:"",name:"isVisible",required:!1,type:{name:"boolean"}},labelRef:{defaultValue:null,description:"",name:"labelRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},showPx:{defaultValue:null,description:"",name:"showPx",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/resizable-box/resize-tooltip/index.tsx#resizetooltip"]={docgenInfo:resizetooltip.__docgenInfo,name:"resizetooltip",path:"packages/components/src/resizable-box/resize-tooltip/index.tsx#resizetooltip"})}catch(__react_docgen_typescript_loader_error){}const HANDLE_CLASS_NAME="components-resizable-box__handle",SIDE_HANDLE_CLASS_NAME="components-resizable-box__side-handle",CORNER_HANDLE_CLASS_NAME="components-resizable-box__corner-handle",HANDLE_CLASSES={top:classnames_default()(HANDLE_CLASS_NAME,SIDE_HANDLE_CLASS_NAME,"components-resizable-box__handle-top"),right:classnames_default()(HANDLE_CLASS_NAME,SIDE_HANDLE_CLASS_NAME,"components-resizable-box__handle-right"),bottom:classnames_default()(HANDLE_CLASS_NAME,SIDE_HANDLE_CLASS_NAME,"components-resizable-box__handle-bottom"),left:classnames_default()(HANDLE_CLASS_NAME,SIDE_HANDLE_CLASS_NAME,"components-resizable-box__handle-left"),topLeft:classnames_default()(HANDLE_CLASS_NAME,CORNER_HANDLE_CLASS_NAME,"components-resizable-box__handle-top","components-resizable-box__handle-left"),topRight:classnames_default()(HANDLE_CLASS_NAME,CORNER_HANDLE_CLASS_NAME,"components-resizable-box__handle-top","components-resizable-box__handle-right"),bottomRight:classnames_default()(HANDLE_CLASS_NAME,CORNER_HANDLE_CLASS_NAME,"components-resizable-box__handle-bottom","components-resizable-box__handle-right"),bottomLeft:classnames_default()(HANDLE_CLASS_NAME,CORNER_HANDLE_CLASS_NAME,"components-resizable-box__handle-bottom","components-resizable-box__handle-left")},HANDLE_STYLES_OVERRIDES={width:void 0,height:void 0,top:void 0,right:void 0,bottom:void 0,left:void 0},HANDLE_STYLES={top:HANDLE_STYLES_OVERRIDES,right:HANDLE_STYLES_OVERRIDES,bottom:HANDLE_STYLES_OVERRIDES,left:HANDLE_STYLES_OVERRIDES,topLeft:HANDLE_STYLES_OVERRIDES,topRight:HANDLE_STYLES_OVERRIDES,bottomRight:HANDLE_STYLES_OVERRIDES,bottomLeft:HANDLE_STYLES_OVERRIDES};function UnforwardedResizableBox({className,children,showHandle=!0,__experimentalShowTooltip:showTooltip=!1,__experimentalTooltipProps:tooltipProps={},...props},ref){return(0,jsx_runtime.jsxs)(lib.e,{className:classnames_default()("components-resizable-box__container",showHandle&&"has-show-handle",className),handleClasses:HANDLE_CLASSES,handleStyles:HANDLE_STYLES,ref,...props,children:[children,showTooltip&&(0,jsx_runtime.jsx)(resize_tooltip,{...tooltipProps})]})}UnforwardedResizableBox.displayName="UnforwardedResizableBox";const ResizableBox=(0,react.forwardRef)(UnforwardedResizableBox),resizable_box=ResizableBox;try{ResizableBox.displayName="ResizableBox",ResizableBox.__docgenInfo={description:"",displayName:"ResizableBox",props:{showHandle:{defaultValue:null,description:"",name:"showHandle",required:!1,type:{name:"boolean"}},__experimentalShowTooltip:{defaultValue:null,description:"",name:"__experimentalShowTooltip",required:!1,type:{name:"boolean"}},__experimentalTooltipProps:{defaultValue:null,description:"",name:"__experimentalTooltipProps",required:!1,type:{name:'Pick<ResizeTooltipProps, "as" | "key" | keyof HTMLAttributes<HTMLDivElement> | "onResize" | "position" | "zIndex" | ... 5 more ... | "showPx"> & RefAttributes<...>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/resizable-box/index.tsx#ResizableBox"]={docgenInfo:ResizableBox.__docgenInfo,name:"ResizableBox",path:"packages/components/src/resizable-box/index.tsx#ResizableBox"})}catch(__react_docgen_typescript_loader_error){}try{resizablebox.displayName="resizablebox",resizablebox.__docgenInfo={description:"",displayName:"resizablebox",props:{showHandle:{defaultValue:null,description:"",name:"showHandle",required:!1,type:{name:"boolean"}},__experimentalShowTooltip:{defaultValue:null,description:"",name:"__experimentalShowTooltip",required:!1,type:{name:"boolean"}},__experimentalTooltipProps:{defaultValue:null,description:"",name:"__experimentalTooltipProps",required:!1,type:{name:'Pick<ResizeTooltipProps, "as" | "key" | keyof HTMLAttributes<HTMLDivElement> | "onResize" | "position" | "zIndex" | ... 5 more ... | "showPx"> & RefAttributes<...>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/resizable-box/index.tsx#resizablebox"]={docgenInfo:resizablebox.__docgenInfo,name:"resizablebox",path:"packages/components/src/resizable-box/index.tsx#resizablebox"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"Components/ResizableBox",component:resizable_box,argTypes:{children:{control:{type:null}},enable:{control:"object"},onResizeStop:{action:"onResizeStop"}},parameters:{sourceLink:"packages/components/src/resizable-box",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=({onResizeStop,...props})=>{const[{height,width},setAttributes]=(0,react.useState)({height:200,width:400});return(0,jsx_runtime.jsx)(resizable_box,{...props,size:{height,width},onResizeStop:(event,direction,elt,delta)=>{onResizeStop?.(event,direction,elt,delta),setAttributes({height:height+delta.height,width:width+delta.width})}})};Template.displayName="Template";const Default=Template.bind({});Default.args={children:(0,jsx_runtime.jsx)("div",{style:{background:"#eee",display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},children:"Resize"})};const DisabledDirections=Template.bind({});DisabledDirections.args={...Default.args,enable:{top:!1,right:!0,bottom:!0,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onResizeStop,\n  ...props\n}) => {\n  const [{\n    height,\n    width\n  }, setAttributes] = useState({\n    height: 200,\n    width: 400\n  });\n  return <ResizableBox {...props} size={{\n    height,\n    width\n  }} onResizeStop={(event, direction, elt, delta) => {\n    onResizeStop?.(event, direction, elt, delta);\n    setAttributes({\n      height: height + delta.height,\n      width: width + delta.width\n    });\n  }} />;\n}",...Default.parameters?.docs?.source}}},DisabledDirections.parameters={...DisabledDirections.parameters,docs:{...DisabledDirections.parameters?.docs,source:{originalSource:"({\n  onResizeStop,\n  ...props\n}) => {\n  const [{\n    height,\n    width\n  }, setAttributes] = useState({\n    height: 200,\n    width: 400\n  });\n  return <ResizableBox {...props} size={{\n    height,\n    width\n  }} onResizeStop={(event, direction, elt, delta) => {\n    onResizeStop?.(event, direction, elt, delta);\n    setAttributes({\n      height: height + delta.height,\n      width: width + delta.width\n    });\n  }} />;\n}",...DisabledDirections.parameters?.docs?.source},description:{story:"The `enable` prop can be used to disable resizing in specific directions.",...DisabledDirections.parameters?.docs?.description}}};const __namedExportsOrder=["Default","DisabledDirections"];try{DisabledDirections.displayName="DisabledDirections",DisabledDirections.__docgenInfo={description:"The `enable` prop can be used to disable resizing in specific directions.",displayName:"DisabledDirections",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/resizable-box/stories/index.story.tsx#DisabledDirections"]={docgenInfo:DisabledDirections.__docgenInfo,name:"DisabledDirections",path:"packages/components/src/resizable-box/stories/index.story.tsx#DisabledDirections"})}catch(__react_docgen_typescript_loader_error){}}}]);