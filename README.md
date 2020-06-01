# **ibizlab-runtime**

### 目标
提供一个完整的分布式支撑运行时系统，现代Web应用+微服务架构, 具体包括:

* ibz-rt: 基于vue的时尚现代前端UI+统一网关
* ibz-uaa:统一认证授权微服务（支持第三方认证）  
* ibz-ou:组织机构人事微服务  
* ibz-wf:工作流代理微服务（集成flowable） 
* ibz-disk:分布式存储微服务(集成kkfileview在线预览+collabora-code在线编辑)  
* ~~ibz-task:任务调度微服务（集成xxl-job）~~  
* ~~ibz-dict:数据字典管理微服务~~  
* ~~ibz-pay:支付管理微服务~~  
* ~~ibz-notify:通知微服务~~  
* ~~ibz-dst:统计分析/规则定义微服务（集成drools）~~  

### 技术栈
#### 完整的[Spring应用](https://spring.io/):
* 基于[Spring Boot](https://projects.spring.io/spring-boot/)提供应用配置简化
* [Maven](https://maven.apache.org/)构建，测试，运行应用
* [Spring Security](https://docs.spring.io/spring-security/site/index.html)组件
* [JSON Web令牌（JWT）](https://jwt.io/)身份验证安全机制
* [Spring MVC REST](https://spring.io/guides/gs/rest-service/) + [Jackson](https://github.com/FasterXML/jackson)
* [Swagger](https://swagger.io/)来自动生成REST Controller API文档
* [Zalando Problem Spring Web](https://github.com/zalando/problem-spring-web)处理异常
* [Mybatis-plus](https://mp.baomidou.com/) 
* 基于[Liquibase](http://www.liquibase.org/)数据库更新
* [Elasticsearch](https://github.com/elastic/elasticsearch)支持，如果你需要基于你的数据库提供高级搜索能力
* [MongoDB](https://www.mongodb.org/)支持, 如果你想使用面向文档的NOSQL数据库替代JPA

* 构建标准可执行的JAR文件

#### 微服务技术栈

* 基于[Netflix Zuul](https://github.com/Netflix/zuul)的HTTP流量路由  
* 基于[Nacos](https://nacos.io/zh-cn/index.html)或[Eureka](https://github.com/Netflix/eureka)的服务发现
* 基于[Feign](https://github.com/OpenFeign/feign)的服务消费客户端
* 使用[Caffeine](https://github.com/ben-manes/caffeine) + [Redis](https://redis.io/)提供两级缓存
* 完整的[Docker](https://www.docker.com/)和[Docker Compose](https://github.com/docker/compose)支持
* [RocketMQ](http://rocketmq.apache.org/)支持, 如果你需要一个消息发布订阅系统

#### 基于Vue, 提供时尚、现代、移动优化的前端
* 基于ViewUI和ElementUI的Web设计
* 现代浏览器兼容 (Chrome, FireFox, Microsoft Edge…)
* 完整国际化支持
* 可选的Sass支持
* 使用yarn便捷安装最新的JavaScript库
* 使用Vue-cli构建

### 开发配置

* 后端依赖jdk1.8 + maven3  
* 前端依赖nodejs + yarn，并建议更换国内源

#### 开发编译
```java
mvn package -Pallinone
```

开发人员快速启动，使用DevBootApplication启动可以一次性以springboot启动所有服务，并模拟仿真注册所有微服务，笔者开发时一般都如此启动，很方便调试。

`boot/src/main/java/cn/ibizlab/DevBootApplication.java`

Boot on port：10086  
http://127.0.0.1:10086  

#### 数据库配置
liquibase 支持，启动自动发布数据库结构和示例数据   

#### 生产编译
```java
mvn package -Pgateway
mvn package -Papi
```

启动网关 
`java -jar ibzrt-app-web.jar`  或者  `gateway/src/main/java/cn/ibizlab/web/WebApplication.java`
Boot on port：30000
http://127.0.0.1:30000

启动各个微服务  

例：ibzuaa 统一认证授权微服务  
`java -jar /ibzuaa/ibzuaa-provider-api.jar`  或者  `ibzuaa/ibzuaa-provider/ibzuaa-provider-api/src/main/java/cn/ibizlab/api/ibzuaaapiApplication.java`  
Boot on port：40002  
http://127.0.0.1:40002  

例：ibzou 组织机构人事微服务   
`java -jar /ibzou/ibzou-provider-api.jar`  或者  `ibzuaa/ibzou-provider/ibzou-provider-api/src/main/java/cn/ibizlab/api/ibzouapiApplication.java`  
Boot on port：40001  
http://127.0.0.1:40001  

......   

#### Docker + Docker-compose

本系统提供了docker镜像，方便快速部署  
[`ibiz4j/ibizlab-runtime:1.0.0-RC1`](https://hub.docker.com/repository/docker/ibiz4j/ibizlab-runtime) 

启动基础配套服务，mysql/nacos/redis   
```java
docker-compose -f boot/src/main/docker/ibzrt-dependencies.yaml up -d
```

启动ibizlab-runtime boot服务  
```java
docker-compose -f boot/src/main/docker/ibzrt-boot.yaml up -d
```

启动附加可选配套组件服务（xxl-job和flowable等）
```java
docker-compose -f boot/src/main/docker/ibzrt-ibzrt-extensions.yaml up -d
```