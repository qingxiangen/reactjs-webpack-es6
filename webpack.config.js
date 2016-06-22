//webpack.config.js  
var webpack = require('webpack');
module.exports = {  
	// 程序的入口文件  
	entry: {
		// './js/comments':'./src/comments.js',
		// './js/react' :'./src/react.js',
		'./js/index':'./src/index.js'
	},
	output: {
/*		path:__dirname + '/aaa',*/
		filename: '[name].js',
		publicPath: '/static/'
	}, 
	module: {  
		loaders: [  
			{  
				// 用于匹配加载器支持的文件格式的正则表达式  
				test: /\.(js)$/,  
				// 要使用的加载器类型  
				// 加载器支持通过查询字符串的方式接收参数  
				loader: 'jsx-loader?harmony'  
			},  
			{  
				test: /\.(css)$/,  
				// 多个加载器通过“!”连接  
				loader: 'style-loader!css-loader!history'  
			},  
			{  
				test: /\.(png|jpg)$/,  
				// url-loader 支持base64 编码的行内资源  
				loader: 'url-loader?size=8192'  
			},
			{   // react-hot 支持热部署
			    test: /\.js$/,
			    exclude: /node_modules/,
			    loader: 'react-hot!jsx-loader'
		    },
		    {   // react-hot 支持热部署
			    test: /\.js$/,
			    exclude: /node_modules/,
			    loader: 'babel-loader'
		    },
		    {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }

		]  
	}  
}; 