import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_style,space,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let a,n,d,r,g,b,s,l,p,x,y,j,u,c,f,k,m,t,v,h,_,w,O,i,C,E,o,A,S,M,F;return{c(){a=element("footer"),n=element("ul"),d=element("li"),r=element("a"),g=element("i"),b=space(),s=element("li"),l=element("a"),p=element("i"),x=space(),y=element("br"),j=space(),u=element("li"),c=element("a"),f=element("i"),k=space(),m=element("div"),t=element("p"),v=text("Made with "),h=element("i"),_=text(` by
      Benjamin Waller `),w=element("br"),O=text(`
      Powered by
      `),i=element("a"),C=text("Plenti"),E=text(`
      and
      `),o=element("a"),A=text("Svelte"),S=space(),M=element("br"),F=text(" © 2023 | All Rights Reserved"),this.h()},l(e){a=claim_element(e,"FOOTER",{class:!0});var T,z,D,L,R,P,H,I,B,V,$,N=children(a);n=claim_element(N,"UL",{id:!0,class:!0}),z=children(n),d=claim_element(z,"LI",{style:!0,class:!0}),L=children(d),r=claim_element(L,"A",{href:!0,target:!0,class:!0}),R=children(r),g=claim_element(R,"I",{class:!0}),children(g).forEach(detach),R.forEach(detach),L.forEach(detach),b=claim_space(z),s=claim_element(z,"LI",{style:!0,class:!0}),D=children(s),l=claim_element(D,"A",{href:!0,target:!0,class:!0}),P=children(l),p=claim_element(P,"I",{class:!0}),children(p).forEach(detach),P.forEach(detach),x=claim_space(D),y=claim_element(D,"BR",{}),D.forEach(detach),j=claim_space(z),u=claim_element(z,"LI",{style:!0,class:!0}),H=children(u),c=claim_element(H,"A",{href:!0,target:!0,class:!0}),I=children(c),f=claim_element(I,"I",{class:!0}),children(f).forEach(detach),I.forEach(detach),H.forEach(detach),z.forEach(detach),k=claim_space(N),m=claim_element(N,"DIV",{class:!0}),B=children(m),t=claim_element(B,"P",{style:!0}),T=children(t),v=claim_text(T,"Made with "),h=claim_element(T,"I",{class:!0,style:!0}),children(h).forEach(detach),_=claim_text(T,` by
      Benjamin Waller `),w=claim_element(T,"BR",{}),O=claim_text(T,`
      Powered by
      `),i=claim_element(T,"A",{target:!0,rel:!0,href:!0,class:!0}),V=children(i),C=claim_text(V,"Plenti"),V.forEach(detach),E=claim_text(T,`
      and
      `),o=claim_element(T,"A",{target:!0,rel:!0,href:!0,class:!0}),$=children(o),A=claim_text($,"Svelte"),$.forEach(detach),S=claim_space(T),M=claim_element(T,"BR",{}),F=claim_text(T," © 2023 | All Rights Reserved"),T.forEach(detach),B.forEach(detach),N.forEach(detach),this.h()},h(){attr(g,"class","fa-brands fa-github"),attr(r,"href","https://github.com/jamestagal"),attr(r,"target","_blank"),attr(r,"class","svelte-mnbhuh"),set_style(d,"--clr","#dfe6e9"),attr(d,"class","svelte-mnbhuh"),attr(p,"class","fa-brands fa-linkedin"),attr(l,"href","https://www.linkedin.com/in/benjaminjameswaller/"),attr(l,"target","_blank"),attr(l,"class","svelte-mnbhuh"),set_style(s,"--clr","#dfe6e9"),attr(s,"class","svelte-mnbhuh"),attr(f,"class","fa-solid fa-globe"),attr(c,"href","https://edtechdesigner.io/"),attr(c,"target","_blank"),attr(c,"class","svelte-mnbhuh"),set_style(u,"--clr","#dfe6e9"),attr(u,"class","svelte-mnbhuh"),attr(n,"id","media"),attr(n,"class","svelte-mnbhuh"),attr(h,"class","fa-solid fa-heart"),set_style(h,"color","red"),attr(i,"target","_blank"),attr(i,"rel","noopener"),attr(i,"href","https://plenti.co/"),attr(i,"class","svelte-mnbhuh"),attr(o,"target","_blank"),attr(o,"rel","noopener"),attr(o,"href","https://svelte.dev/"),attr(o,"class","svelte-mnbhuh"),set_style(t,"color","#dfe6e9"),attr(m,"class","text-center svelte-mnbhuh"),attr(a,"class","svelte-mnbhuh")},m(e,T){insert_hydration(e,a,T),append_hydration(a,n),append_hydration(n,d),append_hydration(d,r),append_hydration(r,g),append_hydration(n,b),append_hydration(n,s),append_hydration(s,l),append_hydration(l,p),append_hydration(s,x),append_hydration(s,y),append_hydration(n,j),append_hydration(n,u),append_hydration(u,c),append_hydration(c,f),append_hydration(a,k),append_hydration(a,m),append_hydration(m,t),append_hydration(t,v),append_hydration(t,h),append_hydration(t,_),append_hydration(t,w),append_hydration(t,O),append_hydration(t,i),append_hydration(i,C),append_hydration(t,E),append_hydration(t,o),append_hydration(o,A),append_hydration(t,S),append_hydration(t,M),append_hydration(t,F)},p:noop,i:noop,o:noop,d(e){e&&detach(a)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component