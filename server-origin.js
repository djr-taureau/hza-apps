var express = require('express'),
  app = express(),
  multer = require('multer');
fs = require('fs');
bodyParser = require('body-parser')
errorHandler = require('errorhandler'),
  methodOverride = require('method-override'),
  port = parseInt(process.env.PORT, 10) || 3030;




var DIR = './uploads/';




var upload = multer({
  dest: DIR
});

app.get("/", function (req, res) {
  res.redirect("/index.html");
});


app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/app'));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(multer({
  dest: DIR,
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}));

app.get('/api', function (req, res) {
  res.end('file catcher example');
});

app.post('/api', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }

    res.end('File is uploaded');
  });
});

var PORT = process.env.PORT || 3030;

app.listen(PORT, function () {
  console.log('Working on port ' + PORT);
});
