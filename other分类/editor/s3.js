// 引入所需的 AWS SDK 模块
import AWS from 'aws-sdk';

// 使用 AssumeRole API 提取临时安全凭证
const sts = new AWS.STS();
const roleArn = 'YOUR_ROLE_ARN'; // 替换为您的角色ARN
const params = {
  RoleArn: roleArn,
  RoleSessionName: 'SessionName' // 为会话指定一个名称
};

sts.assumeRole(params, function(err, data) {
  if (err) {
    console.error('无法获取临时安全凭证：', err);
    return;
  }

  // 提取生成的凭证和会话令牌
  const accessKeyId = data.Credentials.AccessKeyId;
  const secretAccessKey = data.Credentials.SecretAccessKey;
  const sessionToken = data.Credentials.SessionToken;

  // 使用生成的凭证和会话令牌创建 AWS SDK 临时凭证
  const tempCredentials = new AWS.Credentials({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken: sessionToken
  });

  // 使用临时凭证初始化 Amazon S3 客户端
  const s3 = new AWS.S3({
    credentials: tempCredentials
  });

  // 现在您可以使用 s3 客户端进行 S3 操作
  // 例如，上传文件
  const params = {
    Bucket: 'YOUR_BUCKET_NAME', // 替换为您的 S3 存储桶名称
    Key: 'example.jpg', // 替换为要上传的对象键
    Body: 'Hello, World!' // 替换为要上传的对象内容
  };

  s3.upload(params, function(err, data) {
    if (err) {
      console.error('上传文件时出错：', err);
    } else {
      console.log('文件上传成功：', data.Location);
    }
  });
});
