import{d as v,aj as m,r as f,I as h,b as s,c as o,J as i,f as _,e,F as y,ah as k,p as C,i as g,t as x,k as I}from"./entry.58cfa449.js";const c=t=>(C("data-v-f127e6fe"),t=t(),g(),t),S={key:0,class:"copied"},b=c(()=>e("div",{class:"scrim"},null,-1)),w=c(()=>e("div",{class:"content"}," Copied! ",-1)),B=[b,w],T=c(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),j={class:"window"},F=c(()=>e("span",{class:"sign"},"$",-1)),N={class:"content"},V={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:p}=m(),n=f("init"),r=h(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{p(r.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(n)==="copied"?(s(),o("div",S,B)):_("",!0),T,e("div",j,[(s(!0),o(y,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[F,e("span",N,x(d),1)]))),128))]),i(n)!=="copied"?(s(),o("div",V," Click to copy ")):_("",!0)]))}});const E=I(q,[["__scopeId","data-v-f127e6fe"]]);export{E as default};
