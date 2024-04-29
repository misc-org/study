import hljs from "highlight.js/lib/core";
import { storeHighlightJs } from "@skeletonlabs/skeleton";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/panda-syntax-light.css";

export function setupHighlightJs() {
  storeHighlightJs.set(hljs);

  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("css", css);
  hljs.registerLanguage("json", json);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("typescript", typescript);
}