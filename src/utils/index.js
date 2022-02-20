export const API_ENDPOINTS = {
  url: "https://orbit.test/api/",
  cloudinary:
    "https://api.cloudinary.com/v1_1/sledge-consulting-limited/image/upload",
};

export const aws = {
  // key: 'AKIAU2Y6NTCDYZJZDZUS',
  // secret: '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'
};

export const config = {
  bucketName: "orbitbucket",
  albumName: "files",
  region: "eu-west-3",
  accessKeyId: aws.key,
  secretAccessKey: aws.secret,
};

export const allowedFileTypes = ["jpg", "jpeg", "png", "pdf"];

export const getFileExt = (name) => {
  return name.split(".").pop();
};
