module.exports = function(app) {
  var express = require('express');
  var collegesRouter = express.Router();

  collegesRouter.get('/', function(req, res) {
    res.send({
      'colleges': [
        {
          name: "uin_jakarta",
          descName: "UIN Jakarta",
          supportedFormats: ['PDF']
        },
        {
          name: "uin_malang",
          descName: "UIN Malang",
          supportedFormats: ['PDF']
        }      ]
    });
  });

  collegesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  collegesRouter.get('/:id', function(req, res) {
    res.send({
      'colleges': {
        id: req.params.id
      }
    });
  });

  collegesRouter.put('/:id', function(req, res) {
    res.send({
      'colleges': {
        id: req.params.id
      }
    });
  });

  collegesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/colleges', collegesRouter);
};
