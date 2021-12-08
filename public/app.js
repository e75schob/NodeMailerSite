const express = require('express');
const multer = require('multer');
const path = require('path');



app.post('/upload-profile-pic', (req, res) => {
  // 'profile_pic' is the name of our file input field in the HTML form
  let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('profile_pic');

  upload(req, res, function(err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields, if there were any

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




//send email using NodeMailer 
const form = document.getElementById('contact-form')

const formEvent = form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const name = form.getElementsByTagName('input')[1].value
    const email = form.getElementsByTagName('input')[2].value
    
    const message = form.getElementsByTagName('textarea')[0].value
    sendEmail(name,email,message)
  })

  function sendEmail(name, email, message) {
    const options = {
      method: "POST",
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
    
      message: message
    })
    };
  return fetch("/contact", options)
    .then(res =>{
      if(res.status === 200){
        Swal.fire({
        icon: 'success',
        title: 'Your message has been sent Successfully!',
        })
        form.reset()
      }else{
        Swal.fire({
        icon: 'error',
        title: 'Error, please try agian!',
        })
        }
      })
  } 