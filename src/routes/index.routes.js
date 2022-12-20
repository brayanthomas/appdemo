const { Router } = require('express');
const router = Router();
const db_con = require('../database');

router.get('/', (req, res) => {

    db_con.connect(function(error) {

         if(error.fatal) res.send(error);
         else
      connection.query('select * from greetings limit 1', function (err, results){
            if(err) res.send(err);
            else
                res.send(results[0].value);
        });
    });
});

module.exports = router;