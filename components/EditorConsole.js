import dynamic from "next/dynamic";
import classes from "./EditorConsole.module.css";

const CodeEditor = dynamic(() => import("../components/CodeEditor"), {
  ssr: false,
});

export default function EditorConsole({ language, showh, onEdit, val }) {
  return (
    <div
      className={`${classes["editor-console"]} ${
        showh ? "" : classes["isActive"]
      }`}
    >
      <CodeEditor language={language} onResult={onEdit} val={val} />
    </div>
  );
}
