use babel write ES6
===================

1. 
```
    npm install --save-dev babel-cli
```
    
2. 
```
    {
        "name": "my-project",
        "version": "1.0.0",
        "scripts": {
          "build": "babel src -d lib"//lib 是编译完成转化为ES5的代码的文件夹
        },
        "devDependencies": {
          "babel-cli": "^6.0.0"
        }
      }
```
    
3. 
```
    npm install babel-preset-es2015 --save-dev
```
    
4. new .babelrc doc
```
    {
      "presets": ["es2015"]
    }
          
```
   
5. 
```
        npm run build
```
    
6. open index.html in browse ,in console you will see "ZT" 