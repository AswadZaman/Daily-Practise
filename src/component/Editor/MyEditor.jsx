import React, { useState } from 'react';
import JoditEditor from 'jodit-react';

export const MyEditor = () => {
  const [content, setContent] = useState('');

  const config = {
    buttons: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],
    toolbarAdaptive: false,
    height: 300,
    events: {
      change: (newContent) => {
        setContent(newContent);
      }
    }
  };

  return (
    <div>
      <JoditEditor
        value={content}
        config={config}
      />
    </div>
  );
};
