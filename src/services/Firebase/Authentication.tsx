import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@chakra-ui/react';
import { firebaseApp } from './firebaseConfig';

const FireBaseAuthentication = () => {
  const app = firebaseApp();


  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const email = "test@test.test";
  const password = "testtest";

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });



  return (
    <Button>Login</Button>
  );
}
// TODO: Replace the following with your app's Firebase project configuration

export default FireBaseAuthentication;