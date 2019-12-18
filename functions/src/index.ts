// import * as functions from 'firebase-functions';

  // The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest(async (req: any, res:any) => {
    // Grab the text parameter.
    let original = req.query.text;
    // original = 'https://us-central1-gato-72737.cloudfunctions.net/addMessage'
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/messages').push({ original: original });
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
});

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
"use strict";
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot:any, context:any) => {
    // Grab the current value of what was written to the Realtime Database.
    const original = snapshot.val();
    const uppercase = original.toUpperCase();
    // You must return a Promise when perzorming asynchronous tasks inside a Functions such as
    // writing to the Firebase Realtime Database.
    // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
    return snapshot.ref.parent.child('uppercase').set(uppercase);
});
