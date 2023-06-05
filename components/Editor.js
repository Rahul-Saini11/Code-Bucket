import { useRef, useState } from "react";
import classes from "./Editor.module.css";
import EditorHeader from "./EditorHeader";
import EditorConsole from "./EditorConsole";

function Editor({ onHtml, onCss, onJs, val }) {
  const [show, setShow] = useState(true);
  const [showc, setShowc] = useState(false);
  const [showj, setShowj] = useState(false);
  function showHandler() {
    setShow(true);
    setShowc(false);
    setShowj(false);
  }
  function showcHandler() {
    setShowc(true);
    setShow(false);
    setShowj(false);
  }
  function showjHandler() {
    setShowj(true);
    setShowc(false);
    setShow(false);
  }
  return (
    <>
      <div className={classes["editors-header"]}>
        <EditorHeader title='Html' onActive={showHandler} showh={show} />
        <EditorHeader title='Css' onActive={showcHandler} showh={showc} />
        <EditorHeader title='Js' onActive={showjHandler} showh={showj} />
      </div>
      <div className={classes["editors-container"]}>
        <EditorConsole
          language={"html"}
          showh={show}
          onEdit={onHtml}
          val={val}
        />
        <EditorConsole language={"css"} showh={showc} onEdit={onCss} />
        <EditorConsole language={"javascript"} showh={showj} onEdit={onJs} />
      </div>
    </>
  );
}
export default Editor;
