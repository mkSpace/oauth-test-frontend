import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

function SignIn() {
    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log('response : ' + codeResponse.code)
            console.log('response : ' + codeResponse.state)
            console.log('response : ' + codeResponse.scope)
            console.log('response : ' + codeResponse.body)
            // Send the authorization code to the backend server
            fetch('https://api.iambit.com/auth/sign-in/google', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ authorizationCode: codeResponse.code, redirectUri: 'postmessage' }),
            })
            .then(response => response.json())
            .then(data => {
              console.log('Backend response:', data);
            })
          },
          onError: () => {
            // Handle login errors here
            console.error('Google login failed');
          },
          flow: 'auth-code',
    });

    return (
        <button onClick={() => googleLogin()}>
          Sign in with Google
        </button>
      );
}

export default SignIn;