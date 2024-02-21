import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ placeholder, value, onChange }) => {
  const [content, setContent] = useState('');

  const quillRef = useRef();

  useEffect(() => {
    if (value !== content) {
      setContent(value);
    }
  }, [value]);

  const handleChange = (value) => {
    setContent(value);
    onChange(value);
  };

  const toolbarOptions = [
    [{ 'header': ['normal', 1, 2, 3, 4, 5, 6] }, 'bold', 'italic', 'underline', 'strike', 'link', { list: 'ordered' }, { list: 'bullet' }, 'clean'],
  ];

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={handleChange}
        placeholder={placeholder}
        modules={{
          toolbar: {
            container: toolbarOptions,
          },
        }}
      />
    </div>
  );
};

export default TextEditor;
