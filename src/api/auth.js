import * as firebase from 'firebase';
import config from './firebase.config'

const firebaseApp = firebase.initializeApp(config);


export function isUserLoggedIn() {
  return new Promise((resolve, reject) => {

    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user != null) {
        resolve({isLoggerIn: true, user: user});
      }
      reject({isLoggerIn: false, user: null})
    });

  }); 
}

export function signUp(email, password) {
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password).then((res) => {
      return res;
    }).catch((error) => {
      return error
    });
}

export function login(email, password) {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password).then((res) => {
      return res;
    }).catch((error) => {
      console.log(error)
      return {error:true}
    });
}

export function logout() {
  return firebaseApp.auth().signOut()
}
