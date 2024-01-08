import{d as x,o as y,c as p,r as b,f as P,g as B,t as m,h as L,i as T,b as S,u as V,j as C,k as g,l as I,m as h,p as i,e as v,q as z}from"./entry.cc832dd7.js";import{u as D,a as O}from"./useCourse.08ead264.js";const E=["src"],N=x({__name:"VideoPlayer",props:{videoID:{type:Number,required:!0}},setup(a){const e=a;return(t,r)=>(y(),p("iframe",{src:`https://player.vimeo.com/video/${e.videoID}`,width:"100%",height:"100%",frameborder:"0",title:"{video_title}",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""},null,8,E))}}),U=x({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(a,{slots:e,attrs:t}){const r=b(!1);return P(()=>{r.value=!0}),u=>{var n;if(r.value)return(n=e.default)==null?void 0:n.call(e);const s=e.fallback||e.placeholder;if(s)return s();const o=u.fallback||u.placeholder||"",l=u.fallbackTag||u.placeholderTag||"span";return p(l,t,o)}}}),q=async(a,e)=>{const t=`/api/course/chapter/${a}/lesson/${e}`;return await D(t)};const A={__name:"CompleteLessonButton",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a){return(e,t)=>(y(),p("button",{class:L(["btn py-4",{"btn-primary":!a.modelValue,"btn-success":a.modelValue}]),onClick:t[0]||(t[0]=r=>e.$emit("update:modelValue",!a.modelValue))},m(a.modelValue?"Completed":"Mark as completed"),3))}},M=B(A,[["__scopeId","data-v-ce9c288f"]]),j=T("courseProgress",()=>{const a=S(),e=b({}),t=b(!1);async function r(){var o;if(t.value)return;t.value=!0;const s=await $fetch("/api/user/progress",{method:"POST",body:{userEmail:(o=a.value)==null?void 0:o.email}});e.value=s}return{initialize:r,progress:e,toggleComplete:async(s,o)=>{var n;if(!a.value)return;if(!s||!o){const{params:{chapterSession:d,lessonSlug:f}}=V();s=d,o=f}const l=(n=e.value[s])==null?void 0:n[o];e.value[s]={...e.value[s],[o]:!l};try{await $fetch(`/api/course/chapter/${s}/lesson/${o}/progress`,{method:"POST",body:{completed:!l,userEmail:a.value.email}})}catch(d){console.error(d),e.value[s]={...e.value[s],[o]:l}}}}}),H={class:"w-3/4 mx-auto h-3/4 my-auto gap-6 flex flex-col"},R={class:"text-xl font-semibold"},W={class:"text-4xl font-bold"},J={__name:"[lessonSlug]",async setup(a){let e,t;const r=j(),{initialize:u,toggleComplete:s}=r;S(),u();const o=([e,t]=C(()=>O()),e=await e,t(),e),{params:l}=V(),n=([e,t]=C(()=>q(l.chapterSession,l.lessonSlug)),e=await e,t(),e),d=g(()=>o.value.data.chapters.find(c=>c.slug==l.chapterSession)),f=g(()=>d.value.lessons.find(c=>c.slug==l.lessonSlug)),k=g(()=>{var c,_;return((_=(c=r.progress)==null?void 0:c[l.chapterSession])==null?void 0:_[l.lessonSlug])||!1});return I({title:`${f.value.title}`}),(c,_)=>{const w=N,$=U;return y(),p("div",H,[h("h4",R," Chapter "+m(i(d).number)+" - Lesson "+m(i(n).data.number),1),h("h1",W,m(i(n).data.title),1),v(w,{videoID:i(n).data.videoId},null,8,["videoID"]),h("p",null,m(i(n).data.text),1),v($,null,{default:z(()=>[v(M,{modelValue:i(k),"onUpdate:modelValue":i(s)},null,8,["modelValue","onUpdate:modelValue"])]),_:1})])}}};export{J as default};
