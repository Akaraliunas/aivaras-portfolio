import _sfc_main$1 from './ContentRenderer-Sz8aNzU7.mjs';
import { a as useRoute, u as useHead, _ as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useAsyncData, q as queryContent } from './query-C6-TsK-y.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './ContentRendererMarkdown-upzEPMM3.mjs';
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
import 'property-information';
import './node-DPfXEbjB.mjs';
import './preview-C-taXg7G.mjs';
import 'vue-router';
import 'unhead/utils';
import '../_/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: article } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`article-${route.params.slug}`, async () => {
      return queryContent(`blog/${route.params.slug}`).findOne();
    })), __temp = await __temp, __restore(), __temp);
    useHead({
      title: computed(() => {
        var _a;
        return ((_a = article.value) == null ? void 0 : _a.title) || "Article - Aivaras";
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-2141695d><section class="max-w-3xl mx-auto px-4 py-20" data-v-2141695d>`);
      if (unref(article)) {
        _push(`<article class="prose prose-invert max-w-none" data-v-2141695d><h1 class="section-title" data-v-2141695d>${ssrInterpolate(unref(article).title)}</h1><div class="flex items-center gap-4 mb-12 text-gray-500 font-mono text-sm" data-v-2141695d><span data-v-2141695d>${ssrInterpolate(new Date(unref(article).date).toLocaleDateString())}</span><span data-v-2141695d>\u2022</span><span data-v-2141695d>${ssrInterpolate(unref(article).readingTime)} min read</span></div><div class="prose-content mb-12" data-v-2141695d>`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(article) }, null, _parent));
        _push(`</div><div class="border-t border-cyber pt-8 mt-12" data-v-2141695d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "text-neon-cyan hover:text-neon-teal font-mono text-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u2190 Back to articles `);
            } else {
              return [
                createTextVNode(" \u2190 Back to articles ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></article>`);
      } else {
        _push(`<div class="text-center py-12" data-v-2141695d><p class="text-gray-500 font-mono" data-v-2141695d>Article not found.</p></div>`);
      }
      _push(`</section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2141695d"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-BUNUIuSc.mjs.map
