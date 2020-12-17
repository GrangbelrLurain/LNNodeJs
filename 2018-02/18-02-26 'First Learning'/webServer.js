const http = require('http');/* require : 요구하다, 필요하다 라는 뜻,
                                const : 상수 => 한번 할당되면 그 값을 바꿀 수 없는 변수(var) */

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
