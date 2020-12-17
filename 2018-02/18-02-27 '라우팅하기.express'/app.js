var express = require('express');
var app = express();
app.get/*get을 라우터(Router)라고 부른다.*/
    ('/', function(req, res){
    res.send('Hello home page');
});/*get()은 라우팅(사용자가 길을 찾을 수 있게 해주는 역할을) 하는 메소드이다
    라우터는 컨트롤러와 요청자를 연결시켜준다.*/
app.get('/login', function(req, res){
    res.send('Login please');
})
app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});
