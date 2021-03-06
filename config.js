// const godaddyUrl = "https://api.ote-godaddy.com" // 测试版 Godaddy 域名
const godaddyUrl = "https://api.godaddy.com" // 生产版 Godaddy 域名
const domain = "xxxxxx.com"; // 需更更新的域名,比如 your_domain_here.com
// Godday API key 创建地址：https://developer.godaddy.com/keys
const godaddyKey = "UzQxLikm_46KxDFnbjN7cQjmw6wocia"; // 你的 Godaddy Key
const godaddySecret = "46L26ydpkwMaKZV6uVdDWe"; // 你的 Godaddy Secret
// AWS 访问密钥创建地址：https://console.aws.amazon.com/iam/home#/security_credentials
const AWSAccessKeyId = "XXXXX" // 你的 AWS 账号 ID
const AWSSecretKey = "XXXXX" // 你的 AWS 秘钥
const cycleTime = 1000 * 60 * 10; // 这里默认是 10 分钟循环一次
const pingRetries = 4; // 每个 ip 重复 ping 次数，还是 ping 不通的话，视为 blocked，这里默认 4 次
const pingTimeout = 5000; // ping 超时时间，这里默认 5 秒
const godaddyTimeout = 10000; // 设置请求 godaddy 接口超时时间，这里默认 10 秒，建议设长一些在大陆地区网络不是很好
const waitingTime = 30000; // 设置删除静态 ip 后等待多久请求分配静态 ip，这里默认半分钟后，防止删除 ip 后马上分配 ip 导致请求的就是删除的。

/**
 * 需检查的服务器和更新的 A 记录列表
 * 注意下面的参数一定是要一一对应的
 * dnsName: Godaddy 的域名的名称
 * instanceName: AWS 服务器实例名
 * staticIpName: AWS 实例绑定的静态 ip 名
 * region: AWS 服务器实例所在的地区
 */
const vpsList = [
  { dnsName: 'test01', instanceName: 'test01', staticIpName: 'StaticIp-test01', region: 'us-west-2' },
  { dnsName: 'test02', instanceName: 'test02', staticIpName: 'StaticIp-test02', region: 'us-west-2' },
];

module.exports = {
  godaddyUrl,
  domain,
  godaddyKey,
  godaddySecret,
  AWSAccessKeyId,
  AWSSecretKey,
  cycleTime,
  pingRetries,
  pingTimeout,
  godaddyTimeout,
  vpsList,
  waitingTime,
}