var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3001

app.use(express.json());

http.listen(port, function(){
    console.log('listening on *:' + port);
  });

var {home,land} = require('./controllers/web/home-controller');
// var {testApiController, testPostApi} = require('./controllers/api/test-api-controller')

//Global Interceptor
// app.use(home);
var apiController = require('./controllers/api/api-controller')
app.use('/api', apiController)

app.get('/',home, land)
app.get('/land',land)

// app.get('/api/test/:name',testApiController)
// app.get('/api/test',testApiController)
// app.post('/api/test',testPostApi)



