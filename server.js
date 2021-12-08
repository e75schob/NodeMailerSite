// server.js
const path = require('path');
const express = require('express');
const multer = require('multer');
const layout = require('express-layout');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const helmet = require('helmet');

require('dotenv').config();
//nodemailer
const nodemailer = require ('nodemailer');



const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;



const { body,validationResult } = require('express-validator');



//to receive POST values in Express, you first need to include body-parser
//middleware, that exposes submitted form values on req.body in your route handlers
//add it to the end of middlewares array

const bodyParser = require('body-parser');



const routes = require('./routes');
const { options } = require('./routes');
const app = express();

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const middlewares = [
  helmet(),
  layout(),
  express.static(path.join(__dirname, 'public')),
  bodyParser.urlencoded({extended:true}),
  cookieParser(),
  session({
    secret: 'super-secret-key',
    key: 'super-secret-cookie',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }  
  }),
  flash(),
 
];
app.use(middlewares);

app.use('/', routes);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  
});

app.use(express.static(__dirname + '/public'));

//define the storage location for our images


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/');
  },

  // By default, multer removes file extensions so let's add them back
  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

app.post('/upload-profile-pic', (req, res) => {
  // 'profile_pic' is the name of our file input field in the HTML form, using multer single function
  let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('profile_pic');


  upload(req, res, function(err) {

    //req.file contains information of uploaded file
    //req.body contains information of text fields, if there where any
   
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
  }
  else if (!req.file) {
      return res.send('Please select an image to upload');
  }
  else if (err instanceof multer.MulterError) {
      return res.send(err);
  }
  else if (err) {
      return res.send(err);
  }
  if (req.fileValidationError) {
    return res.send(req.fileValidationError);
}
else if (!req.file) {
    return res.send('Please select an image to upload');
}
else if (err instanceof multer.MulterError) {
    return res.send(err);
}
else if (err) {
    return res.send(err);
}

        // Display uploaded image for user validation
        res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`);
    });
});



const createTransporter = async () => {
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
});
};
try {
  //async function asyncCall()  {
    const accessToken = await OAuth2Client.getAccessToken();
//});
 // }

  //asyncCall();
//transporter is going to be an object that can send email
//transport is transport configuration object, connection URL, or transport plugin device
//optional defaults is an object defines default values for mail options
const transporter = nodemailer.createTransport({

  service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });


  return transporter;


;

//emailOptions - who sends what to whom
const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};

const emailOptions ={
  subject: "Test",
  text: "I am sending an email from nodemailer!",
  to: "put_email_of_the_recipient",
  from: process.env.EMAIL
};


 // Set up the email options and delivering it
 const result = await transport.sendMail(mailOptions);
 return result;
 

  
} catch (error) {
  

 return error;
}
  

app.listen(3000, () => {
  console.log('App running at http://localhost:3000');
});


