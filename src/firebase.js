//import everything fro  firebase
import * as firebase from 'firebase';

const config = {
    apiKey: "Your API key",
    authDomain: "goalcoach-bfb6f.firebaseapp.com",
    databaseURL: "https://goalcoach-bfb6f.firebaseio.com",
    projectId: "goalcoach-bfb6f",
    storageBucket: "",
    messagingSenderId: "907905629950"
  };

//initialize the firebase applicatio
export const firebaseApp = firebase.initializeApp(config);
//we can populate the firebase db by entering some reference
export const goalRef = firebase.database().ref('goals');
//this is used for complete goals
export const completeGoalRef = firebase.database().ref('completeGoals')
