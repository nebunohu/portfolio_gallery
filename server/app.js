const express = require('express');
const cors = require('cors');
//const config = require('config');
const app = express();
const PORT = /*config.get('port') ||*/ 3000;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bp = require('body-parser');

/*app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));*/
app.use(express.json({extended: true}));
app.use(cors());

async function start() {
  

  app.get( '/', ( req, res ) => {
    res.send( 'Hello World!' )
    console.log( 'GET catched!!!' );
  })

  app.post( '/', ( req, res ) => {
    console.log( 'POST catched!!!' );
  })

  app.post('/auth/login', async ( req, res ) => {
    try {
      console.log( 'POST auth!' );
      console.log(req.body);
      const {login, password} = req.body;
      const correctLogin = 'admin';
      const correctPassword = '123';
      const hashedPassword = await bcrypt.hash(correctPassword, 12);
      const userId = 'admin1';

      if (login !== correctLogin) {
        return res.status(400).json({message: 'Неверное имя пользователя'})
      }

      const isMatch = await bcrypt.compare(password, hashedPassword);

      if (!isMatch) {
        return res.status(400).json({message: 'Неверный пароль'});
      }

      const token = jwt.sign(
        {userId: userId},
        'jwtsecret',
        {expiresIn: '1h'}
      )

      res.json({token, userId});

    } catch( error ) {
      res.status(500).json({ message: 'Что-то пошло не так попробуйте снова' } );
      console.log( error.message );
    }
    
  });

  app.get('/data', ( req, res ) => {
    try {
      console.log( 'GET data!' );


    } catch( error ) {
      res.status(500).json({ message: 'Что-то пошло не так попробуйте снова' } );
      console.log( error.message );
    }
    
  });

  app.put('/files/public/projects/art', (req,res) => {
    console.log('PUT!');
    res.json('ok');
  });

  app.listen( PORT, () => {
    console.log( `App listening at http://localhost:${PORT}` )
  })

  app.use( '/files', express.static( __dirname + '/public' ) );
}

start();