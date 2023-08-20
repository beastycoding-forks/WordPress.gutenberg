"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[8917],{"./packages/compose/build-module/hooks/use-merge-refs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useMergeRefs});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function assignRef(ref,value){"function"==typeof ref?ref(value):ref&&ref.hasOwnProperty("current")&&(ref.current=value)}function useMergeRefs(refs){const element=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),isAttached=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),didElementChange=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),previousRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),currentRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);return currentRefs.current=refs,(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!1===didElementChange.current&&!0===isAttached.current&&refs.forEach(((ref,index)=>{const previousRef=previousRefs.current[index];ref!==previousRef&&(assignRef(previousRef,null),assignRef(ref,element.current))})),previousRefs.current=refs}),refs),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{didElementChange.current=!1})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{assignRef(element,value),didElementChange.current=!0,isAttached.current=null!==value;const refsToAssign=value?currentRefs.current:previousRefs.current;for(const ref of refsToAssign)assignRef(ref,value)}),[])}},"./packages/element/build-module/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>isEmptyElement});const isEmptyElement=element=>"number"!=typeof element&&("string"==typeof element?.valueOf()||Array.isArray(element)?!element.length:!element)},"./packages/is-shallow-equal/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>isShallowEqual});var objects=__webpack_require__("./packages/is-shallow-equal/build-module/objects.js");function isShallowEqual(a,b){if(a&&b){if(a.constructor===Object&&b.constructor===Object)return(0,objects.Z)(a,b);if(Array.isArray(a)&&Array.isArray(b))return function isShallowEqualArrays(a,b){if(a===b)return!0;if(a.length!==b.length)return!1;for(let i=0,len=a.length;i<len;i++)if(a[i]!==b[i])return!1;return!0}(a,b)}return a===b}},"./packages/is-shallow-equal/build-module/objects.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isShallowEqualObjects(a,b){if(a===b)return!0;const aKeys=Object.keys(a),bKeys=Object.keys(b);if(aKeys.length!==bKeys.length)return!1;let i=0;for(;i<aKeys.length;){const key=aKeys[i],aValue=a[key];if(void 0===aValue&&!b.hasOwnProperty(key)||aValue!==b[key])return!1;i++}return!0}__webpack_require__.d(__webpack_exports__,{Z:()=>isShallowEqualObjects})},"./packages/components/src/slot-fill/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,_default:()=>_default,WithFillProps:()=>WithFillProps,WithContext:()=>WithContext,__namedExportsOrder:()=>__namedExportsOrder});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/slot-fill/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/SlotFill",component:___WEBPACK_IMPORTED_MODULE_1__.g7,parameters:{sourceLink:"packages/components/src/slot-fill",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},_default=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.zt,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Name: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{bubblesVirtually:!0,as:"span",name:"name"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Age: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{bubblesVirtually:!0,as:"span",name:"age"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name:"name",children:"Grace"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name:"age",children:"33"})]});_default.displayName="_default";const WithFillProps=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.zt,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Name:"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{bubblesVirtually:!0,as:"span",name:"name",fillProps:{name:"Grace"}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Age:"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{bubblesVirtually:!0,as:"span",name:"age",fillProps:{age:33}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name:"name",children:fillProps=>fillProps.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name:"age",children:fillProps=>fillProps.age})]});WithFillProps.displayName="WithFillProps";const WithContext=()=>{const Context=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createContext)(),ContextFill=({name})=>{const value=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(Context);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.de,{name,children:value})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.zt,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Name: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{bubblesVirtually:!0,as:"span",name:"name"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Age: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.g7,{bubblesVirtually:!0,as:"span",name:"age"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider,{value:"Grace",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContextFill,{name:"name"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider,{value:33,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContextFill,{name:"age"})})]})};WithContext.displayName="WithContext",_default.parameters={..._default.parameters,docs:{..._default.parameters?.docs,source:{originalSource:'() => {\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name: <Slot bubblesVirtually as="span" name="name" />\n            </p>\n            <p>\n                Age: <Slot bubblesVirtually as="span" name="age" />\n            </p>\n            <Fill name="name">Grace</Fill>\n            <Fill name="age">33</Fill>\n        </SlotFillProvider>;\n}',..._default.parameters?.docs?.source}}},WithFillProps.parameters={...WithFillProps.parameters,docs:{...WithFillProps.parameters?.docs,source:{originalSource:'() => {\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name:{\' \'}\n                <Slot bubblesVirtually as="span" name="name" fillProps={{\n        name: \'Grace\'\n      }} />\n            </p>\n            <p>\n                Age:{\' \'}\n                <Slot bubblesVirtually as="span" name="age" fillProps={{\n        age: 33\n      }} />\n            </p>\n            <Fill name="name">{fillProps => fillProps.name}</Fill>\n            <Fill name="age">{fillProps => fillProps.age}</Fill>\n        </SlotFillProvider>;\n}',...WithFillProps.parameters?.docs?.source}}},WithContext.parameters={...WithContext.parameters,docs:{...WithContext.parameters?.docs,source:{originalSource:'() => {\n  const Context = createContext();\n  const ContextFill = ({\n    name\n  }) => {\n    const value = useContext(Context);\n    return <Fill name={name}>{value}</Fill>;\n  };\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name: <Slot bubblesVirtually as="span" name="name" />\n            </p>\n            <p>\n                Age: <Slot bubblesVirtually as="span" name="age" />\n            </p>\n            <Context.Provider value="Grace">\n                <ContextFill name="name" />\n            </Context.Provider>\n            <Context.Provider value={33}>\n                <ContextFill name="age" />\n            </Context.Provider>\n        </SlotFillProvider>;\n}',...WithContext.parameters?.docs?.source}}};const __namedExportsOrder=["_default","WithFillProps","WithContext"];_default.__docgenInfo={description:"",methods:[],displayName:"_default"},WithFillProps.__docgenInfo={description:"",methods:[],displayName:"WithFillProps"},WithContext.__docgenInfo={description:"",methods:[],displayName:"WithContext"}}}]);