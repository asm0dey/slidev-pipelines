import{f as d,h as _,j as p,ag as h,c as m,ah as u,l as n,ai as e,aj as s,y as a,F as f,ak as v,al as g,am as x,n as i,an as y,ao as b,m as k,ap as N,aq as w,_ as P}from"./nav-2f72d91c.js";import{N as V}from"./NoteViewer-cb9cca22.js";import{u as j}from"./index-059ba896.js";const S={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},D=e("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const r=u(()=>x.slice(0,-1).map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.notesHTML!==""));return(o,l)=>(i(),n("div",{id:"page-root",style:g(a(w))},[e("div",S,[e("div",L,[e("h1",T,s(a(m).title),1),e("div",B,s(new Date().toLocaleString()),1)]),(i(!0),n(f,null,v(a(r),(t,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",C,[e("div",H,[e("div",z,s(t==null?void 0:t.no)+"/"+s(a(y)),1),b(" "+s(t==null?void 0:t.title)+" ",1),D])]),k(V,{"note-html":t.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(r).length-1?(i(),n("hr",F)):N("v-if",!0)]))),128))])],4))}}),W=P(M,[["__file","/home/runner/work/slidev-pipelines/slidev-pipelines/node_modules/.pnpm/@slidev+client@0.38.2_vite@4.0.3/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
