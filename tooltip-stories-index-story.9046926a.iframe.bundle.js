"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2900],{"./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x7:()=>arrow,YF:()=>useFloating});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function useFloating(_temp){let{middleware,placement="bottom",strategy="absolute",whileElementsMounted}=void 0===_temp?{}:_temp;const[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:null,y:null,strategy,placement,middlewareData:{}}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(null==latestMiddleware?void 0:latestMiddleware.map((_ref=>{let{name,options}=_ref;return{name,options}})),null==middleware?void 0:middleware.map((_ref2=>{let{name,options}=_ref2;return{name,options}})))||setLatestMiddleware(middleware);const reference=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floating=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),cleanupRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}(whileElementsMounted),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{reference.current&&floating.current&&(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.oo)(reference.current,floating.current,{middleware:latestMiddleware,placement,strategy}).then((data=>{isMountedRef.current&&!deepEqual(dataRef.current,data)&&(dataRef.current=data,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(data)})))}))}),[latestMiddleware,placement,strategy]);index((()=>{isMountedRef.current&&update()}),[update]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]);const runElementMountCallback=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if("function"==typeof cleanupRef.current&&(cleanupRef.current(),cleanupRef.current=null),reference.current&&floating.current)if(whileElementsMountedRef.current){const cleanupFn=whileElementsMountedRef.current(reference.current,floating.current,update);cleanupRef.current=cleanupFn}else update()}),[update,whileElementsMountedRef]),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{reference.current=node,runElementMountCallback()}),[runElementMountCallback]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{floating.current=node,runElementMountCallback()}),[runElementMountCallback]),refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference,floating})),[]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update,refs,reference:setReference,floating:setFloating})),[data,update,refs,setReference,setFloating])}const arrow=options=>{const{element,padding}=options;return{name:"arrow",options,fn:args=>function isRef(value){return Object.prototype.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.x7)({element:element.current,padding}).fn(args):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.x7)({element,padding}).fn(args):{}}}},"./node_modules/capital-case/dist.es2015/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>capitalCase});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),dist_es2015=__webpack_require__("./node_modules/no-case/dist.es2015/index.js");function capitalCaseTransform(input){return function upperCaseFirst(input){return input.charAt(0).toUpperCase()+input.substr(1)}(input.toLowerCase())}function capitalCase(input,options){return void 0===options&&(options={}),(0,dist_es2015.B)(input,(0,tslib_es6.pi)({delimiter:" ",transform:capitalCaseTransform},options))}},"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/use-memo-one/dist/use-memo-one.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Pr:()=>useMemoOne});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useMemoOne(getResult,inputs){var initial=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return{inputs,result:getResult()}}))[0],committed=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial),cache=Boolean(inputs&&committed.current.inputs&&function areInputsEqual(newInputs,lastInputs){if(newInputs.length!==lastInputs.length)return!1;for(var i=0;i<newInputs.length;i++)if(newInputs[i]!==lastInputs[i])return!1;return!0}(inputs,committed.current.inputs))?committed.current:{inputs,result:getResult()};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){committed.current=cache}),[cache]),cache.result}},"./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>useReducedMotion});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs"),_state_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");function useReducedMotion(){!_state_mjs__WEBPACK_IMPORTED_MODULE_1__.O.current&&(0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.A)();const[shouldReduceMotion]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_state_mjs__WEBPACK_IMPORTED_MODULE_1__.n.current);return shouldReduceMotion}},"./packages/components/src/tooltip/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Default:()=>Default,SmallTarget:()=>SmallTarget,DisabledChild:()=>DisabledChild,__namedExportsOrder:()=>__namedExportsOrder});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/tooltip/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/ToolTip",component:___WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{delay:{control:"number"},position:{control:{type:"select",options:["top left","top center","top right","bottom left","bottom center","bottom right"]}},text:{control:"text"}},parameters:{sourceLink:"packages/components/src/tooltip",docs:{canvas:{sourceState:"shown"}}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={text:"More information",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{margin:"50px auto",width:"200px",padding:"20px",textAlign:"center",border:"1px solid #ccc"},children:"Hover for more information"})};const SmallTarget=Template.bind({});SmallTarget.args={...Default.args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{margin:"50px auto",width:"min-content",padding:"4px",textAlign:"center",border:"1px solid #ccc"},children:"Small target"})};const DisabledChild=Template.bind({});DisabledChild.args={...Default.args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{disabled:!0,onClick:()=>window.alert("This alert should not be triggered"),children:"Hover me, but I am disabled"})},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <Tooltip {...args} />;\n}",...Default.parameters?.docs?.source}}},SmallTarget.parameters={...SmallTarget.parameters,docs:{...SmallTarget.parameters?.docs,source:{originalSource:"args => {\n  return <Tooltip {...args} />;\n}",...SmallTarget.parameters?.docs?.source}}},DisabledChild.parameters={...DisabledChild.parameters,docs:{...DisabledChild.parameters?.docs,source:{originalSource:"args => {\n  return <Tooltip {...args} />;\n}",...DisabledChild.parameters?.docs?.source}}};const __namedExportsOrder=["Default","SmallTarget","DisabledChild"]}}]);