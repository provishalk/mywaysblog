import React,{useEffect, useState} from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const BlogEditor = (props) => {
  const [editorContent, setEditorContent] = useState("");
  useEffect(() => {
      props.onHtmlContentHandler(editorContent);
  }, [editorContent,props])
  return (
    <div>
      <SunEditor  height='500px' onChange={(event)=>{
        setEditorContent(event);
      }}/>
    </div>
  );
};
export default BlogEditor;