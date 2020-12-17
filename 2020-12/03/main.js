const http = require('http');
const fs = require('fs');
const url = require('url');
 
const app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`${queryData.id}.html`, 'utf8', function(err, data){
      const discription = data;
      var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=1">HTML</a></li>
          <li><a href="/?id=2">CSS</a></li>
          <li><a href="/?id=3">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>
        ${discription}
        </p>
      </body>
      </html>
      `;

      response.end(template);
    })
  });

app.listen(3000);