export function parser(data: any, content: any[]) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");

    Array.from(doc.body.childNodes).forEach((node) => {
        if (node instanceof Element && node.hasAttribute("data-filename")) {
            const filename = node.getAttribute("data-filename") || "";
            const codeElement = node.querySelector("code");
            if (codeElement) {
                const language = codeElement.className.replace("language-", "");
                const code: string = codeElement.textContent
                    ? codeElement.textContent
                    : "";

                content.push({ type: "code", language, code, filename });
            }
        } else if (node instanceof Element) {
            if (node.tagName === 'H2' || node.tagName === 'H3') {
                content.push({ type: node.tagName.toLowerCase(), text: node.textContent || '' });
            } else {
                content.push({ type: "html", html: node.outerHTML });
            }
        }
    });

    return content;
}

export type ContentItem =
    | { type: "code"; language: string; code: string; filename?: string }
    | { type: "html"; html: string }
    | { type: "h2" | "h3"; text: string };