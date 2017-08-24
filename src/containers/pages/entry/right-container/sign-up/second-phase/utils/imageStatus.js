import React from "react";
import ImageUpload from "../assets/image-upload";

/**
 * Indicates image status while uploading.
 *
 * @param {object} activeUser
 * @param {bool} signUp_avatar - true if image is successfully uploaded, false otherwise
 * @param {func} updateFormProperty
 */
export default (activeUser, signUp_avatar, updateFormProperty) => {
  return signUp_avatar
      ? "✓ Image successfully uploaded."
      : <ImageUpload activeUser={activeUser}
                     updateFormProperty={updateFormProperty}/>
};