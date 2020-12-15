const db = require('../mysqlConnect');

function recherches(req, res) {
  let query = `
	  INSERT INTO recherches (docid, label, uri)
	  VALUES ("${req.body.docid}", "${req.body.label}", "${req.body.uri}")`;

  db.query(query, (err, result) => {
    if (err) {
      if (err.code === 'ER_PARSE_ERROR') {
        console.log('erreur sur la forme du label');
      } else {
        throw err;
      }
    }
    return res.status(200).json({
      message: 'Enregistrement Ok.',
    });
  });
}
exports.recherches = recherches;
