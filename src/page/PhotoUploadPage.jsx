import React from "react";
import Header from "../component/Header";
import PhotoUpload from '../component/PhotoUpload'

const PhotoUploadPage = ({ match }) => (
  <div>
    <Header title="Upload Photo" />
    <PhotoUpload />
  </div>
);

export default PhotoUploadPage;
