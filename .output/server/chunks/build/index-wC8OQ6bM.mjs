import { defineComponent, mergeProps, ref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TerminalWindow",
  __ssrInlineRender: true,
  setup(__props) {
    const phrases = [
      "I build headless e-commerce",
      "I optimize Magento",
      "I design APIs"
    ];
    const currentPhraseIndex = ref(0);
    const currentCharIndex = ref(0);
    const isComplete = ref(false);
    const displayLines = computed(() => {
      const lines = [];
      for (let i = 0; i < currentPhraseIndex.value; i++) {
        lines.push(phrases[i]);
      }
      if (currentPhraseIndex.value < phrases.length) {
        lines.push(
          phrases[currentPhraseIndex.value].slice(0, currentCharIndex.value)
        );
      }
      return lines;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass rounded-lg overflow-hidden" }, _attrs))} data-v-8a73784a><div class="bg-dark-900 border-b border-cyber px-4 py-3 flex items-center justify-between" data-v-8a73784a><div class="flex items-center gap-2" data-v-8a73784a><div class="w-3 h-3 rounded-full bg-red-500" data-v-8a73784a></div><div class="w-3 h-3 rounded-full bg-yellow-500" data-v-8a73784a></div><div class="w-3 h-3 rounded-full bg-green-500" data-v-8a73784a></div></div><span class="font-mono text-xs text-gray-500" data-v-8a73784a>~/aivaras.dev</span><div class="w-8" data-v-8a73784a></div></div><div class="px-6 py-8" data-v-8a73784a><div class="space-y-4" data-v-8a73784a><!--[-->`);
      ssrRenderList(displayLines.value, (line, idx) => {
        _push(`<div class="flex items-baseline gap-3" data-v-8a73784a><span class="font-mono text-neon-cyan" data-v-8a73784a>$</span><span class="font-mono text-sm" data-v-8a73784a>`);
        if (idx < displayLines.value.length - 1 || isComplete.value) {
          _push(`<span data-v-8a73784a>${ssrInterpolate(line)}</span>`);
        } else {
          _push(`<span class="flex items-center" data-v-8a73784a>${ssrInterpolate(line)} <span class="ml-1 w-2 h-5 bg-neon-cyan animate-cursor-blink" data-v-8a73784a></span></span>`);
        }
        _push(`</span></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TerminalWindow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8a73784a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SkillsGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      {
        id: "magento",
        name: "Magento",
        icon: "\u26A1",
        description: "Expert in Magento 2 architecture, customization, and performance optimization",
        tags: ["Magento 2", "PHP", "MySQL"]
      },
      {
        id: "graphql",
        name: "GraphQL",
        icon: "\u{1F517}",
        description: "Design and optimization of GraphQL APIs for headless e-commerce",
        tags: ["Apollo", "Schema Design", "Performance"]
      },
      {
        id: "nuxt",
        name: "Nuxt.js",
        icon: "\u{1F49A}",
        description: "Modern Vue 3 with Nuxt for performant and SEO-friendly frontends",
        tags: ["Vue 3", "SSR", "SSG"]
      },
      {
        id: "php",
        name: "PHP",
        icon: "\u{1F418}",
        description: "Backend development with focus on clean architecture and SOLID principles",
        tags: ["Laravel", "Symfony", "APIs"]
      },
      {
        id: "system-design",
        name: "System Design",
        icon: "\u{1F3D7}\uFE0F",
        description: "Scalable architecture for e-commerce platforms and microservices",
        tags: ["Scalability", "Performance", "DevOps"]
      },
      {
        id: "devops",
        name: "DevOps",
        icon: "\u2699\uFE0F",
        description: "Docker, Kubernetes, CI/CD pipelines, and infrastructure automation",
        tags: ["Docker", "K8s", "CI/CD"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, _attrs))}><!--[-->`);
      ssrRenderList(skills, (skill) => {
        _push(`<div class="skill-card group"><div class="text-3xl mb-4 transform group-hover:scale-110 transition-transform">${ssrInterpolate(skill.icon)}</div><h3 class="font-mono font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors">${ssrInterpolate(skill.name)}</h3><p class="text-sm text-gray-400 mb-4">${ssrInterpolate(skill.description)}</p><div class="flex flex-wrap gap-2 justify-center"><!--[-->`);
        ssrRenderList(skill.tags, (tag) => {
          _push(`<span class="text-xs px-3 py-1 bg-dark-900 border border-white border-opacity-10 rounded text-gray-300">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillsGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Aivaras K. - Full-Stack Developer"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TerminalWindow = __nuxt_component_0;
      const _component_SkillsGrid = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><section class="max-w-6xl mx-auto px-4 py-20 md:py-32"><div class="grid md:grid-cols-2 gap-12 items-center"><div class="space-y-8"><div><h1 class="font-mono text-4xl md:text-5xl font-bold mb-4 text-white"> Aivaras Karali\u016Bnas </h1><p class="text-lg md:text-xl text-gray-400 mb-4"> Full-Stack Developer | 6+ years | <br> Magento \xB7 Laravel \xB7 Vue.js </p><p class="text-base text-gray-300"> Building e-commerce platforms &amp; corporate websites | <br> Results-driven | Remote/Hybrid </p></div><div class="space-y-3"><p class="font-mono text-sm text-gray-500">Currently working:</p><p class="text-neon-cyan font-mono text-lg"> \u2192 UAB FrontIT (Fullstack Developer) </p></div><div class="flex gap-4 pt-4"><button class="btn-primary"> View My Work </button><button class="btn-secondary"> Get in Touch </button></div></div><div class="hidden md:block">`);
      _push(ssrRenderComponent(_component_TerminalWindow, null, null, _parent));
      _push(`</div></div><div class="md:hidden mt-12">`);
      _push(ssrRenderComponent(_component_TerminalWindow, null, null, _parent));
      _push(`</div></section><section class="max-w-6xl mx-auto px-4 py-20 border-t border-cyber"><h2 class="section-title"> / experience </h2><div class="space-y-8"><div class="glass rounded-lg p-6 md:p-8"><div class="flex justify-between items-start mb-4"><div><h3 class="font-mono font-bold text-xl text-neon-cyan">FrontIT</h3><p class="text-gray-400 text-sm mt-1">Fullstack Developer</p></div><span class="text-gray-500 font-mono text-sm">2023.07 - Now</span></div><p class="text-gray-300 mb-3">2+ years | E-commerce &amp; web solutions</p><div class="flex flex-wrap gap-2"><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">Magento</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">Laravel</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">React</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">PHP</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">MySQL</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">Docker</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">AI</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">CI/CD</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">GraphQL</span></div></div><div class="glass rounded-lg p-6 md:p-8"><div class="flex justify-between items-start mb-4"><div><h3 class="font-mono font-bold text-xl text-neon-cyan">Creation</h3><p class="text-gray-400 text-sm mt-1">Developer</p></div><span class="text-gray-500 font-mono text-sm">2022.11 - 2023.06</span></div><p class="text-gray-300 mb-3">Magento &amp; Backend Development</p><div class="flex flex-wrap gap-2"><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">Magento</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">PHP</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">MySQL</span></div></div><div class="glass rounded-lg p-6 md:p-8"><div class="flex justify-between items-start mb-4"><div><h3 class="font-mono font-bold text-xl text-neon-cyan">VSBL Web Studio</h3><p class="text-gray-400 text-sm mt-1">Full-Stack Developer</p></div><span class="text-gray-500 font-mono text-sm">2019.10 - 2022.10</span></div><p class="text-gray-300 mb-3">Full-stack web development</p><div class="flex flex-wrap gap-2"><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">Laravel</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">Wordpress</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">Prestashop</span><span class="text-xs px-3 py-1 bg-dark-900 border border-neon-cyan border-opacity-30 rounded text-neon-cyan">Tailwind</span></div></div></div></section><section id="skills" class="max-w-6xl mx-auto px-4 py-20 border-t border-cyber"><h2 class="section-title"> / skills </h2>`);
      _push(ssrRenderComponent(_component_SkillsGrid, null, null, _parent));
      _push(`</section><section class="max-w-6xl mx-auto px-4 py-20"><div class="glass rounded-lg p-8 md:p-12"><h3 class="font-mono font-bold text-xl mb-4 glow-text"> / about </h3><p class="text-gray-300 leading-relaxed mb-4"> I&#39;m a full-stack developer motivated by results. With 5+ years of professional experience, I&#39;ve built and optimized e-commerce platforms, corporate websites, and scalable web solutions. My focus is on writing clean code, ensuring high performance, and delivering precision-engineered solutions. </p><p class="text-gray-300 leading-relaxed"> Whether I&#39;m architecting backend systems with Laravel, optimizing Magento implementations, or building responsive frontends with Vue.js, I bring the same principles to everything: precision, efficiency, and a commitment to understanding the fundamentals. I thrive in collaborative environments and am passionate about technical excellence. </p></div></section><section id="contact" class="max-w-6xl mx-auto px-4 py-20 border-t border-cyber"><h2 class="section-title"> / contact </h2><div class="grid md:grid-cols-2 gap-8"><div class="space-y-6"><div><p class="text-gray-500 font-mono text-sm mb-2">Email:</p><p class="text-neon-cyan font-mono">aivaras@karaliunas.dev</p></div><div><p class="text-gray-500 font-mono text-sm mb-2">Availability:</p><p class="text-neon-teal font-mono">Remote/Hybrid opportunities</p></div><div><p class="text-gray-500 font-mono text-sm mb-2">Social:</p><div class="flex gap-4"><a href="https://github.com/Akaraliunas" class="text-neon-cyan hover:text-neon-teal font-mono text-sm"> \u2192 GitHub </a><a href="#" class="text-neon-cyan hover:text-neon-teal font-mono text-sm"> \u2192 Twitter </a><a href="#" class="text-neon-cyan hover:text-neon-teal font-mono text-sm"> \u2192 LinkedIn </a></div></div></div><form class="space-y-4"><input type="text" placeholder="Your name" class="terminal-input w-full"><input type="email" placeholder="your@email.com" class="terminal-input w-full"><textarea placeholder="Your message..." rows="4" class="terminal-input w-full resize-none"></textarea><button type="submit" class="btn-primary w-full md:w-auto"> Send Message </button></form></div></section><footer class="border-t border-cyber mt-20 py-8"><div class="max-w-6xl mx-auto px-4"><p class="text-center text-gray-600 font-mono text-sm"> \xA9 2026 Aivaras Karali\u016Bnas. Crafted with precision. </p></div></footer></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-wC8OQ6bM.mjs.map
