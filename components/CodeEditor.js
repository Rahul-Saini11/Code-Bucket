import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/ext-language_tools";

export default function CodeEditor({ onResult, language, val }) {
  return (
    <div>
      <AceEditor
        mode={language}
        theme='monokai'
        name={`${language}1`}
        onChange={onResult}
        fontSize={12}
        height='40vh'
        width='100%'
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={val}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
          useWorker: false,
        }}
      />
    </div>
  );
}
