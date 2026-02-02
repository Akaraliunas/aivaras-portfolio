import { u as useHead, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData, q as queryContent } from './query-C6-TsK-y.mjs';
import '../_/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'unhead/utils';
import '../_/index.mjs';
import './preview-C-taXg7G.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: articles, pending } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blog-list",
      () => queryContent("/blog").sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Blog - Aivaras"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><section class="max-w-4xl mx-auto px-4 py-20"><h1 class="section-title"> / blog </h1>`);
      if (unref(pending)) {
        _push(`<div class="text-gray-400 font-mono"> Loading articles... </div>`);
      } else {
        _push(`<div class="space-y-6">`);
        if (unref(articles) && unref(articles).length > 0) {
          _push(`<div><!--[-->`);
          ssrRenderList(unref(articles), (article) => {
            _push(`<div class="glass rounded-lg p-6 hover:border-neon-cyan hover:border-opacity-30 transition-all mb-6">`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: article._path,
              class: "block"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<h2 class="font-mono font-bold text-xl mb-2 text-neon-cyan hover:text-neon-teal"${_scopeId}>${ssrInterpolate(article.title)}</h2><p class="text-gray-400 text-sm mb-4"${_scopeId}>${ssrInterpolate(article.description)}</p><div class="flex items-center justify-between"${_scopeId}><span class="font-mono text-xs text-gray-600"${_scopeId}>${ssrInterpolate(new Date(article.date).toLocaleDateString())}</span><span class="text-neon-cyan font-mono text-sm"${_scopeId}> \u2192 Read more </span></div>`);
                } else {
                  return [
                    createVNode("h2", { class: "font-mono font-bold text-xl mb-2 text-neon-cyan hover:text-neon-teal" }, toDisplayString(article.title), 1),
                    createVNode("p", { class: "text-gray-400 text-sm mb-4" }, toDisplayString(article.description), 1),
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("span", { class: "font-mono text-xs text-gray-600" }, toDisplayString(new Date(article.date).toLocaleDateString()), 1),
                      createVNode("span", { class: "text-neon-cyan font-mono text-sm" }, " \u2192 Read more ")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      if (!unref(pending) && unref(articles).length === 0) {
        _push(`<div class="text-center py-12"><p class="text-gray-500 font-mono"> No articles yet. Check back soon. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CVwQm58I.mjs.map
