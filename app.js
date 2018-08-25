const express = require ('express');
const path = require ('path');
const bodyParser = require('body-parser');
const database = require('./database');
const expressLayouts = require("express-ejs-layouts")
const methodOverride = require('method-override');
var debugLog = require('debug-log')('foo');
const ejsLint = require('ejs-lint');

//const loginRota = require('./rotas/login');
const indexRota = require('./rotas/index');
const criaRota = require('./rotas/funcionarios');

const app = express();

app.use(express.static('public'));
//Define o diretório para conter os modelos ('views')
app.set('views', path.join(__dirname, 'views'));
//Define template engine para usar, neste caso 'ejs'
app.set('view engine', 'ejs');
app.use(expressLayouts);
debugLog('unicorns & rainbows');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));

//app.use('/login', loginRota)
app.use('/', indexRota);
app.use('/funcionarios', criaRota);

database.connect().then(function (){
 app.listen(3000, () => {console.log('Online na porta 3000') });
});

