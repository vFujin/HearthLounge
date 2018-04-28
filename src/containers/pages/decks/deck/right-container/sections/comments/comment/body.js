import React from 'react';
import {convertBBCode} from "../../../../../../../../components/text-editor/utils/convert-bbcode";

export const CommentBody = ({commentText}) =>{
  return (
    <div className="body">
      {convertBBCode(commentText)}
    </div>
  )
};
