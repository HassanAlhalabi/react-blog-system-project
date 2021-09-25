import React from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = ({editorState,handleEditorState}) => {
    return(
        <div className='text-editor'>
            <Editor 
                editorState={editorState}
                toolbarClassName="text-editor-toolbar"
                wrapperClassName="wrapperClassName"
                editorClassName="text-editor-content"
                onEditorStateChange={handleEditorState}
            />
        </div>
    )
}

export default TextEditor;