import { C as defineComponent, E as openBlock, O as unref, S as createVNode, b as createStaticVNode, c as Content, h as useData, s as _plugin_vue_export_helper_default, v as createBaseVNode, y as createElementBlock } from "./framework.BmVEnEPd.js";
import "./assets.DxFOtzJT.js";
JSON.parse("{\"title\":\"Leonhardt\",\"description\":\"\",\"frontmatter\":{},\"headers\":[],\"relativePath\":\".vitepress/theme/content/profile.md\",\"filePath\":\".vitepress/theme/content/profile.md\"}");
var _sfc_main = { name: ".vitepress/theme/content/profile.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [createStaticVNode("<p><img src=\"/avatar.png\" alt=\"avatar\"></p><h1 id=\"leonhardt\" tabindex=\"-1\">Leonhardt <a class=\"header-anchor\" href=\"#leonhardt\" aria-label=\"Permalink to “Leonhardt”\">​</a></h1><p>seize the moment.</p><p>🇨🇳 | HUST | EE</p><p>Links:<br><a href=\"https://github.com/LeonhardtHUST\" target=\"_blank\" rel=\"noreferrer\">GitHub</a><br><a href=\"/blog\">博客站</a><br><a href=\"/projects\">终末地工业研究院武陵信息工程研究所</a></p>", 5)])]);
}
var profile_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
//#region .vitepress/theme/Layout.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "split-home"
};
var _hoisted_2 = { class: "profile-pane" };
var _hoisted_3 = { class: "main-content" };
var _hoisted_4 = {
	key: 1,
	class: "normal-page"
};
//#endregion
//#region .vitepress/theme/index.ts
var theme_default = { Layout: /* @__PURE__ */ defineComponent({
	__name: "Layout",
	setup(__props) {
		const { frontmatter } = useData();
		return (_ctx, _cache) => {
			return unref(frontmatter).layout === "split-home" ? (openBlock(), createElementBlock("main", _hoisted_1, [
				createBaseVNode("aside", _hoisted_2, [createVNode(unref(profile_default))]),
				_cache[0] || (_cache[0] = createBaseVNode("div", { class: "divider" }, null, -1)),
				createBaseVNode("article", _hoisted_3, [createVNode(unref(Content))])
			])) : (openBlock(), createElementBlock("main", _hoisted_4, [createVNode(unref(Content))]));
		};
	}
}) };
//#endregion
export { theme_default as t };
