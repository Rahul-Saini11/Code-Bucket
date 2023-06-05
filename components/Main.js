import { useState } from "react";
import Editor from "./Editor";
import classes from "./Main.module.css";
function Main() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setjs] = useState("");

  function htmlChangeHandler(value) {
    console.log(value);
    setHtml(value);
  }
  function cssChangeHandler(value) {
    setCss(value);
  }
  function jsChangeHandler(value) {
    setjs(value);
  }
  function onRes(value) {
    console.log(value);
    setHtml(value);
  }

  let srcCode = `<html>
     <body>${html}</body>
     <style>${css}</style>
     <script>${js}</script>
    </html>`;

  return (
    <div id='container'>
      <div className='sub-container'>
        <Editor
          onHtml={htmlChangeHandler}
          onCss={cssChangeHandler}
          onJs={jsChangeHandler}
          val={html}
        />
      </div>
      <div className='sub-container'>
        <iframe id='res' srcDoc={srcCode} className={classes["result"]} />
      </div>
    </div>
  );
}

export default Main;
