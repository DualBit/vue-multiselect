import{_ as o,M as i,r as n,o as c,c as u,a as r,f as d,v as m,b as t,n as h}from"./index-7f1b020e.js";const p={components:{Multiselect:i},data(){return{isDisabled:!1,isTouched:!1,value:[],options:["Select option","Disable me!","Reset me!","mulitple","label","searchable"]}},computed:{isInvalid(){return this.isTouched&&this.value.length===0}},methods:{onChange(e){this.value=e,e.indexOf("Reset me!")!==-1&&(this.value=[])},onSelect(e){e==="Disable me!"&&(this.isDisabled=!0)},onTouch(){this.isTouched=!0}}},_=t("label",{class:"typo__label"},"Customized multiselect",-1),b={class:"typo__label form__label"};function v(e,f,C,k,s,l){const a=n("multiselect");return c(),u("div",{class:h({invalid:l.isInvalid})},[_,r(a,{placeholder:"Pick at least one","select-label":"Enter doesn’t work here!","model-value":s.value,options:s.options,multiple:!0,searchable:!0,"allow-empty":!1,"prevent-autofocus":!0,"hide-selected":!0,"max-height":150,max:3,disabled:s.isDisabled,"block-keys":["Tab","Enter"],"onUpdate:modelValue":l.onChange,onClose:l.onTouch,onSelect:l.onSelect},null,8,["model-value","options","disabled","onUpdate:modelValue","onClose","onSelect"]),d(t("label",b,"Must have at least one value",512),[[m,l.isInvalid]])],2)}const D=o(p,[["render",v]]);export{D as default};
