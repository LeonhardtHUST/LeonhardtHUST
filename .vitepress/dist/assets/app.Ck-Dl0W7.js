import { C as defineComponent, D as watchEffect, T as onMounted, _ as createSSRApp, a as useCodeGroups, c as Content, d as pathToFile, f as dataSymbol, g as inBrowser, h as useData, i as useCopyCode, l as RouterSymbol, m as siteDataRef, n as usePrefetch, o as ClientOnly, p as initData, r as useUpdateHead, t as __vitePreload, u as createRouter, w as h } from "./chunks/framework.BmVEnEPd.js";
import { t as theme_default } from "./chunks/theme.X5FXx2Hu.js";
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
			pageModule = __vitePreload(() => import(
				/*@vite-ignore*/
				pageFilePath
), []);
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
export { createApp };
