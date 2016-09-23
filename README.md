# Example AngularJs+require.js+gulp

New dashboard created using angularAMD+RequireJs+Angular-Material

![image](https://raw.githubusercontent.com/allan2coder/weixinApp/master/image/screenshot.png)


## How to use

To setup and run this project, do the following:
First, you should clone the repo and install the dependencies.

```bash
$ npm install
$ bower install
```

Then, launch the project app.

```bash
$ npm start
```

You should see a new browser tap opening and a page of "index.html" in http://127.0.0.1:8888.

## release file

To create release file under the current directory, do the following:

```
gulp release
```

##目录结构<br>
|---bower_components<br>
|---dev(开发目录)<br>
|　　　　|---css<br>
|　　　　|---img<br>
|　　　　|---js<br>
|　　　　|---lib<br>
|　　　　|---page<br>
|　　　　|---scss<br>
|　　　　|---tmpl<br>
|　　　　|---views<br>
|　　　　|---index.html<br>
|　　　　|---login.html<br>
|<br>
|---node_modules<br>
|---override(发布时固定的files)<br>
|---release(发布目录)<br>
|---scripts<br>
|---.gitignore<br>
|---gulpfile.js<br>
|---package.json<br>
|---README.md<br>
|---server.js<br>
