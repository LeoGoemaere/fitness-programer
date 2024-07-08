import{_ as ee}from"./CPQp_N9D.js";import{g as T,o as x,c as y,a as n,h as S,t as I,_ as B,i as te,j as D,b as e,k as r,r as F,n as G,l as oe,m as z,q as ne,s as h,v as A,x as j,w as s,d as O,y as P,z as se,F as ae,A as le}from"./B7hC0jM-.js";import{_ as N,a as Y,b as J,c as ce,d as Q,e as ie,f as re,g as ue,h as de,i as _e}from"./Ccgp1fYr.js";import{_ as me,a as pe,b as W}from"./CtbjoAXR.js";import{u as K}from"./Cq3JvNS9.js";const fe={class:"headinglv1__content"},ge={key:0,class:"headinglv1__visual"},ve={class:"headinglv1__img"},he=["src"],xe={class:"headinglv1__inner"},be={class:"itemlv1__label"},Ue=T({__name:"_itemLv1Content",props:{label:{},imgUrl:{}},setup(b){const g=b;return(a,_)=>(x(),y("div",fe,[a.imgUrl?(x(),y("div",ge,[n("div",ve,[n("img",{class:"headinglv1__img",src:a.imgUrl},null,8,he)])])):S("",!0),n("div",xe,[n("div",be,I(g.label),1)])]))}}),$e=B(Ue,[["__scopeId","data-v-671cb7ae"]]),ye={class:"itemlv1__layer"},we={class:"layerlv1"},Ce={class:"layerlv1__heading"},Le={class:"layerlv1__back"},Ve={class:"layerlv1__title"},ke={key:0,class:"layerlv1__action"},Ee={key:0,class:"itemlv1__inner"},Te=T({__name:"_itemLv1",props:{active:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},label:{},imgUrl:{}},emits:["change"],setup(b,{emit:g}){const a=b,_=g,p=te(),l=D(()=>!!p.action);function o(){_("change",!a.selected)}return(m,w)=>{const v=$e,C=oe,$=z;return x(),y("li",{class:G(["itemlv1",{"itemlv1--active":a.active,"itemlv1--selected":a.selected}])},[n("div",{onClick:o,class:"headinglv1"},[e(v,{label:a.label,imgUrl:a.imgUrl},null,8,["label","imgUrl"]),e(C,{class:"itemlv1__icon",name:"i-heroicons-chevron-right-20-solid"})]),n("div",ye,[n("div",we,[n("div",Ce,[n("div",Le,[e($,{onClick:o,icon:"i-heroicons-chevron-left-20-solid",size:"xl",color:"primary",variant:"link",trailing:!1,padded:!1,ui:{icon:{size:{xl:"w-8 h-8"}}}})]),n("div",Ve,I(m.label),1),r(l)?(x(),y("div",ke,[F(m.$slots,"action",{},void 0,!0)])):S("",!0)]),m.selected?(x(),y("div",Ee,[F(m.$slots,"default",{},void 0,!0)])):S("",!0)])])],2)}}}),Be=B(Te,[["__scopeId","data-v-254a47a6"]]);function q(){return{id:crypto.randomUUID(),name:"",color:"#000000"}}const Re={class:"flex items-center justify-between"},Ie={class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"},De={class:"flex justify-center"},ze=T({__name:"EditionTagPopin",props:{modelValue:{type:Boolean,default:!1},tag:{}},emits:["update:modelValue"],setup(b,{emit:g}){const a=K(),_=ne(),p=g,l=b,o=h(q()),m=D(()=>l.tag?`Editer le tag ${l.tag.name}`:"Créer un tag"),w=D(()=>l.tag?"Modifier":"Créer");function v(L){const t=[];return L.name||t.push({path:"general",message:"Le nom est obligatoire"}),console.log(t),t}function C(){l.tag?a.updateExerciceTag(o.value):a.addExerciceTag(o.value),_.add({title:`Le tag ${o.value.name} à été ${l.tag?"modifié":"créé"}`,timeout:3e3}),$()}function $(){o.value=q(),p("update:modelValue",!1)}return A(()=>l.tag,L=>{l.tag&&(o.value={...l.tag})}),(L,t)=>{const d=z,u=me,c=pe,f=W,V=N,k=Y,E=J;return x(),j(E,{"model-value":l.modelValue,"onUpdate:modelValue":t[2]||(t[2]=i=>p("update:modelValue",i)),ui:{container:"items-center"}},{default:s(()=>[e(k,{ui:{body:{base:"border-solid"}}},{header:s(()=>[n("div",Re,[n("h3",Ie,I(r(m)),1),e(d,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",onClick:$})])]),default:s(()=>[e(V,{class:"space-y-4",validate:v,state:r(o),onSubmit:C},{default:s(()=>[e(f,{name:"general"},{default:s(()=>[e(c,{class:"w-full",orientation:"horizontal"},{default:s(()=>[e(u,{class:"flex-1",placeholder:"Nom du tag",modelValue:r(o).name,"onUpdate:modelValue":t[0]||(t[0]=i=>r(o).name=i)},null,8,["modelValue"]),e(u,{name:"color",ui:{wrapper:"color-input",base:"h-full"},class:"flex-1",placeholder:"Couleur du tag",type:"color",modelValue:r(o).color,"onUpdate:modelValue":t[1]||(t[1]=i=>r(o).color=i)},null,8,["modelValue"])]),_:1})]),_:1}),n("div",De,[e(d,{type:"submit"},{default:s(()=>[O(I(r(w)),1)]),_:1})])]),_:1},8,["state"])]),_:1})]),_:1},8,["model-value"])}}}),Me=B(ze,[["__scopeId","data-v-e3df6c9d"]]),Se={class:"flex items-center justify-between"},Oe=n("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"},[n("span",null,"Gestion des tags")],-1),Pe={class:"flex items-center justify-between w-full"},je={class:"flex items-center"},Fe={class:"flex justify-center"},qe=T({__name:"TagPopin",props:{modelValue:{type:Boolean,default:!1},exercice:{}},emits:["update:modelValue","exerciceCreated"],setup(b,{emit:g}){const a=K(),_=g,p=b,l=h([]),o=h(!1),m=h(null),w=h(-1),v=h(!1),C=h({});function $(u){a.removeExerciceTag(u)}function L(u,c){u&&(w.value=c,v.value=!1)}function t(u,c){const f=v.value&&w.value===c;return[[{label:"Editer",icon:"i-heroicons-pencil-square",click:()=>{d(u)}}],[{label:f?"Confirmer":"Supprimer",icon:"i-heroicons-trash",iconClass:f?"text-red-400":null,labelClass:f?"text-red-400":null,click:V=>{if(V.preventDefault(),v.value){$(u);return}v.value=!0}}]]}function d(u){m.value=u,o.value=!0}return A(()=>o.value,u=>{u||(m.value=null)}),(u,c)=>{const f=z,V=ce,k=Q,E=ie,i=W,R=N,M=Y,X=Me,H=J;return x(),j(H,{"model-value":p.modelValue,"onUpdate:modelValue":c[4]||(c[4]=U=>_("update:modelValue",U)),ui:{container:"items-center"}},{default:s(()=>[e(M,{ui:{body:{base:"border-solid"}}},{header:s(()=>[n("div",Se,[Oe,e(f,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",onClick:c[0]||(c[0]=U=>_("update:modelValue",!1))})])]),default:s(()=>[e(R,{class:"space-y-4",state:r(C)},{default:s(()=>[e(f,{type:"submit",variant:"solid",onClick:c[1]||(c[1]=U=>o.value=!0)},{default:s(()=>[O("Créer un tag")]),_:1}),e(i,{name:"tags"},{default:s(()=>[e(E,{uiMenu:{option:{container:"w-full"}},modelValue:r(l),options:r(a).exerciceTags,multiple:"",placeholder:"Mes tags","option-attribute":"name",by:"id"},{option:s(({option:U,index:Z})=>[n("div",Pe,[e(V,{tag:U},null,8,["tag"]),n("div",je,[e(k,{ui:{padding:"border-solid",item:{base:"border-solid"}},"onUpdate:open":L,items:t(U,Z),popper:{placement:"bottom-start"}},{default:s(()=>[e(f,{class:"ml-2",size:"2xs",color:"gray",icon:"i-solar-menu-dots-bold",variant:"soft"})]),_:2},1032,["items"])])])]),_:1},8,["modelValue","options"])]),_:1}),n("div",Fe,[e(f,{onClick:c[2]||(c[2]=U=>_("update:modelValue",!1)),variant:"soft"},{default:s(()=>[O("Fermer")]),_:1})])]),_:1},8,["state"])]),_:1}),e(X,{modelValue:r(o),"onUpdate:modelValue":c[3]||(c[3]=U=>P(o)?o.value=U:null),tag:r(m)},null,8,["modelValue","tag"])]),_:1},8,["model-value"])}}}),Ge=""+new URL("abs.BWWJOKBW.png",import.meta.url).href,Ae=""+new URL("back.CvkEKj1D.png",import.meta.url).href,Ne=""+new URL("calves.CGpriwAc.png",import.meta.url).href,Ye=""+new URL("chest.C9l9Y4-i.png",import.meta.url).href,Je=""+new URL("forearms.CFm1B6hz.png",import.meta.url).href,Qe=""+new URL("glutes.DGrwsPym.png",import.meta.url).href,We=""+new URL("shoulders.DOEfngY7.png",import.meta.url).href,Ke=""+new URL("triceps.C3gxC62r.png",import.meta.url).href,Xe=""+new URL("biceps.DYTX4SuY.png",import.meta.url).href,He=""+new URL("quads.Dax75EQt.png",import.meta.url).href,Ze=""+new URL("trapezius.OToMOEjh.png",import.meta.url).href,et=""+new URL("neck.Bfryw1B6.png",import.meta.url).href,tt=""+new URL("hamstrings.DQgQXfqy.png",import.meta.url).href,ot=""+new URL("abductors.DgurJx9P.png",import.meta.url).href,nt=""+new URL("adductors.Dw0Yqj3i.png",import.meta.url).href,st=""+new URL("lumbars.wcRJM92E.png",import.meta.url).href,at={class:"muscles-list"},lt={class:"muscles-list__heading"},ct={class:"muscles-list__nav"},it={class:"muscles-list__list"},rt=T({__name:"ExercicesMusclesList",setup(b){const{t:g}=se(),a=re.sort((t,d)=>g(`muscles.${t}`).localeCompare(g(`muscles.${d}`))),_=h(-1),p=h(!1),l=h(!1),o=h(null),m=D(()=>["All",...a]);function w({lv1Index:t}){_.value=_.value===t?-1:t}function v(t){_.value=m.value.findIndex(d=>d===t)}function C(t){const d=de();t!=="All"&&(d.primary_muscle=t),o.value=d,p.value=!0}function $(t){switch(t.toLocaleLowerCase()){case"abs":return Ge;case"back":return Ae;case"calves":return Ne;case"chest":return Ye;case"forearms":return Je;case"glutes":return Qe;case"lumbars":return st;case"shoulders":return We;case"triceps":return Ke;case"biceps":return Xe;case"quads":return He;case"trapezius":return Ze;case"neck":return et;case"adductors":return nt;case"abductors":return ot;case"hamstrings":return tt}}const L=[[{label:"Créer un Exercice",icon:"i-solar-dumbbell-large-minimalistic-linear",click:()=>{p.value=!0}},{label:"Gestion des tags",icon:"i-heroicons-tag",click:()=>{l.value=!0}}]];return(t,d)=>{const u=z,c=Q,f=_e,V=Be,k=ue,E=qe;return x(),y("div",at,[n("div",lt,[e(c,{items:L,popper:{placement:"bottom-start"}},{default:s(()=>[e(u,{icon:"i-heroicons-ellipsis-horizontal-circle",color:"primary",ui:{rounded:"rounded-full",icon:{size:{xl:"w-8 h-8"}}},size:"xl",variant:"ghost",padded:!1})]),_:1})]),n("nav",ct,[n("ul",it,[(x(!0),y(ae,null,le(r(m),(i,R)=>(x(),j(V,{key:i,label:t.$t(`muscles.${i}`),"img-url":$(i),selected:r(_)===R,onChange:M=>w({lv1Index:R}),class:G(["muscles-list__item",{"muscles-list__item--all":i==="All"}])},{action:s(()=>[e(u,{onClick:M=>C(i),icon:"i-heroicons-plus-circle",color:"primary",ui:{rounded:"rounded-full",icon:{size:{xl:"w-8 h-8"}}},size:"xl",variant:"ghost",padded:!1},null,8,["onClick"])]),default:s(()=>[e(f,{muscle:i},null,8,["muscle"])]),_:2},1032,["label","img-url","selected","onChange","class"]))),128))])]),e(k,{modelValue:r(p),"onUpdate:modelValue":d[0]||(d[0]=i=>P(p)?p.value=i:null),exercice:r(o),onExerciceCreated:v},null,8,["modelValue","exercice"]),e(E,{modelValue:r(l),"onUpdate:modelValue":d[1]||(d[1]=i=>P(l)?l.value=i:null),onExerciceCreated:v},null,8,["modelValue"])])}}}),ut=B(rt,[["__scopeId","data-v-3bfb7fcb"]]),dt={},_t={class:"exercices-page"};function mt(b,g){const a=ee,_=ut;return x(),y("div",_t,[e(a,{title:"Exercices"}),e(_)])}const xt=B(dt,[["render",mt],["__scopeId","data-v-7f4fe16e"]]);export{xt as default};
