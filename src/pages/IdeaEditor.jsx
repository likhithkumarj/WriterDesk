import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { keymap } from "@tiptap/pm/keymap";
import { Plugin } from "@tiptap/pm/state";
import '../style/ideaEditor.css'

const IdeaEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: false,
        orderedList: false,
        codeBlock: false,
      }),
    ],
    content: `
      <p className="EditorContent" >INT. ROOM - DAY</p>
      <p>A lonely developer stares at his editor.</p>
      <p><strong>LIKHITH</strong></p>
      <p>This finally feels right.</p>
    `,
    editorProps: {
      attributes: {
        class: "screenplay-editor",
      },
    },
    plugins: [
      // Keyboard behavior
      keymap({
        Enter: (state, dispatch) => {
          dispatch(state.tr.split(state.selection.from));
          return true;
        },
      }),

      // Script intelligence (base hook)
      new Plugin({
        props: {
          handleTextInput(view, from, to, text) {
            const textBefore = view.state.doc.textBetween(0, from, " ");
            // INT. / EXT. detection (base)
            if (
              text === "." &&
              (textBefore.endsWith("INT") || textBefore.endsWith("EXT"))
            ) {
              // future: auto bold + uppercase
            }
            return false;
          },
        },
      }),
    ],
  });

  if (!editor) return null;

  const setBlock = (type) => {
    const chain = editor.chain().focus();

    if (type === "scene") {
      chain.setParagraph().setBold().run();
    }
    if (type === "action") {
      chain.setParagraph().unsetBold().run();
    }
    if (type === "character") {
      chain.setParagraph().setBold().run();
    }
    if (type === "dialogue") {
      chain.setParagraph().unsetBold().run();
    }
  };

  return (
    <div className="EditorContent" style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setBlock("scene")}>Scene</button>
        <button onClick={() => setBlock("action")}>Action</button>
        <button onClick={() => setBlock("character")}>Character</button>
        <button onClick={() => setBlock("dialogue")}>Dialogue</button>
      </div>

      <EditorContent
      
  editor={editor}
  style={{
    border: "1px solid #ccc",
    padding: 20,
    minHeight: 400,
    fontfamily: '"Courier Prime" !important',
    fontSize: 14,
    lineHeight: 1.6,
  }}
/>
    </div>
  );
};

export default IdeaEditor;
