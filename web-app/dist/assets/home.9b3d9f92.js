import{o as s,c as o,j as w,n as f,t as d,k as m,d as E,u as S,r as z,a as e,F as g,l as y,m as $,e as h,g as _,q as A,s as T,i as x,_ as j,p as I,b as B}from"./index.2cf0958b.js";import{u as N,_ as k}from"./order.store.b03c53b0.js";var C={name:"Avatar",emits:["error"],props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"}},methods:{onError(){this.$emit("error")}},computed:{containerClass(){return["p-avatar p-component",{"p-avatar-image":this.image!=null,"p-avatar-circle":this.shape==="circle","p-avatar-lg":this.size==="large","p-avatar-xl":this.size==="xlarge"}]},iconClass(){return["p-avatar-icon",this.icon]}}};const q={key:0,class:"p-avatar-text"},D=["src"];function V(r,a,i,n,t,c){return s(),o("div",{class:f(c.containerClass)},[w(r.$slots,"default",{},()=>[i.label?(s(),o("span",q,d(i.label),1)):i.icon?(s(),o("span",{key:1,class:f(c.iconClass)},null,2)):i.image?(s(),o("img",{key:2,src:i.image,onError:a[0]||(a[0]=(...u)=>c.onError&&c.onError(...u))},null,40,D)):m("",!0)])],2)}function L(r,a){a===void 0&&(a={});var i=a.insertAt;if(!(!r||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",i==="top"&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=r:t.appendChild(document.createTextNode(r))}}var F=`
.p-avatar {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
}
.p-avatar.p-avatar-image {
    background-color: transparent;
}
.p-avatar.p-avatar-circle {
    border-radius: 50%;
}
.p-avatar-circle img {
    border-radius: 50%;
}
.p-avatar .p-avatar-icon {
    font-size: 1rem;
}
.p-avatar img {
    width: 100%;
    height: 100%;
}
`;L(F);C.render=V;const P={class:"px-4 pt-5 relative"},R=e("p",{class:"text-xs text-gray-300 animate-none pb-2"},"Touchez pour ajouter au panier",-1),G={class:"space-y-3 overflow-y-auto"},H=["onClick"],J=e("img",{src:"https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg",alt:"Image",class:"rounded-lg w-14 h-14"},null,-1),K={class:"px-4"},Q={class:"prose prose-red text-xs"},U={class:"space-x-2"},W={class:"text-xs rounded-xl px-3 py-1"},X=e("div",{class:"flex w-full rounded-lg overflow-clip h-32 justify-center text-center"},[e("p",{class:"text-xs text-gray-300"},"vous \xEAtes \xE0 la fin de la liste ")],-1),Y={class:"flex w-screen shadow-teal-300 items-center h-16 justify-center snackShadow"},Z={class:"pr-4 pl-4"},ee={class:"w-full justify-center"},te=e("p",null,"Continuer ",-1),ae={class:"pr-4"},ne=E({__name:"menu",setup(r){const a=N(),i=S();function n(){i.push({name:"user-commands"})}const t=[{id:"37fee742-785a-4302-bba7-5092ce6e3089",description:"Montre-bracelet, dite \u201Cd'Aviateur\u201D, m\xE9tal inalt\xE9rable, diam. 435ym. Mouvement de pr\xE9cision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",likes:12,name:"Ayimolou",price:1e3,images:[]},{id:"37fee742-785a-4302-bba7-5092ce6e30800",description:"Montre-bracelet, dite \u201Cd'Aviateur\u201D, m\xE9tal inalt\xE9rable, diam. 435ym. Mouvement de pr\xE9cision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",likes:12,name:"Ema koum\xE9",price:2e3,images:[]}];function c(l){k.findIndex(a.currentOrder,{id:l.id})===-1?a.currentOrder.push(l):k.remove(a.currentOrder,{id:l.id})}function u(l){return k.findIndex(a.currentOrder,{id:l})!==-1}return(l,v)=>{const b=z("v-icon");return s(),o("div",null,[e("div",P,[R,e("div",G,[(s(),o(g,null,y(t,(p,O)=>e("div",{class:f(["flex justify-start items-start px-4 py-2 border w-full rounded-lg overflow-clip duration-500 transition",{"bg-gray-200 shadow-xl":u(p.id)}]),onClick:Ae=>c(p),key:O},[J,e("div",K,[e("p",null,[$(d(p.name)+" - ",1),e("span",null,d(p.price)+" Fcfa",1)]),e("p",Q,d(p.description),1),e("div",U,[e("span",W,[h(b,{name:"fa-regular-hand-peace"}),$(" "+d(p.likes),1)])])])],10,H)),64)),X])]),_(a).currentOrder.length!=0?(s(),o("div",{key:0,class:"bottom-0 fixed text-white bg-black transition duration-700",onClick:n},[e("div",Y,[e("div",Z,[h(b,{name:"fa-info"})]),e("div",ee,[e("p",null,"Vous avez "+d(_(a).currentOrder.length)+" commandes en attente ",1),te]),e("div",ae,[h(b,{name:"fa-chevron-right"})])])])):m("",!0)])}}});var M={name:"AvatarGroup"};const re={class:"p-avatar-group p-component"};function se(r,a,i,n,t,c){return s(),o("div",re,[w(r.$slots,"default")])}function ie(r,a){a===void 0&&(a={});var i=a.insertAt;if(!(!r||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",i==="top"&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=r:t.appendChild(document.createTextNode(r))}}var oe=`
.p-avatar-group .p-avatar + .p-avatar {
    margin-left: -1rem;
}
.p-avatar-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;ie(oe);M.render=se;const le={class:"space-y-2 px-4 pt-4"},ce={class:"pl-2 grow"},de={class:"text-xs pr-4"},ue={class:"text-xs pr-4"},pe={class:"text-xs"},me={class:"text-green-400"},he=E({__name:"history",setup(r){const a=A([{id:"1",dateOrder:"21 janv. 2023 16:40",state:"Traitement",items:[{item:{id:"37fee742-785a-4302-bba7-5092ce6e3089",description:"Montre-bracelet, dite \u201Cd'Aviateur\u201D, m\xE9tal inalt\xE9rable, diam. 435ym. Mouvement de pr\xE9cision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",likes:12,name:"Ayimolou",price:1e3,images:[]},quantity:1}]},{id:"2",dateOrder:"22 janv. 2023 16:40",state:"Livr\xE9",items:[{item:{id:"37fee742-785a-4302-bba7-5092ce6e3089",description:"Montre-bracelet, dite \u201Cd'Aviateur\u201D, m\xE9tal inalt\xE9rable, diam. 435ym. Mouvement de pr\xE9cision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",likes:12,name:"Ayimolou",price:1e3,images:[]},quantity:1}]},{id:"3",dateOrder:"20 nov. 2022 10:40",state:"Livr\xE9",items:[{item:{id:"37fee742-785a-4302-bba7-5092ce6e3089",description:"Montre-bracelet, dite \u201Cd'Aviateur\u201D, m\xE9tal inalt\xE9rable, diam. 435ym. Mouvement de pr\xE9cision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",likes:12,name:"Ayimolou",price:1e3,images:[]},quantity:1},{item:{id:"37fee742-785a-4302-bba7-5092ce6e30800",description:"Montre-bracelet, dite \u201Cd'Aviateur\u201D, m\xE9tal inalt\xE9rable, diam. 435ym. Mouvement de pr\xE9cision chronographe, cadran avec grande aiguille trotteuse, permettant la lecture 1/25de seconde.",likes:12,name:"Ema koum\xE9",price:2e3,images:[]},quantity:1}]}]);return(i,n)=>(s(),o("div",le,[(s(!0),o(g,null,y(a.value,(t,c)=>(s(),o("div",{key:c,class:"flex py-4 px-4 bg-slate-100 rounded-lg"},[h(_(M),null,{default:T(()=>[(s(!0),o(g,null,y(t.items,(u,l)=>(s(),x(_(C),{label:u.item.name[0],shape:"circle",size:"normal",style:{"background-color":"'#9c27b0', color: '#655151'"},key:l},null,8,["label"]))),128))]),_:2},1024),e("div",ce,[e("p",de," Commande du "+d(t.dateOrder),1),e("p",ue,d(t.items.length)+" commande(s) ",1)]),e("div",null,[e("p",pe,[e("span",me,d(t.state),1)])])]))),128))]))}}),_e={},ve={class:"flex justify-center items-center h-screen"},xe=e("p",null,"Les retours clients seront ici",-1),fe=[xe];function ge(r,a){return s(),o("div",ve,fe)}const ye=j(_e,[["render",ge]]),be=r=>(I("data-v-0a7503d1"),r=r(),B(),r),ke={class:"relative h-full"},Ee={class:"flex items-center"},Ce=be(()=>e("div",{class:"text-xl px-4 py-4 grow"},"The wiyao",-1)),$e={class:"space-x-4 px-4"},we=["onClick"],Se=E({__name:"home",setup(r){const a=S();function i(){a.push({name:"user-me"})}const n=A("menu"),t=[{title:"Menu",name:"menu"},{title:"Historique",name:"history"},{title:"Reactions",name:"social"}];return(c,u)=>(s(),o("div",ke,[e("div",Ee,[Ce,e("span",{onClick:i},[h(_(C),{class:"mr-4",shape:"circle"})])]),e("div",$e,[(s(),o(g,null,y(t,(l,v)=>e("button",{key:v,onClick:()=>n.value=l.name,class:f([{"text-black rounded-full bg-gray-200 px-5 py-1":n.value===l.name},""])},d(l.title),11,we)),64))]),n.value==="menu"?(s(),x(ne,{key:0})):m("",!0),n.value==="history"?(s(),x(he,{key:1})):m("",!0),n.value==="social"?(s(),x(ye,{key:2})):m("",!0)]))}});const Oe=j(Se,[["__scopeId","data-v-0a7503d1"]]);export{Oe as default};
