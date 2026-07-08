import { a as pathToFile, c as siteDataRef, d as inBrowser, f as isShell, i as useRoute, l as useData, n as RouterSymbol, o as dataSymbol, p as mergeHead, r as createRouter, s as initData, t as Content, u as createTitle } from "./client.C4C2pNNb.js";
import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { renderToString, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { createSSRApp, defineComponent, h, mergeProps, onMounted, onUnmounted, ref, unref, useSSRContext, watch, watchEffect } from "vue";
//#region /avatar.png
var avatar_default = "/avatar.png";
JSON.parse("{\"title\":\"Leonhardt\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\".vitepress/theme/content/profile.md\",\"filePath\":\".vitepress/theme/content/profile.md\"}");
var _sfc_main = { name: ".vitepress/theme/content/profile.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><p><img${ssrRenderAttr("src", avatar_default)} alt="avatar"></p><h1 id="leonhardt" tabindex="-1">Leonhardt <a class="header-anchor" href="#leonhardt" aria-label="Permalink to “Leonhardt”">​</a></h1><p>seize the moment.</p><p>🇨🇳 | HUST | EE</p><p>Links:<br><a href="https://github.com/LeonhardtHUST" target="_blank" rel="noreferrer">GitHub</a><br><a href="/blog">博客站</a><br><a href="/projects">终末地工业研究院武陵信息工程研究所</a></p></div>`);
}
var _sfc_setup$1 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/content/profile.md");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var profile_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region .vitepress/theme/Layout.vue?vue&type=script&setup=true&lang.ts
var Layout_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Layout",
	__ssrInlineRender: true,
	setup(__props) {
		const { frontmatter } = useData();
		return (_ctx, _push, _parent, _attrs) => {
			if (unref(frontmatter).layout === "split-home") {
				_push(`<main${ssrRenderAttrs(mergeProps({ class: "split-home" }, _attrs))}><aside class="profile-pane">`);
				_push(ssrRenderComponent(unref(profile_default), null, null, _parent));
				_push(`</aside><div class="divider"></div><article class="main-content">`);
				_push(ssrRenderComponent(unref(Content), null, null, _parent));
				_push(`</article></main>`);
			} else {
				_push(`<main${ssrRenderAttrs(mergeProps({ class: "normal-page" }, _attrs))}>`);
				_push(ssrRenderComponent(unref(Content), null, null, _parent));
				_push(`</main>`);
			}
		};
	}
});
//#endregion
//#region .vitepress/theme/Layout.vue
var _sfc_setup = Layout_vue_vue_type_script_setup_true_lang_default.setup;
Layout_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/Layout.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
//#region .vitepress/theme/index.ts
var theme_default = { Layout: Layout_vue_vue_type_script_setup_true_lang_default };
//#endregion
//#region node_modules/.pnpm/vitepress@2.0.0-alpha.18_postcss@8.5.16/node_modules/vitepress/dist/client/app/components/ClientOnly.js
var ClientOnly = defineComponent({ setup(_, { slots }) {
	const show = ref(false);
	onMounted(() => {
		show.value = true;
	});
	return () => show.value && slots.default ? slots.default() : null;
} });
//#endregion
//#region node_modules/.pnpm/vitepress@2.0.0-alpha.18_postcss@8.5.16/node_modules/vitepress/dist/client/app/composables/codeGroups.js
function useCodeGroups() {
	if (inBrowser) window.addEventListener("click", (e) => {
		const el = e.target;
		if (el.matches(".vp-code-group input")) {
			const group = el.parentElement?.parentElement;
			if (!group) return;
			const i = Array.from(group.querySelectorAll("input")).indexOf(el);
			if (i < 0) return;
			const blocks = group.querySelector(".blocks");
			if (!blocks) return;
			const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
			if (!current) return;
			const next = blocks.children[i];
			if (!next || current === next) return;
			current.classList.remove("active");
			activate(next);
			(group?.querySelector(`label[for="${el.id}"]`))?.scrollIntoView({ block: "nearest" });
		}
	});
}
function activate(el) {
	el.classList.add("active");
	window.dispatchEvent(new CustomEvent("vitepress:codeGroupTabActivate", { detail: el }));
}
//#endregion
//#region node_modules/.pnpm/vitepress@2.0.0-alpha.18_postcss@8.5.16/node_modules/vitepress/dist/client/app/composables/copyCode.js
var ignoredNodes = [".vp-copy-ignore", ".diff.remove"].join(", ");
function useCopyCode() {
	if (inBrowser) {
		const timeoutIdMap = /* @__PURE__ */ new WeakMap();
		window.addEventListener("click", (e) => {
			const el = e.target;
			if (el.matches("div[class*=\"language-\"] > button.copy")) {
				const parent = el.parentElement;
				const sibling = el.nextElementSibling?.nextElementSibling;
				if (!parent || !sibling) return;
				const clone = sibling.cloneNode(true);
				clone.querySelectorAll(ignoredNodes).forEach((node) => node.remove());
				clone.innerHTML = clone.innerHTML.replace(/\n+/g, "\n");
				let text = clone.textContent || "";
				if (isShell(/language-(\w+)/.exec(parent.className)?.[1] || "")) text = text.replace(/^ *(\$|>) /gm, "").trim();
				copyToClipboard(text).then(() => {
					el.classList.add("copied");
					clearTimeout(timeoutIdMap.get(el));
					const timeoutId = setTimeout(() => {
						el.classList.remove("copied");
						el.blur();
						timeoutIdMap.delete(el);
					}, 2e3);
					timeoutIdMap.set(el, timeoutId);
				});
			}
		});
	}
}
async function copyToClipboard(text) {
	try {
		await navigator.clipboard.writeText(text);
	} catch {
		const element = document.createElement("textarea");
		const previouslyFocusedElement = document.activeElement;
		element.value = text;
		element.setAttribute("readonly", "");
		element.style.contain = "strict";
		element.style.position = "absolute";
		element.style.left = "-9999px";
		element.style.fontSize = "12pt";
		const selection = document.getSelection();
		const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
		document.body.appendChild(element);
		element.select();
		element.selectionStart = 0;
		element.selectionEnd = text.length;
		document.execCommand("copy");
		document.body.removeChild(element);
		if (originalRange) {
			selection.removeAllRanges();
			selection.addRange(originalRange);
		}
		if (previouslyFocusedElement) previouslyFocusedElement.focus();
	}
}
//#endregion
//#region node_modules/.pnpm/vitepress@2.0.0-alpha.18_postcss@8.5.16/node_modules/vitepress/dist/client/app/composables/head.js
function useUpdateHead(route, siteDataByRouteRef) {
	let isFirstUpdate = true;
	let managedHeadElements = [];
	const updateHeadTags = (newTags) => {
		if (isFirstUpdate) {
			isFirstUpdate = false;
			newTags.forEach((tag) => {
				const headEl = createHeadElement(tag);
				for (const el of document.head.children) if (el.isEqualNode(headEl)) {
					managedHeadElements.push(el);
					return;
				}
			});
			return;
		}
		const newElements = newTags.map(createHeadElement);
		managedHeadElements.forEach((oldEl, oldIndex) => {
			const matchedIndex = newElements.findIndex((newEl) => newEl?.isEqualNode(oldEl ?? null));
			if (matchedIndex !== -1) delete newElements[matchedIndex];
			else {
				oldEl?.remove();
				delete managedHeadElements[oldIndex];
			}
		});
		newElements.forEach((el) => el && document.head.appendChild(el));
		managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
	};
	watchEffect(() => {
		const pageData = route.data;
		const siteData = siteDataByRouteRef.value;
		const pageDescription = pageData && pageData.description;
		const frontmatterHead = pageData && pageData.frontmatter.head || [];
		const title = createTitle(siteData, pageData);
		if (title !== document.title) document.title = title;
		const description = pageDescription || siteData.description;
		let metaDescriptionElement = document.querySelector(`meta[name=description]`);
		if (metaDescriptionElement) {
			if (metaDescriptionElement.getAttribute("content") !== description) metaDescriptionElement.setAttribute("content", description);
		} else createHeadElement(["meta", {
			name: "description",
			content: description
		}]);
		updateHeadTags(mergeHead(siteData.head, filterOutHeadDescription(frontmatterHead)));
	});
}
function createHeadElement([tag, attrs, innerHTML]) {
	const el = document.createElement(tag);
	for (const key in attrs) el.setAttribute(key, attrs[key]);
	if (innerHTML) el.innerHTML = innerHTML;
	if (tag === "script" && attrs.async == null) el.async = false;
	return el;
}
function isMetaDescription(headConfig) {
	return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
	return head.filter((h) => !isMetaDescription(h));
}
//#endregion
//#region node_modules/.pnpm/vitepress@2.0.0-alpha.18_postcss@8.5.16/node_modules/vitepress/dist/client/app/composables/preFetch.js
var hasFetched = /* @__PURE__ */ new Set();
var createLink = () => document.createElement("link");
var viaDOM = (url) => {
	const link = createLink();
	link.rel = `prefetch`;
	link.href = url;
	document.head.appendChild(link);
};
var viaXHR = (url) => {
	const req = new XMLHttpRequest();
	req.open("GET", url, req.withCredentials = true);
	req.send();
};
var link;
var doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
	if (!inBrowser) return;
	if (!window.IntersectionObserver) return;
	let conn;
	if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) return;
	const rIC = window.requestIdleCallback || setTimeout;
	let observer = null;
	const observeLinks = () => {
		if (observer) observer.disconnect();
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const link = entry.target;
					observer.unobserve(link);
					const { pathname } = link;
					if (!hasFetched.has(pathname)) {
						hasFetched.add(pathname);
						const pageChunkPath = pathToFile(pathname);
						if (pageChunkPath) doFetch(pageChunkPath);
					}
				}
			});
		});
		rIC(() => {
			document.querySelectorAll("#app a").forEach((link) => {
				const { hostname, pathname } = new URL(link.href instanceof SVGAnimatedString ? link.href.animVal : link.href, link.baseURI);
				const extMatch = pathname.match(/\.\w+$/);
				if (extMatch && extMatch[0] !== ".html") return;
				if (link.target !== "_blank" && hostname === location.hostname) if (pathname !== location.pathname) observer.observe(link);
				else hasFetched.add(pathname);
			});
		});
	};
	onMounted(observeLinks);
	const route = useRoute();
	watch(() => route.path, observeLinks);
	onUnmounted(() => {
		observer && observer.disconnect();
	});
}
//#endregion
//#region node_modules/.pnpm/vitepress@2.0.0-alpha.18_postcss@8.5.16/node_modules/vitepress/dist/client/app/index.js
function resolveThemeExtends(theme) {
	if (theme.extends) {
		const base = resolveThemeExtends(theme.extends);
		return {
			...base,
			...theme,
			async enhanceApp(ctx) {
				if (base.enhanceApp) await base.enhanceApp(ctx);
				if (theme.enhanceApp) await theme.enhanceApp(ctx);
			}
		};
	}
	return theme;
}
var Theme = resolveThemeExtends(theme_default);
var VitePressApp = defineComponent({
	name: "VitePressApp",
	setup() {
		const { site, lang, dir } = useData();
		onMounted(() => {
			watchEffect(() => {
				document.documentElement.lang = lang.value;
				document.documentElement.dir = dir.value;
			});
		});
		if (site.value.router.prefetchLinks) usePrefetch();
		useCopyCode();
		useCodeGroups();
		if (Theme.setup) Theme.setup();
		return () => h(Theme.Layout);
	}
});
async function createApp() {
	globalThis.__VITEPRESS__ = true;
	const router = newRouter();
	const app = newApp();
	app.provide(RouterSymbol, router);
	const data = initData(router.route);
	app.provide(dataSymbol, data);
	app.component("Content", Content);
	app.component("ClientOnly", ClientOnly);
	Object.defineProperties(app.config.globalProperties, {
		$frontmatter: { get() {
			return data.frontmatter.value;
		} },
		$params: { get() {
			return data.page.value.params;
		} }
	});
	if (Theme.enhanceApp) await Theme.enhanceApp({
		app,
		router,
		siteData: siteDataRef
	});
	return {
		app,
		router,
		data
	};
}
function newApp() {
	return createSSRApp(VitePressApp);
}
function newRouter() {
	let isInitialPageLoad = inBrowser;
	return createRouter((path) => {
		let pageFilePath = pathToFile(path);
		let pageModule = null;
		if (pageFilePath) {
			if (isInitialPageLoad) pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
			pageModule = import(
				/*@vite-ignore*/
				pageFilePath
);
		}
		if (inBrowser) isInitialPageLoad = false;
		return pageModule;
	}, Theme.NotFound);
}
if (inBrowser) createApp().then(({ app, router, data }) => {
	router.go(location.href, { initialLoad: true }).then(() => {
		useUpdateHead(router.route, data.site);
		app.mount("#app");
	});
});
//#endregion
//#region node_modules/.pnpm/vitepress@2.0.0-alpha.18_postcss@8.5.16/node_modules/vitepress/dist/client/app/ssr.js
async function render(path) {
	const { app, router } = await createApp();
	await router.go(path);
	const ctx = {
		content: "",
		vpSocialIcons: /* @__PURE__ */ new Set()
	};
	ctx.content = await renderToString(app, ctx);
	return ctx;
}
//#endregion
export { render };
