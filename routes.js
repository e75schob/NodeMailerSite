const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});
const { check, validationResult, matchedData } = require('express-validator');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

//Home page route

router.get('/', function(req, res) {  //added word function  took away =>
  res.send('index');  //they have res.render('index);
});



router.get('/contact', csrfProtection,(req, res) => {
  res.render('contact', {
    data: {},
    errors: {},
    csrfToken: req.csrfToken()
  });
});
 


// routes.js
router.post('/contact', upload.single('photo'),csrfProtection, [
  check('message')
    .isLength({ min: 1 })//to check the resulting string isn't empty
    .withMessage('Message is required')
    .trim()//to remove whitespace from the start and end of the string
    .escape(),
  check('email')
    .isEmail()
    .withMessage('That email doesn‘t look right')
    .bail()
    .trim()
    .normalizeEmail()
    .escape()
], (req, res, next) => {
  
  if (req.file){
    console.log('Uploaded: ', req.file);
    //Homework: Upload file to S3
  }
  const errors = validationResult(req);//extract validation errors from a request

  if (!errors.isEmpty()){ //there are errors Render form again with sanitized values/errors messages.
    //Error messages can be returned in an array using errors.array()

  return res.render('contact', {
    data: req.body,
    errors: errors.mapped(),
    csrfToken: req.csrfToken()
  });
}
//} else {
//Data from form is valid
//}
  const data = matchedData(req);
  console.log('Sanitized:', data);
  //Homework: send sanitized data in email or persist to a db
  if (req.file) {
    console.log('Uploaded: ', req.file);
    // Homework: Upload file to S3
  }


  req.flash('success', 'Thanks for the message! I‘ll be in touch :)');
  res.redirect('/');
 
});

/*const { check, validationResult, matchedData } = require('express-validator');

const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

//root url / simply renders the index.ejs view

//router.get('/', (req, res) => {
  //res.render('index');
//});*/

//When people make a GET request to /contact, render new view contact.ejs so 
//abreviated version router.get('/contact', (req, res) => { res/render('contact');  });
//router.get('/contact', csrfProtection, (req, res) => {
  /*res.render('contact', {
    data: {},
    errors: {},
    csrfToken: req.csrfToken()
  });
});


//It’s a common convention for forms to POST data back to the same URL as was used in the initial GET request. Let’s do that here and handle POST /contact to process the user input
//look at the invalid submission first. If invalid, we need to pass back the submitted values to the view (so users don’t need to re-enter them) along with any error messages we want to display:
//router.get('/contact', (req, res) => {
//res.render('contact', {
//data: {},
//errors: {}
//});
//});



//POST
//router.post('/contact',{
//data: req.body, //message,email
//errors: {
//message: {
//msg: 'A message is required'
//},

//email: {
//"That email doesn't look right"
//}
//}
//  });
//  });



router.post('/contact', upload.single('photo'), csrfProtection, [
  check('message')
    .isLength({ min: 1 })
    .withMessage('Message is required')
    .trim(),
  check('email')
    .isEmail()
    .withMessage('That email doesn‘t look right')
    .bail()
    .trim()
    .normalizeEmail()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('contact', {
      data: req.body,//{message, email}
      errors: errors.mapped(),
      csrfToken: req.csrfToken()
    });
  }
  
  const data = matchedData(req);
  console.log('Sanitized: ', data);
  // Homework: send sanitized data in an email or persist in a db

  if (req.file) {
    console.log('Uploaded: ', req.file);
    // Homework: Upload file to S3
  }

  req.flash('success', 'Thanks for the message! I‘ll be in touch :)');
  res.redirect('/');
});



// Send book
router.route('/send').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  sendMail(name, email)
    .then((result) => res.json(result))
    .catch((error) => res.json(error.message));
});


//root url / simply renders the index.ejs view*/
module.exports = router;