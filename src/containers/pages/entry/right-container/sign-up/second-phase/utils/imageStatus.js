import React from "react";
import ImageUpload from "../assets/image-upload";

export default (activeUser, signUp_avatar, updateFormProperty) => {
  return signUp_avatar
      ? "✓ Image successfully uploaded."
      : <ImageUpload activeUser={activeUser}
                     updateFormProperty={updateFormProperty}/>
};