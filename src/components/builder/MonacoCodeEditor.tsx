import Editor from "@monaco-editor/react";

export default function MonacoCodeEditor() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">

      <Editor
        height="600px"
        defaultLanguage="typescript"
        theme="vs-dark"
        defaultValue={`// Welcome to Arix v2 Himanshu

export default function Theme(){

}
`}
      />

    </div>
  );
}
