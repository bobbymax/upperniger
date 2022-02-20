export const API_ENDPOINTS = {
  url: "https://orbit.test/api/",
  //   cloudinary:
  //     "https://api.cloudinary.com/v1_1/sledge-consulting-limited/image/upload",
};

export const config = {
  bucketName: process.env.REACT_APP_AWS_BUCKET,
  albumName: process.env.REACT_APP_AWS_ALBUM,
  region: process.env.REACT_APP_AWS_REGION,
  accessKeyId: process.env.REACT_APP_AWS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET,
};

export const allowedFileTypes = ["jpg", "jpeg", "png", "pdf"];

export const getFileExt = (name) => {
  return name.split(".").pop();
};
