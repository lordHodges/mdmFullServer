const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const { mongoose } =require('./database');

//settings
app.set('port',process.env.PORT || 3030);

//middleware
 app.use(cors({origin: 'http://localhost:4200'}));
app.use(cors({origin: 'http://localhost:3030'})); 
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/operador', require('./routes/operador.routes'));
app.use('/api/equipo', require('./routes/equipo.routes'));


//start server
app.listen(app.get('port'),()=>{
    console.log('online in port !!', app.get('port'));
});
