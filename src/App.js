import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import SignIn from './SignInForAuthorizationCode';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignIn/>
      </header>
      <body>
        <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="iambit_poc_bot" data-size="large" data-auth-url="http://api.iambit.com/auth/sign-in/telegram" data-request-access="write"></script>
      </body>
    </div>
  );
}

export default App;
