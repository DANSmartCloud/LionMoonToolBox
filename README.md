# LionMoonToolBox

## LionMoonToolBox-翎曚工具箱

云云探索者自研纯前端工具箱，致力于减少服务器开销，助力轻便上云！

翎曚工具箱内所有工具逻辑均**全部使用JavaScript**实现，无需与服务器进行除网页加载外的任何交互。

### 内部工具简介：

#### HodEasyCode

自研字串加密算法，全面支持特殊符号、黄脸emoji等字符；新颖思路，同一明文，密文无限可能。

如有需要，可以自行下载源代码进行研究。可以修改内含的加解密秘钥为自己的秘钥，达到朋友之间社交媒体加密通讯的目的。本算法通用秘钥为`Hocloud_TechnologyCreativeStudio`。

加解密部分可分开独立运行。请注意，如果要修改秘钥，源码中有两处地方需要修改。

密文特征：密文开头必然为`HEC.`

#### HodEasyFile

基于HodEasyCode算法的升级版本，可用于文件加密，支持任何类型文件格式。本算法同样使用通用算法秘钥。

加密文件特征：加密文件开头必然为`HEF.`

### 开发计划：

#### HodEasyCodeTimeliness

一个对于程序员来说没卵用的时效性限制加解密，因为限制不到会改源代码的人。同样基于HodEasyCode算法。

#### HodEasyFileTimeliness

同样没卵用的文件时效性加解密，基于HodEasyFile算法。
