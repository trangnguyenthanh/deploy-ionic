System.register(["./headerPage.vue_vue_type_style_index_0_lang-legacy-BxhXn9oq.js","./index-legacy-T-pwKVxV.js"],(function(e,t){"use strict";var a,l,n,d,o,u,i,r,c,s,g,m,f,v,y,h,_,p,b,x,w,k,S,V,C,D;return{setters:[e=>{a=e._},e=>{l=e.d,n=e.r,d=e.z,o=e.c,u=e.w,i=e.u,r=e.a,c=e.b,s=e.e,g=e.I,m=e.g,f=e.h,v=e.i,y=e.j,h=e.F,_=e.f,p=e.k,b=e.m,x=e.A,w=e.q,k=e.s,S=e.t,V=e.v,C=e.x,D=e._}],execute:function(){var t=document.createElement("style");t.textContent=".table-header[data-v-5b93ee5f]{background-color:#f2f2f2;font-weight:700}.table-row[data-v-5b93ee5f]{border-bottom:2px solid #ddd}\n",document.head.appendChild(t);const I={style:{"margin-bottom":"10px",border:"1px solid gray","border-radius":"20px"}},T={style:{"text-align":"center"}},j={key:0,style:{"font-size":"12px"}},z={style:{margin:"5px 0px 10px 0px"}},G={style:{background:"#338aaf"}},L=(e=>(V("data-v-5b93ee5f"),e=e(),C(),e))((()=>_("h4",null,"Không có dữ liệu",-1)));e("default",D(l({__name:"Tab3Page",setup(e){const t=n("1"),l=n([{id:1,name:"Mua sắm"},{id:2,name:"Ăn uống"},{id:3,name:"Di chuyển"},{id:4,name:"Giải trí"},{id:5,name:"Hóa đơn"},{id:6,name:"Sức khỏe"},{id:7,name:"Gia đình"},{id:8,name:"Quà tặng"},{id:9,name:"Khác"},{id:10,name:"Trả nợ"}]),V=n([]),C=n("");function D(){var e;const a=null!==(e=t.value)&&void 0!==e?e:"",l=localStorage.getItem(a);V.value=l?JSON.parse(l):[]}const U={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"},B=d((()=>{let e=V.value||[];if(C.value){const t=C.value.toLowerCase();e=e.filter((e=>e.note.toLowerCase().includes(t)||e.amount.toString().includes(t)))}return e}));return(e,n)=>{const d=r("ion-label"),V=r("ion-col"),E=r("ion-row"),K=r("ion-table"),N=r("ion-content");return c(),o(i(w),null,{default:u((()=>[s(a),s(N,{fullscreen:!0,"scroll-y":!0,style:{background:"#036E9B",width:"100%","text-align":"center"}},{default:u((()=>[s(i(g),{style:{"border-radius":"5px","font-size":"13px"}},{default:u((()=>[s(d,{style:{"font-weight":"600"}},{default:u((()=>[m("Danh mục : ")])),_:1}),s(i(f),{interface:"popover",modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),onIonChange:D},{default:u((()=>[(c(!0),v(h,null,y(l.value,(e=>(c(),o(i(k),{key:e.id,value:e.name},{default:u((()=>[m(S(e.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_("div",I,[s(i(p),{modelValue:C.value,"onUpdate:modelValue":n[1]||(n[1]=e=>C.value=e),color:"medium",placeholder:"Tìm kiếm"},null,8,["modelValue"])]),_("div",T,[B.value&&B.value.length>0?(c(),v("div",j,[B.value.length>0?(c(),o(K,{key:0},{default:u((()=>[_("div",z,[s(E,{class:"table-header"},{default:u((()=>[s(V,{style:{color:"rgb(215, 51, 45)"}},{default:u((()=>[m("Ghi chú")])),_:1}),s(V,{style:{color:"rgb(7, 126, 15)"}},{default:u((()=>[m("Tiền đã chi ")])),_:1}),s(V,{style:{color:"rgb(25, 32, 171)"}},{default:u((()=>[m("Ngày tháng")])),_:1})])),_:1})]),_("div",G,[(c(!0),v(h,null,y(B.value,((e,t)=>(c(),o(E,{key:t,class:"table-row",style:{padding:"10px",color:"white"}},{default:u((()=>[s(V,null,{default:u((()=>[m(S(e.note),1)])),_:2},1024),s(V,null,{default:u((()=>{return[m(S((t=e.amount,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")))+" ₫",1)];var t})),_:2},1024),s(V,null,{default:u((()=>{return[m(S((t=e.date,new Date(t).toLocaleDateString("en-US",U))),1)];var t})),_:2},1024)])),_:2},1024)))),128))])])),_:1})):b("",!0)])):(c(),o(i(x),{key:1,style:{"font-weight":"600",width:"100%",padding:"20px"}},{default:u((()=>[L])),_:1}))])])),_:1})])),_:1})}}}),[["__scopeId","data-v-5b93ee5f"]]))}}}));
