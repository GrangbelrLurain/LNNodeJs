const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/template', function(req, res){
  res.render('temp', {time:Date()});
});
app.get('/form', function(req, res){
  res.render('form');
});
app.get('/form_receiver', function(req, res){
  const title = req.query.title;
  const description = req.query.description;
  res.send(title+' '+description);
})
app.get('/topic/:name', function(req, res){
  const topics = [
    'Lurain is...',
    'Garngbelr is...',
    'Elf is...',
  ]
  const links = `
    <a href='/topic/0'>Lurain</a><br>
    <a href='/topic/1'>Garngbelr</a><br>
    <a href='/topic/2'>Elf</a><br>

    ${topics[req.params.name]}
  `
  res.send(links);
})
app.get('/topic/:name/:module', function(req, res){
  res.send(req.params.name+','+req.params.module)
})
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
