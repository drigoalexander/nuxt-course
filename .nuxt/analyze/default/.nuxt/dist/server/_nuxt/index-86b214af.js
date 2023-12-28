import { _ as __nuxt_component_0 } from "./nuxt-link-8babdd53.js";
import { mergeProps, useSSRContext, ref, computed, unref, withCtx, createVNode } from "vue";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { n as navigateTo } from "../server.mjs";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "cookie-es";
import "ohash";
import "@supabase/supabase-js";
import "@vue/devtools-api";
import "animejs";
const _sfc_main$1 = {
  __name: "AnimatedNuxtLogo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "line-drawing-demo absolute" }, _attrs))}><svg class="lines stroke-1 stroke-[#00DC82]" width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M504.908 750H839.476C850.103 750.001 860.542 747.229 869.745 741.963C878.948 736.696 886.589 729.121 891.9 719.999C897.211 710.876 900.005 700.529 900 689.997C899.995 679.465 897.193 669.12 891.873 660.002L667.187 274.289C661.876 265.169 654.237 257.595 645.036 252.329C635.835 247.064 625.398 244.291 614.773 244.291C604.149 244.291 593.711 247.064 584.511 252.329C575.31 257.595 567.67 265.169 562.36 274.289L504.908 372.979L392.581 179.993C387.266 170.874 379.623 163.301 370.42 158.036C361.216 152.772 350.777 150 340.151 150C329.525 150 319.086 152.772 309.883 158.036C300.679 163.301 293.036 170.874 287.721 179.993L8.12649 660.002C2.80743 669.12 0.00462935 679.465 5.72978e-06 689.997C-0.00461789 700.529 2.78909 710.876 8.10015 719.999C13.4112 729.121 21.0523 736.696 30.255 741.963C39.4576 747.229 49.8973 750.001 60.524 750H270.538C353.748 750 415.112 713.775 457.336 643.101L559.849 467.145L614.757 372.979L779.547 655.834H559.849L504.908 750ZM267.114 655.737L120.551 655.704L340.249 278.586L449.87 467.145L376.474 593.175C348.433 639.03 316.577 655.737 267.114 655.737Z"></path></svg></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedNuxtLogo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const index_vue_vue_type_style_index_0_scoped_3c630771_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const columns = ref(1);
    const rows = ref(1);
    ref(50);
    ref(50);
    ref(["#FCF84A", "#FE2857", "#AF1DF5", "#171717"]);
    ref(0);
    const ComputedColumns = computed(() => {
      return columns.value;
    });
    const ComputedRows = computed(() => {
      return rows.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AnimatedNuxtLogo = __nuxt_component_1;
      const _cssVars = { style: {
        "--3f2a738c": unref(ComputedColumns),
        "--2b00dc8a": unref(ComputedRows)
      } };
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps({ class: "sr-only" }, _cssVars))} data-v-3c630771><select data-v-3c630771><option value="dark" data-v-3c630771${ssrIncludeBooleanAttr(Array.isArray(_ctx.$colorMode.preference) ? ssrLooseContain(_ctx.$colorMode.preference, "dark") : ssrLooseEqual(_ctx.$colorMode.preference, "dark")) ? " selected" : ""}></option><option value="light" data-v-3c630771${ssrIncludeBooleanAttr(Array.isArray(_ctx.$colorMode.preference) ? ssrLooseContain(_ctx.$colorMode.preference, "light") : ssrLooseEqual(_ctx.$colorMode.preference, "light")) ? " selected" : ""}></option><option value="neon" data-v-3c630771${ssrIncludeBooleanAttr(Array.isArray(_ctx.$colorMode.preference) ? ssrLooseContain(_ctx.$colorMode.preference, "neon") : ssrLooseEqual(_ctx.$colorMode.preference, "neon")) ? " selected" : ""}></option><option value="magenta" data-v-3c630771${ssrIncludeBooleanAttr(Array.isArray(_ctx.$colorMode.preference) ? ssrLooseContain(_ctx.$colorMode.preference, "magenta") : ssrLooseEqual(_ctx.$colorMode.preference, "magenta")) ? " selected" : ""}></option></select></div><div${ssrRenderAttrs(mergeProps({
        class: "w-screen h-screen wrapper fixed z-0 top-0 left-0 gap-0",
        style: { "{\n        grid-template-columns": "repeat(var(--col), 1fr)", "grid-template-rows": "repeat(var(--row), 1fr)" }
      }, _cssVars))} data-v-3c630771><!--[-->`);
      ssrRenderList(unref(ComputedColumns) * unref(ComputedRows), (el, idx) => {
        _push(`<div class="aspect-square w-[55px] tiles" data-v-3c630771></div>`);
      });
      _push(`<!--]--></div><main${ssrRenderAttrs(mergeProps({ class: "pointer-events-none mb-40 z-10 relative" }, _cssVars))} data-v-3c630771><div class="poi relative overflow-hidden dark:bg-darker lg:overflow-auto" id="home" data-v-3c630771><div class="absolute inset-x-0 top-32 lg:hidden" data-v-3c630771><div aria-hidden="true" class="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-60 2xl:mx-auto 2xl:max-w-6xl" data-v-3c630771><div class="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700" data-v-3c630771></div><div class="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600" data-v-3c630771></div></div></div><div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0" data-v-3c630771><div class="relative ml-auto pt-40 xl:pt-36" data-v-3c630771><div class="gap-12 md:flex md:items-center" data-v-3c630771><div class="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2" data-v-3c630771><h1 class="text-5xl font-black dark:text-white md:text-6xl xl:text-7xl" data-v-3c630771> Becoming a Nuxt Ninja: Level Up Your Skills! </h1><div class="" data-v-3c630771><p class="mt-8 text-lg text-gray-700 dark:text-gray-100" data-v-3c630771> Embark on an epic journey to unlock the full potential of Nuxt, the ultimate SSR JavaScript framework based on Vue. Discover the secrets, hone your skills, and become a true Nuxt master with our expert guidance. </p><div class="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start" data-v-3c630771>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/course"),
        class: "pointer-events-auto cursor-pointer before:bg-primary astro-Z4ZYBUMP"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white astro-Z4ZYBUMP" data-v-3c630771${_scopeId}> Get Started </span>`);
          } else {
            return [
              createVNode("span", { class: "text-white astro-Z4ZYBUMP" }, " Get Started ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_AnimatedNuxtLogo, { class: "right-1/2 translate-x-3/4 scale-90" }, null, _parent));
      _push(`</div><div class="mt-8 text-center md:mt-32 lg:mt-20 xl:mt-16" data-v-3c630771><span class="text-sm font-semibold tracking-wider text-gray-800 dark:text-white" data-v-3c630771>TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES</span><div class="mt-8 flex flex-wrap items-center justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24" data-v-3c630771><img class="h-8 w-auto lg:h-14" src="https://play-lh.googleusercontent.com/pHXtOQQ__TBgp_c9FgfBOCp4cXL9oU5tVAe318JDvcQP266UCO7U_VyO6lUzo8ZWPWJ_=w240-h480-rw" srcset="
                  https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Trade_Republic_logo_2021.svg/1200px-Trade_Republic_logo_2021.svg.png
                " loading="lazy" alt="airbnb" width="100" height="" data-v-3c630771><img class="h-6 w-auto lg:h-10" src="https://upload.wikimedia.org/wikipedia/commons/9/92/On-cloud-logo-white-background.svg" loading="lazy" alt="bissell" width="100" height="" data-v-3c630771><img class="h-6 w-auto lg:h-10" src="https://docs.vuejs.id/images/vueschool.png" loading="lazy" alt="ge" width="100" height="100" data-v-3c630771><img class="h-6 w-auto lg:h-10" src="https://www.pngall.com/wp-content/uploads/13/TikTok-Logo-PNG-Image-HD.png" loading="lazy" alt="lilly" width="100" height="100" data-v-3c630771><img class="h-8 w-auto lg:h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png" loading="lazy" alt="microsoft" width="100" height="" data-v-3c630771></div></div></div></div></div><div class="relative pt-32 md:pt-44" id="features" data-v-3c630771><div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0" data-v-3c630771><div class="mx-auto md:w-3/5" data-v-3c630771><h2 class="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl" data-v-3c630771> Shaped to meet big industry ready needs </h2><p class="mt-4 text-center text-gray-600 dark:text-gray-300" data-v-3c630771> We&#39;ve shaped our expertise to perfectly align with the demanding requirements of today&#39;s industry, ensuring you&#39;re prepared to meet its ever-evolving needs </p></div><div class="mt-16 md:mt-20" data-v-3c630771><div class="relative grid rounded-3xl border border-gray-200 p-1 dark:border-gray-800 lg:grid-cols-2" data-v-3c630771><div class="absolute inset-0 hidden h-max dark:block lg:my-auto" data-v-3c630771><div aria-hidden="true" class="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl" data-v-3c630771><div class="h-60 bg-gradient-to-br from-primary to-jetYellow blur-3xl dark:from-jetFuchsia" data-v-3c630771></div><div class="h-72 rounded-full bg-gradient-to-r from-jetPink to-jetPurple blur-3xl dark:from-transparent dark:to-jetYellow" data-v-3c630771></div></div></div><div data-v-3c630771><div class="relative flex h-full flex-col items-center justify-center gap-6 p-8 py-16 lg:py-8" data-v-3c630771><img class="w-16"${ssrRenderAttr("src", "")} alt="xp icon illustration" width="512" height="512" loading="lazy" data-v-3c630771><div class="mx-auto text-center sm:w-2/5" data-v-3c630771><h2 class="text-xl font-semibold text-gray-900 dark:text-white" data-v-3c630771> Real case big industry project </h2><p class="mt-3 text-gray-600 dark:text-gray-400" data-v-3c630771> Dolorem aliquid officiis quae ipsum nobis libero alias Iure nobis dicta. </p></div></div></div><div class="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 dark:bg-gray-800/50 sm:grid-cols-2" data-v-3c630771><div class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none" data-v-3c630771><div class="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700" data-v-3c630771><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 text-gray-700 dark:text-white" data-v-3c630771><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" data-v-3c630771></path></svg></div><div data-v-3c630771><h2 class="text-xl font-semibold text-gray-900 dark:text-white" data-v-3c630771> Security first </h2><p class="mt-3 text-gray-600 dark:text-gray-400" data-v-3c630771> Dolorem aliquid officiis quae ipsum nobis libero alias Iure nobis dicta. </p></div></div><div class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none" data-v-3c630771><div class="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700" data-v-3c630771><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 text-gray-700 dark:text-white" data-v-3c630771><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" data-v-3c630771></path></svg></div><div data-v-3c630771><h2 class="text-xl font-semibold text-gray-900 dark:text-white" data-v-3c630771> Payment Gateway </h2><p class="mt-3 text-gray-600 dark:text-gray-400" data-v-3c630771> Dolorem aliquid officiis quae ipsum nobis libero alias Iure nobis dicta. </p></div></div><div class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none" data-v-3c630771><div class="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700" data-v-3c630771><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 text-gray-700 dark:text-white" data-v-3c630771><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" data-v-3c630771></path></svg></div><div data-v-3c630771><h2 class="text-xl font-semibold text-gray-900 dark:text-white" data-v-3c630771> Robust System </h2><p class="mt-3 text-gray-600 dark:text-gray-400" data-v-3c630771> Dolorem aliquid officiis quae ipsum nobis libero alias Iure nobis dicta. </p></div></div><div class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none" data-v-3c630771><div class="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700" data-v-3c630771><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 text-gray-700 dark:text-white" data-v-3c630771><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" data-v-3c630771></path></svg></div><div data-v-3c630771><h2 class="text-xl font-semibold text-gray-900 dark:text-white" data-v-3c630771> Search engine </h2><p class="mt-3 text-gray-600 dark:text-gray-400" data-v-3c630771> Dolorem aliquid officiis quae ipsum nobis libero alias Iure nobis dicta. </p></div></div></div></div></div></div></div><div class="pt-32 md:pt-44" id="solution" data-v-3c630771><div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0" data-v-3c630771><div class="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0" data-v-3c630771><div class="relative ml-auto h-full md:w-1/2 chart test" data-v-3c630771></div><div class="md:w-1/2 lg:w-[47%]" data-v-3c630771><h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl" data-v-3c630771> Just focus on your skills, we&#39;ll take care the curicullum </h2><p class="my-12 text-gray-600 dark:text-gray-300" data-v-3c630771> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. <br data-v-3c630771><br data-v-3c630771> Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum amet. </p><div class="space-y-4 divide-y divide-gray-100 dark:divide-gray-800" data-v-3c630771><div class="mt-8 flex gap-4 md:items-center" data-v-3c630771><div class="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900" data-v-3c630771><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto h-6 w-6 text-gray-700 dark:text-gray-300" data-v-3c630771><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" data-v-3c630771></path></svg></div><div class="w-5/6" data-v-3c630771><h3 class="text-lg font-semibold text-gray-700 dark:text-white" data-v-3c630771> Chat Your Mentor </h3><p class="text-gray-500 dark:text-gray-400" data-v-3c630771> Asperiores nemo possimus nesciunt quam mollitia. </p></div></div><div class="flex gap-4 pt-4 md:items-center" data-v-3c630771><div class="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900" data-v-3c630771></div><div class="w-5/6" data-v-3c630771><h3 class="text-lg font-semibold text-gray-700 dark:text-white" data-v-3c630771> Real Time Location </h3><p class="text-gray-500 dark:text-gray-400" data-v-3c630771> Asperiores nemo possimus nesciunt quam mollitia. </p></div></div></div></div></div></div></div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c630771"]]);
export {
  index as default
};
//# sourceMappingURL=index-86b214af.js.map