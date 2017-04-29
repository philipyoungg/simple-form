import React from "react";
import Header from "../component/Header";
import Steps from "../component/Steps";
import PhotoUpload from '../component/PhotoUpload'

const PhotoUploadPage = ({ match }) => (
  <div>
    <Steps match={match} />
    <Header title="Upload Photo" />
    <PhotoUpload />
  </div>
);

export default PhotoUploadPage;
