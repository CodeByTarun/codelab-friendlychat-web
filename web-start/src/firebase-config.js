/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyAoMxsZ7nj2bWT7rdeg9v91bz6p7G7oGw0",
  authDomain: "friendlychat-1bcc4.firebaseapp.com",
  projectId: "friendlychat-1bcc4",
  storageBucket: "friendlychat-1bcc4.appspot.com",
  messagingSenderId: "891285748353",
  appId: "1:891285748353:web:1b28297ef5dce4cf76ab80"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}