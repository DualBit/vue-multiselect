import{_ as c,M as r,r as d,o as u,c as p,a as i,b as t,t as m}from"./index-7f1b020e.js";const g={components:{Multiselect:r},data(){return{value:[{name:"Javascript",code:"js"}],options:[{name:"Vue.js",code:"vu"},{name:"Javascript",code:"js"},{name:"Open Source",code:"os"}]}},methods:{addTag(a){const e={name:a,code:a.substring(0,2)+Math.floor(Math.random()*1e7)};this.options.push(e),this.value.push(e)}}},_=t("label",{class:"typo__label"},"Tagging",-1),h={class:"language-json"};function v(a,e,b,f,o,s){const l=d("multiselect");return u(),p("div",null,[_,i(l,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=n=>o.value=n),"tag-placeholder":"Add this as new tag",placeholder:"Search or add a tag",label:"name","track-by":"code",options:o.options,multiple:!0,taggable:!0,onTag:s.addTag},null,8,["modelValue","options","onTag"]),t("pre",h,[t("code",null,m(o.value),1)])])}const T=c(g,[["render",v]]);export{T as default};
