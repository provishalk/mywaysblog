import React, { useEffect, useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import "./BlogForm.scss"
const BlogEditor = (props) => {
  const [title, setTitle] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [editorContent, setEditorContent] = useState("");
  useEffect(() => {
    setTitle(props.defaultTitle);
    setImgLink(props.defaultImgLink);
    setEditorContent(props.defaultHtmlContent);
  }, [props.defaultTitle,props.defaultImgLink,props.defaultHtmlContent])
  useEffect(() => {
    props.onHtmlContentHandler({htmlContent: editorContent,heading: title,imgLink});
  }, [editorContent, props,title,imgLink])
  return (
    <>
    <div className="blogForm">
      <input className="mb-1 p-1" placeholder="Your Title Here" value={title} onChange={(event) => {
        setTitle(event.target.value);
      }} />
      <input className="mb-1 p-1" placeholder="Image Link" value={imgLink} onChange={(event) => {
        setImgLink(event.target.value);
      }} />
    </div>
      
      <SunEditor height='450px' onChange={(event) => {
        setEditorContent(event);
      }} 
      setContents={editorContent}/>
    </>
  );
};
export default BlogEditor;