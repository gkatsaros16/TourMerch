const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
  router.post('/event', (req, res, next) => {
    db.query(
      'INSERT INTO bands (name, logo) VALUES (`name`, `logo`)',
    //   [req.body.name, req.body.description],
      ['dealbreaker', ''],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/getBands', function (req, res, next) {
    db.query(
      'SELECT * FROM bands',
      [],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/getMerch/:id', function (req, res, next) {
    db.query(
      'SELECT m.id, m.bandid, m.description, m.item, m.price, m.picture, b.name FROM merch m join bands b on m.bandId = b.id where bandId=?',
      [req.params.id],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/getMerchById/:id', function (req, res, next) {
    db.query(
      'SELECT m.id, m.bandid, m.description, m.item, m.price, m.picture, b.name FROM merch m join bands b on m.bandId = b.id where m.id=?',
      [req.params.id],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          console.log(results)
          res.status(200).json(results[0]);
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;