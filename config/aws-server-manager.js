const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
// Ensure that the .env contains the following keys
const {S3_REGION, S3_BUCKET, S3_BASE_URL, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env;

// Examples:
// AWS_ACCESS_KEY_ID=AKIEZKKS2Z76VK45CAEK
// AWS_SECRET_ACCESS_KEY=Pgi7L0f6ODIadV0S2IiL8AU3frLvcUpNFIpH73GW
// S3_REGION=us-west-1
// S3_BUCKET=unique-bucket-name-for-photos
// S3_BASE_URL=https://s3-us-west-1.amazonaws.com/
// Note: The S3_BASE_URL specifies the endpoint used to download the file
// and should be stored in the MongoDB document along with the file's unique
// key appended to it, for example: https://s3-us-west-1.amazonaws.com/bucket-name/unique-file-key.png
// Note: The S3Client will automatically detect the AWS access key and secret environment variables
const s3Client = new S3Client({ region: S3_REGION});

module.exports = {
  uploadFile,
  downloadFile,
}
async function uploadFile(file) {
  // Create an instance of the S3 client
  // s3's PutObjectCommand will expect an object with the following properties
  const s3Params = {
    Bucket: S3_BUCKET,
    // Create a unique filename to use as the S3 Key
    Key: `${Date.now()}-${file.originalname}`,
    // The uploaded file's binary content is held in the buffer property
    Body: file.buffer
  };
  // Send the file to s3
  await s3Client.send(new PutObjectCommand(s3Params));
  // Return the endpoint to download the file
  return `${S3_BASE_URL}${S3_BUCKET}/${s3Params.Key}`;
};

async function downloadFile(file) {
  const s3Client = new S3Client({ region: S3_REGION});
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: file.url
  };
  async function run() {
    try {
      console.log("made it into run")
      const data = await s3Client.send(new GetObjectCommand(s3Params));
      const vidString = await data.Body.transformToString();
      console.log(vidString);
      return vidString;
    } catch (err) {
      console.log("error", err);
    }
  }
  run();
  // await s3Client.getObject(s3Params, function(err, data) {
  //   if (err) console.log(err, err.stack);
  //   else console.log(data);
  // });
}


