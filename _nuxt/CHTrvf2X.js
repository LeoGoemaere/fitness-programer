import{u as x,c as h,_ as v,a as S,b as m}from"./CPQp_N9D.js";import{u as b}from"./Cq3JvNS9.js";import{u as k}from"./__gsL7dk.js";import{g as w,q as E,z as I,s as P,o as A,c as N,b as n,a as o,w as p}from"./B7hC0jM-.js";const z={class:"settings"},B={class:"settings"},C=o("p",null,"Importe les derniers exercices sans modifier les existants.",-1),R=o("p",null,"Toutes les séries modifiées et exercices associés à des trainings seront réinitialisés.",-1),q=o("p",null,"Si des exercices natifs ont été supprimés ils seront réimportés car des programmes peuvent en utiliser.",-1),T=w({__name:"index",setup(y){const c=x(),u=b(),d=k(),a=E(),{t:_}=I();function f(){var s;const e=(s=m[0])==null?void 0:s.id;c.programs=JSON.parse(JSON.stringify(m)),c.setSelectedProgramId(e),d.supersetExercices=[],l(!1),a.add({title:"Les programmes ont été réinitialisés",timeout:3e3})}function l(e){const s=u.addExercicesList(h);e&&a.add({title:_("exercices.import",s.length),timeout:3e3})}const t=P(!1);function g(){const e=t.value,s={label:"Annuler",icon:"i-heroicons-x-mark",variant:"solid",color:"gray",size:"lg",click:r=>{t.value=!1}},i=[{label:e?"Confirmer":"Réinitialiser les programmes",icon:e?"i-heroicons-exclamation-triangle":"i-heroicons-arrow-path",variant:e?"solid":"outline",size:"lg",color:"red",click:r=>{if(t.value){f(),t.value=!1;return}t.value=!0}}];return e&&i.push(s),i}return(e,s)=>{const i=v,r=S;return A(),N("div",z,[n(i,{title:"Paramètres"}),o("div",B,[n(r,{class:"mb-3",title:"Importer les derniers exercices",actions:[{label:"Importer les exercices",variant:"solid",icon:"i-heroicons-arrow-down-on-square",size:"lg",click:()=>{l(!0)}}]},{description:p(()=>[C]),_:1},8,["actions"]),n(r,{title:"Reinitialisation des programmes",actions:g()},{description:p(()=>[R,q]),_:1},8,["actions"])])])}}});export{T as default};
