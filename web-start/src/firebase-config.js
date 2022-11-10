/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyB-AK0ooIJv9AdqXXeRYsi4NUmmOj6SIAs",
  authDomain: "friendlychat-93875.firebaseapp.com",
  projectId: "friendlychat-93875",
  storageBucket: "friendlychat-93875.appspot.com",
  messagingSenderId: "12891065897",
  appId: "1:12891065897:web:e029681c0f1f7933879638",
  measurementId: "G-ZPBKE6YMVX"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}