const express = require('express');
//const config = require('config');
const app = express();
const PORT = /*config.get('port') ||*/ 3000;
const bp = require('body-parser')

async function start() {
  app.use(bp.json());
  app.use(bp.urlencoded({ extended: true }));

  app.get( '/', ( req, res ) => {
    res.send( 'Hello World!' )
    console.log( 'GET catched!!!' );
  })

  app.post( '/', ( req, res ) => {
    console.log( 'POST catched!!!' );
  })

  app.post('/auth/login', ( req, res ) => {
    try {
      console.log( 'POST auth!' );
      console.log(req.body);
      const {login, password} = req.body;
      const user = 'admin';
      const userId = 'admin';

      if (login != user) {
        return res.status(400).json({message: 'Неверное имя пользователя'})
      }

      res.json(userId);

    } catch( error ) {
      res.status(500).json({ message: 'Что-то пошло не так попробуйте снова' } );
      console.log( error.message );
    }
    
  });

  app.listen( PORT, () => {
    console.log( `App listening at http://localhost:${PORT}` )
  })

  app.use( '/files', express.static( __dirname + '/public' ) );
}

start();