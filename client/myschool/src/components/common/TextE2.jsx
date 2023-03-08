import React, { useState } from "react";
import ReactQuill from "react-quill";

import { remark } from "remark";
import remarkHtml from "remark-html";
// import { ImageResize } from "quill-image-resize-module";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkStringify from "remark-stringify";

export const TextE2 = React.forwardRef(({ onChange, name, value }, ref) => {
  const [editorValue, setEditorValue] = useState(value);
  const onValueChange = (value) => {
    setEditorValue(value);
    onChange(value);
  };
  return (
    <>
      <ReactQuill
        ref={ref}
        name={name}
        theme="snow"
        modules={modules}
        formats={formats}
        bounds={".app"}
        value={value}
        onChange={onValueChange}
      />
    </>
  );
});
const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"][("link", "image", "video")],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true,
  },
  // ImageResize: {
  //   modules: ["Resize", "DisplaySize", "Toolbar"],
  // },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export function markdownToHtml(markdownText) {
  const file = remark().use(remarkHtml).processSync(markdownText);
  return String(file);
}

export function htmlToMarkdown(htmlText) {
  const file = remark()
    .use(rehypeParse, { emitParseErrors: true, duplicateAttribute: false })
    .use(rehypeRemark)
    .use(remarkStringify)
    .processSync(htmlText);

  return String(file);
}
