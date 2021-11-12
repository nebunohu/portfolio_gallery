const express = require('express');
const fs = require('fs').promises;
const path = require('path');
//import { readFile } from 'fs';
const cors = require('cors');
const fileUpload = require('express-fileupload');
const multer = require('multer');
const upload = multer({dest: path.resolve(__dirname, 'public')});
const uploadArt = multer({dest: path.resolve(__dirname, './public/projects/art')});
//const config = require('config');
const app = express();
const PORT = /*config.get('port') ||*/ 3001;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {Schema} = mongoose;

/*app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));*/
app.use(express.json({extended: true}));
app.use(cors());
app.use(fileUpload());
app.use( '/static', express.static( path.resolve(__dirname, 'public') ) );

// Установим подключение по умолчанию
const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
// Позволим Mongoose использовать глобальную библиотеку промисов
mongoose.Promise = global.Promise;
// Получение подключения по умолчанию
let db = mongoose.connection;

// Привязать подключение к событию ошибки  (получать сообщения об ошибках подключения)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const dbSchema = new Schema({
  chapter: String,
  project: String,
  directory: String,
  content: Buffer
});

const dbModel = mongoose.model('dbModel', dbSchema);

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
      //console.log( 'POST auth!' );
      //console.log(req.body);
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

  //app.get('/static', async ( req, res ) => {
    /*function toArrayBuffer(buf) {*/
  //    console.log('GET!');
      /*var view = new Uint8Array(ab);
      for (var i = 0; i < buf.length; ++i) {
          view[i] = buf[i];
      }
      return ab;
    }*/
  //  try {
      /*const file = await fs.readFile('./server/uploads/IMG.jpg');
      const newArrayBuffer = toArrayBuffer(file);
      const newBlob = new Blob(newArrayBuffer, {type: 'image/jpeg'});
      console.log( 'GET data!' );*/
      //const filePath = __dirname+'/uploads/IMG.jpg';
      //res.download(filePath);
      //res.sendFile();

  //  } catch( error ) {
  //    res.status(500).json({ message: 'Что-то пошло не так попробуйте снова' } );
  //    console.log( error.message );
  //  }
    
  //});

  app.post('/public/projects/art', uploadArt.single('image'), (req,res) => {
    try {
      console.log('PUT!');
      console.log(req.files);
      if (!req.files) {
        return res.status(400).json({message: 'Файл не найден'})
      }
      //console.log(arg);
      req.files.avatar[0].mv(path.resolve(__dirname, './public/projects/art/'+req.files.avatar[0].name));
      res.json('ok');
    } catch(error) {

    }
  });
}

start();

app.listen( process.env.PORT || PORT, () => {
    console.log( `App listening at http://localhost:${PORT}` )
  })