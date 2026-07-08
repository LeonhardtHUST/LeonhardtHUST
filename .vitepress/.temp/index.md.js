import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
//#region index.md
var __pageData = JSON.parse("{\"title\":\"Leonhardt\",\"description\":\"\",\"frontmatter\":{\"layout\":\"split-home\",\"title\":\"Leonhardt\"},\"headers\":[],\"relativePath\":\"index.md\",\"filePath\":\"index.md\"}");
var _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hello-world" tabindex="-1">Hello world <a class="header-anchor" href="#hello-world" aria-label="Permalink to “Hello world”">​</a></h1><p>Some self-introduction here.</p><p>You may scroll this page to view more details below.</p><h2 id="this-section-is" tabindex="-1">This section is <a class="header-anchor" href="#this-section-is" aria-label="Permalink to “This section is”">​</a></h2><p>Rendered from a markdown file.</p><p>As well as the left fixed section.</p><p>But the two sections are from different source files.</p></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var LeonhardtHUST_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, LeonhardtHUST_default as default };
