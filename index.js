var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mi segunda Pagina' });
});

router.get('/ruta', function (req, res, next) {
    res.render('paginaNueva',{
        nombre: 'Alex',
        apellido: 'Pacheco',
        interes: 'Desarrollo de back-end'
    });
});


module.exports = router;
