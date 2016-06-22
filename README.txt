1、首先安装node.js(我安装的是这个版本的node.js : node-v4.4.5-x64.msi),查看是否安装成功，dos界面下执行node -v查看版本，因为已经集成了npm ,执行npm -v查看版本，如有则已经安装成功了。
2、打开dos界面，进入项目根目录，执行 npm install 命令，下载package.json中dependencies中所包含的依赖，devDependencies中的依赖则执行 npm install --save-dev 命令下载。
3、package.json只包含了部分依赖，本项目会需要其他依赖，详情请查看图片(依赖.png)，最好都下载下来,如依赖jquery 则执行命令 npm install jquery。
4、打包，在项目根目录下，执行 webpack 命令打包。
5、本项目采用热部署，在项目根目录下执行 npm start 项目启动。访问 localhost:8080/index.html 可查看页面效果。
6、src为原js文件目录， js为打包后生成的目标js文件目录及文件。


		本人QQ : 1092386013 
		如有问题可联系本人，谢谢使用