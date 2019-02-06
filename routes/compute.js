const express = require('express');
const router = express.Router();
const validate = require('express-jsonschema').validate;
const computeSchema = require('../schemas/computeSchema');

router.post('/:requestId/', validate({body: computeSchema}), function (req, res) {
  let p1 = req.body.data.find(x => x.title === 'Part 1');
  let p2 = req.body.data.find(x => x.title === 'Part 2');

  if (!p1 || !p2) {
    res.status(400).send('No Part1 or Part2 in request');
    return;
  }

  let values = [];
  for (let i = 0; i < p1.values.length; i++) {
    values[i] = (p1.values[i] || 0) - (p2.values[i] || 0);
  }

  res.json({
    'request_id': req.params.requestId,
    'timestamp': req.body.timestamp,
    'result': { 'title': 'Result', 'values': values}
  });
});

module.exports = router;