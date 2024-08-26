import React, { useState } from 'react'
import AddPost from './AddPost'
import EmojiPicker from "emoji-picker-react";
import Feeling from "../../../../svg/Feeling";

const EmojiPickers = ({text, settext, textref}) => {
    const [picker, setpicker] = useState(false);
    const handleEmoji = ({ emoji }, e) => {
        const ref = textref.current;
        ref.focus();
    
        const start = text.substring(0, ref.selectionStart);
        const end = text.substring(ref.selectionStart);
        const newText = start + emoji + end;
    
        settext(newText);
    
      };
  return (
    <>
     <div className="mt4">
          <textarea
            ref={textref}
            value={text}
            onChange={(e) => settext(e.target.value)}
            placeholder="What's up Samething"
            className="w-full min-h-24 outline-none p-2"
          />
        </div>
        {/* piker click */}
        <div onClick={() => setpicker((prev) => !prev)}>
          <Feeling />
        </div>
        {picker && (
          <div>
            <EmojiPicker onEmojiClick={handleEmoji} />
          </div>
        )}

        
        
    
    </>
  )
}

export default EmojiPickers