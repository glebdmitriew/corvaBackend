let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/compute/:requestId', function (req, res) {
  let values = [];
  if (!req.body || !req.body.data) {
    res.status(400).send('No POST data in request');
    return;
  }

  let p1 = req.body.data.find(x => x.title === 'Part 1');
  let p2 = req.body.data.find(x => x.title === 'Part 2');

  if (!p1 || !Array.isArray(p1.values) || !p2 || !Array.isArray(p2.values)) {
    res.status(400).send('Wrong post data in request');
    return;
  }

  for (let i = 0; i < p1.values.length; i++) {
    values[i] = p1.values[i] - (p2.values[i] || 0);
  }

  res.json({
    'request_id': req.params.requestId, 
    'timestamp': req.body.timestamp, 
    'result': { 'title': 'Result', 'values': values}
  });
});

module.exports = app;
