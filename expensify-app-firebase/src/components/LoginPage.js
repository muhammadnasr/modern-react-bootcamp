import React from 'react';
import { Link } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useAuth } from 'reactfire';
import { useState } from 'react';


const LoginPage = () => {
  let [codeSent, setCodeSent] = useState(false)
  let [code, setCode] = useState()

  const auth = useAuth();

  const updateCode = (e) => {
    setCode(e.target.value)
  }
  const verifyCode = () => {
    //console.log(auth);
    //console.log(window);
    console.log(code);
    confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      console.log(error);
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  const signIn = () => {
    //auth.languageCode = 'En';
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
    //const phoneNumber = getPhoneNumberFromUserInput();

    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    }, auth);

    //window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, '+1 650-555-3434', appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        setCodeSent(true)
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
        console.log(error);
      });

  }
  return (
    <div>
      Login - <Link to="/">Go home</Link>
      <div id='recaptcha-container'></div>

      {!codeSent ?
        <button id='sign-in-button' onClick={() => signIn(auth)} >Login with mobile</button>
        :
        <div>
          <input placeholder='enter code here' onChange={updateCode} />
          <button onClick={() => verifyCode()} >verify</button>
        </div>
      }
    </div>
  )
};

export default LoginPage;
