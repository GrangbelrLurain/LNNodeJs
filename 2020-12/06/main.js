const http = require('http');
const fs = require('fs');
const url = require('url');
 
const app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
      if(pathname === '/'){
        if(queryData.id === undefined){
          
          fs.readdir('./data', function(err, filelist){

            var title = 'welcome';
            var discription = 'hello, node.js';
            var list = `<ul>`;

            var i = 0;

            for(i = 0; i < filelist.length; i++){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
          } 
            list = list + `</ul>`;
            var template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${list}
              <h2>${title}</h2>
              <p>
              ${discription}
              </p>
            </body>
            </html>
            `;

            response.writeHead(200);
            response.end(template);
          })
       }else {
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data){
          fs.readdir('./data', function(err, filelist){

            const title = queryData.id;
            const discription = data;
            let list = `<ul>`;

            let i = 0;

            for(i = 0; i < filelist.length; i++){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
          } 
            list = list + `</ul>`;
            var template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${list}
              <h2>${title}</h2>
              <p>
              ${discription}
              </p>
            </body>
            </html>
            `;

            response.writeHead(200);
            response.end(template);
          })
        });
      }
    } else {
      response.writeHead(400);
      response.end('Not found');
    }
  });

app.listen(3000);