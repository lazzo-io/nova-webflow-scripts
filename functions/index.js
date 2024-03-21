const {onRequest} = require("firebase-functions/v2/https");

const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibWlPWFhPIiwic3ViIjoibWlPWFhPIiwiSWQiOiI2M";

initializeApp({
    credential: applicationDefault(),
    projectId: 'lazzo-nova',
});

exports.novaAdminGetUser = onRequest(async (request, response) => {
    if(!request.query.uid) response.status(400).send("No User ID");

    if(!request.headers.authorization) response.status(403).send("Missing Token");
    if(request.headers.authorization !== API_KEY) response.status(403).send("Forbidden");

    let res = await getAuth()
    .getUser(request.query.uid)
    .then(async (userRecord) => {
        return userRecord.toJSON();
    })
    .catch(async (error) => {
      console.log('Error fetching user data:', error);

      response.status(400).send("No user found or error");
    });

    response.send(res);
});

exports.novaAdminUpdateUser = onRequest(async (request, response) => {
    if(!request.query.uid) response.status(400).send("No User ID");

    if(!request.headers.authorization) response.status(400).send("No User ID");
    if(request.headers.authorization !== API_KEY) response.status(403).send("Forbidden");

    let res = await getAuth()
    .updateUser(request.query.uid, {
    displayName: request.body.uid ? request.body.uid : "",
  })
    .then(async (userRecord) => {
        return userRecord.toJSON();
    })
    .catch(async (error) => {
        console.log('Error updating user data:', error);

        response.status(400).send("No user found or error");
    });

    response.send(res);
});