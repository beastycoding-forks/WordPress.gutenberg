"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[1668,436],{"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/reakit-utils/es/canUseDOM.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>canUseDOM});var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/reakit-utils/es/getWindow.js");var canUseDOM=function checkIsBrowser(){var _window=(0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__.J)();return Boolean(void 0!==_window&&_window.document&&_window.document.createElement)}()},"./node_modules/reakit-utils/es/dom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>isUA});var _canUseDOM_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/reakit-utils/es/canUseDOM.js");function isUA(string){return!!_canUseDOM_js__WEBPACK_IMPORTED_MODULE_0__.N&&-1!==window.navigator.userAgent.indexOf(string)}},"./node_modules/reakit-utils/es/getDocument.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getDocument(element){return element?element.ownerDocument||element:document}__webpack_require__.d(__webpack_exports__,{M:()=>getDocument})},"./node_modules/reakit-utils/es/getWindow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>getWindow});var _window,_getDocument_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/reakit-utils/es/getDocument.js");try{_window=window}catch(e){}function getWindow(element){return element&&(0,_getDocument_js__WEBPACK_IMPORTED_MODULE_0__.M)(element).defaultView||_window}},"./node_modules/reakit-utils/es/isSelfTarget.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isSelfTarget(event){return event.target===event.currentTarget}__webpack_require__.d(__webpack_exports__,{U:()=>isSelfTarget})},"./node_modules/reakit-utils/es/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useForkRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function setRef(ref,value){void 0===value&&(value=null),ref&&("function"==typeof ref?ref(value):ref.current=value)}function useForkRef(refA,refB){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return null==refA&&null==refB?null:function(value){setRef(refA,value),setRef(refB,value)}}),[refA,refB])}},"./node_modules/reakit-utils/es/useIsomorphicEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>useIsomorphicEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useIsomorphicEffect=__webpack_require__("./node_modules/reakit-utils/es/canUseDOM.js").N?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/reakit-utils/es/useLiveRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useLiveRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useIsomorphicEffect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-utils/es/useIsomorphicEffect.js");function useLiveRef(value){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return(0,_useIsomorphicEffect_js__WEBPACK_IMPORTED_MODULE_1__.Y)((function(){ref.current=value})),ref}},"./node_modules/reakit-utils/es/useSealedState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useSealedState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useSealedState(initialState){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState)[0]}},"./node_modules/reakit-warning/es/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./node_modules/react/index.js")},"./node_modules/reakit/es/Id/IdProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>unstable_IdContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function generateRandomString(prefix){return void 0===prefix&&(prefix="id"),(prefix?prefix+"-":"")+Math.random().toString(32).substr(2,6)}var unstable_IdContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(generateRandomString)},"./node_modules/reakit/es/Id/IdState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>unstable_useIdState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-utils/es/useSealedState.js"),_IdProvider_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit/es/Id/IdProvider.js");function unstable_useIdState(initialState){void 0===initialState&&(initialState={});var initialBaseId=(0,reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__.T)(initialState).baseId,generateId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_IdProvider_js__WEBPACK_IMPORTED_MODULE_2__.U),idCountRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),_React$useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return initialBaseId||generateId()}));return{baseId:_React$useState[0],setBaseId:_React$useState[1],unstable_idCountRef:idCountRef}}},"./node_modules/reakit/es/Radio/Radio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Radio});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),reakit_system_createHook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/reakit-utils/es/useForkRef.js"),reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/reakit-warning/es/index.js"),__webpack_require__("./node_modules/reakit-utils/es/useLiveRef.js")),reakit_utils_createEvent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit-utils/es/createEvent.js"),_Composite_CompositeItem_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/reakit/es/Composite/CompositeItem.js"),_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit/es/__keys-d251e56b.js");function getChecked(options){return void 0!==options.checked?options.checked:void 0!==options.value&&options.state===options.value}function fireChange(element,onChange){var event=(0,reakit_utils_createEvent__WEBPACK_IMPORTED_MODULE_2__.y)(element,"change");Object.defineProperties(event,{type:{value:"change"},target:{value:element},currentTarget:{value:element}}),null==onChange||onChange(event)}var useRadio=(0,reakit_system_createHook__WEBPACK_IMPORTED_MODULE_3__.B)({name:"Radio",compose:_Composite_CompositeItem_js__WEBPACK_IMPORTED_MODULE_4__.E,keys:_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_5__.R,useOptions:function useOptions(_ref,_ref2){var _options$value,value=_ref2.value,checked=_ref2.checked,_ref$unstable_clickOn=_ref.unstable_clickOnEnter,unstable_clickOnEnter=void 0!==_ref$unstable_clickOn&&_ref$unstable_clickOn,_ref$unstable_checkOn=_ref.unstable_checkOnFocus,unstable_checkOnFocus=void 0===_ref$unstable_checkOn||_ref$unstable_checkOn,options=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__._)(_ref,["unstable_clickOnEnter","unstable_checkOnFocus"]);return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)({checked,unstable_clickOnEnter,unstable_checkOnFocus},options),{},{value:null!=(_options$value=options.value)?_options$value:value})},useProps:function useProps(options,_ref3){var htmlRef=_ref3.ref,htmlOnChange=_ref3.onChange,htmlOnClick=_ref3.onClick,htmlProps=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__._)(_ref3,["ref","onChange","onClick"]),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_React$useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),isNativeRadio=_React$useState3[0],setIsNativeRadio=_React$useState3[1],checked=getChecked(options),isCurrentItemRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(options.currentId===options.id),onChangeRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(htmlOnChange),onClickRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_7__.c)(htmlOnClick);!function useInitialChecked(options){var initialChecked=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return getChecked(options)}))[0],initialCurrentId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options.currentId)[0],id=options.id,setCurrentId=options.setCurrentId;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){initialChecked&&id&&initialCurrentId!==id&&(null==setCurrentId||setCurrentId(id))}),[initialChecked,id,setCurrentId,initialCurrentId])}(options),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var element=ref.current;element&&("INPUT"===element.tagName&&"radio"===element.type||setIsNativeRadio(!1))}),[]);var onChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onChangeRef$current,_options$setState;null===(_onChangeRef$current=onChangeRef.current)||void 0===_onChangeRef$current||_onChangeRef$current.call(onChangeRef,event),event.defaultPrevented||options.disabled||null===(_options$setState=options.setState)||void 0===_options$setState||_options$setState.call(options,options.value)}),[options.disabled,options.setState,options.value]),onClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onClickRef$current;null===(_onClickRef$current=onClickRef.current)||void 0===_onClickRef$current||_onClickRef$current.call(onClickRef,event),event.defaultPrevented||isNativeRadio||fireChange(event.currentTarget,onChange)}),[onChange,isNativeRadio]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var element=ref.current;element&&options.unstable_moves&&isCurrentItemRef.current&&options.unstable_checkOnFocus&&fireChange(element,onChange)}),[options.unstable_moves,options.unstable_checkOnFocus,onChange]),(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_6__.a)({ref:(0,reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.c)(ref,htmlRef),role:isNativeRadio?void 0:"radio",type:isNativeRadio?"radio":void 0,value:isNativeRadio?options.value:void 0,name:isNativeRadio?options.baseId:void 0,"aria-checked":checked,checked,onChange,onClick},htmlProps)}}),Radio=(0,reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_9__.L)({as:"input",memo:!0,useHook:useRadio})},"./node_modules/reakit/es/Radio/RadioGroup.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),reakit_system_useCreateElement__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/reakit-warning/es/index.js"),__webpack_require__("./node_modules/reakit-system/es/useCreateElement.js")),_Composite_Composite_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit/es/Composite/Composite.js"),_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/reakit/es/__keys-d251e56b.js"),useRadioGroup=(0,reakit_system_createHook__WEBPACK_IMPORTED_MODULE_2__.B)({name:"RadioGroup",compose:_Composite_Composite_js__WEBPACK_IMPORTED_MODULE_3__.Q,keys:_keys_d251e56b_js__WEBPACK_IMPORTED_MODULE_4__.a,useProps:function useProps(_,htmlProps){return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_5__.a)({role:"radiogroup"},htmlProps)}}),RadioGroup=(0,reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_6__.L)({as:"div",useHook:useRadioGroup,useCreateElement:function useCreateElement$1(type,props,children){return(0,reakit_system_useCreateElement__WEBPACK_IMPORTED_MODULE_7__.C)(type,props,children)}})},"./node_modules/reakit/es/Radio/RadioState.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>useRadioState});var _rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-1f0bf8c2.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-utils/es/useSealedState.js"),_Composite_CompositeState_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit/es/Composite/CompositeState.js");function useRadioState(initialState){void 0===initialState&&(initialState={});var _useSealedState=(0,reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__.T)(initialState),initialValue=_useSealedState.state,_useSealedState$loop=_useSealedState.loop,loop=void 0===_useSealedState$loop||_useSealedState$loop,sealed=(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__._)(_useSealedState,["state","loop"]),_React$useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),state=_React$useState[0],setState=_React$useState[1],composite=(0,_Composite_CompositeState_js__WEBPACK_IMPORTED_MODULE_3__.u)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)({},sealed),{},{loop}));return(0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_rollupPluginBabelHelpers_1f0bf8c2_js__WEBPACK_IMPORTED_MODULE_2__.a)({},composite),{},{state,setState})}},"./node_modules/reakit/es/__keys-d251e56b.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>RADIO_KEYS,a:()=>RADIO_GROUP_KEYS});var RADIO_STATE_KEYS=["baseId","unstable_idCountRef","unstable_virtual","rtl","orientation","items","groups","currentId","loop","wrap","shift","unstable_moves","unstable_hasActiveWidget","unstable_includesBaseElement","state","setBaseId","registerItem","unregisterItem","registerGroup","unregisterGroup","move","next","previous","up","down","first","last","sort","unstable_setVirtual","setRTL","setOrientation","setCurrentId","setLoop","setWrap","setShift","reset","unstable_setIncludesBaseElement","unstable_setHasActiveWidget","setState"],RADIO_KEYS=[].concat(RADIO_STATE_KEYS,["value","checked","unstable_checkOnFocus"]),RADIO_GROUP_KEYS=RADIO_STATE_KEYS}}]);