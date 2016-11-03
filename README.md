use babel write ES6
===================

```
    npm install --save-dev babel-cli
```
    

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
    

```
    npm install babel-preset-es2015 --save-dev
```
    
 new .babelrc doc
```
    {
      "presets": ["es2015"]
    }
          
```
   

```
        npm run build
```
    
```
 open index.html in browse ,in console you will see "ZT" 
 
```