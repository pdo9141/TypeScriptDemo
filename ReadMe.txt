01) Install at https://www.typescriptlang.org
02) Install via NPM: "npm install -g typescript"
03) Google and download "typescript for visual studio 2017"
04) Find VS .gitignore at https://github.com/github/gitignore/blob/master/VisualStudio.gitignore
05) Typescript is superset of Javascript, you can rename .js to .ts with no issues
    You can always code any JS in any Typescript block
06) Do remember that even though you can write interfaces and protected in TS, it won't transpile to your JS    
    You can create private scope in JS but when you use private in TS it won't transpile properly in JS
07) Install dependency loader (require, webpack, systemjs etc.): "npm install systemjs"    
    Find systemjs in node_modules and copy it into VS project, reference dist/system.js in your project first