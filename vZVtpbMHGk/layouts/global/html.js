import{SvelteComponent,append_hydration,assign,attr,check_outros,children,claim_component,claim_element,claim_space,construct_svelte_component,create_component,destroy_component,detach,element,get_spread_object,get_spread_update,group_outros,init,insert_hydration,mount_component,safe_not_equal,space,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import Footer from"./footer.js";import Head from"./head.js";import Header from"./header.js";import Snow from"./snow.js";function create_fragment(e){let s,o,p,l,n,a,m,r,h,t,u,c,d;o=new Head({props:{title:e[0].filename,env:e[2]}}),a=new Snow({}),r=new Header({});const f=[e[0].fields,{allContent:e[3]},{allLayouts:e[4]},{content:e[0]}];var i=e[1];function g(){let t={};for(let e=0;e<f.length;e+=1)t=assign(t,f[e]);return{props:t}}return i&&(t=construct_svelte_component(i,g(e))),c=new Footer({}),{c(){s=element("html"),create_component(o.$$.fragment),p=space(),l=element("body"),n=element("main"),create_component(a.$$.fragment),m=space(),create_component(r.$$.fragment),h=space(),t&&create_component(t.$$.fragment),u=space(),create_component(c.$$.fragment),this.h()},l(e){s=claim_element(e,"HTML",{lang:!0});var i,f,d=children(s);claim_component(o.$$.fragment,d),p=claim_space(d),l=claim_element(d,"BODY",{}),f=children(l),n=claim_element(f,"MAIN",{class:!0}),i=children(n),claim_component(a.$$.fragment,i),m=claim_space(i),claim_component(r.$$.fragment,i),h=claim_space(i),t&&claim_component(t.$$.fragment,i),u=claim_space(i),claim_component(c.$$.fragment,i),i.forEach(detach),f.forEach(detach),d.forEach(detach),this.h()},h(){attr(n,"class","main"),attr(s,"lang","en")},m(e,i){insert_hydration(e,s,i),mount_component(o,s,null),append_hydration(s,p),append_hydration(s,l),append_hydration(l,n),mount_component(a,n,null),append_hydration(n,m),mount_component(r,n,null),append_hydration(n,h),t&&mount_component(t,n,null),append_hydration(n,u),mount_component(c,n,null),d=!0},p(e,[s]){const a={};s&1&&(a.title=e[0].filename),s&4&&(a.env=e[2]),o.$set(a);const r=s&25?get_spread_update(f,[s&1&&get_spread_object(e[0].fields),s&8&&{allContent:e[3]},s&16&&{allLayouts:e[4]},s&1&&{content:e[0]}]):{};if(s&2&&i!==(i=e[1])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}i?(t=construct_svelte_component(i,g(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,n,u)):t=null}else i&&t.$set(r)},i(e){if(d)return;transition_in(o.$$.fragment,e),transition_in(a.$$.fragment,e),transition_in(r.$$.fragment,e),t&&transition_in(t.$$.fragment,e),transition_in(c.$$.fragment,e),d=!0},o(e){transition_out(o.$$.fragment,e),transition_out(a.$$.fragment,e),transition_out(r.$$.fragment,e),t&&transition_out(t.$$.fragment,e),transition_out(c.$$.fragment,e),d=!1},d(e){e&&detach(s),destroy_component(o),destroy_component(a),destroy_component(r),t&&destroy_component(t),destroy_component(c)}}}function instance(e,t,n){let{content:s,layout:o,env:i,allContent:a,allLayouts:r}=t;return e.$$set=e=>{"content"in e&&n(0,s=e.content),"layout"in e&&n(1,o=e.layout),"env"in e&&n(2,i=e.env),"allContent"in e&&n(3,a=e.allContent),"allLayouts"in e&&n(4,r=e.allLayouts)},[s,o,i,a,r]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0,layout:1,env:2,allContent:3,allLayouts:4})}}export default Component