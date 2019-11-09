'use strict';

const request = require('request');
const express = require('express')
const app = express()
const port = 3000


// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = 'f1294c049ee2412993503ad5aae58252';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

// Request parameters.

app.get('/', (req, res) => res.sendFile("myindex.html"));

app.listen(3000, () => console.log(`Example app listening on port 3000!`));

app.post("/sendPicture", (req, res) => {

    const params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false',
        'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
            'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
    };

    const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": ' + '"' +'image/webp'+ '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    };

    request.post(options, (error, response, body) => {
        if (error) {
            console.log('Error: ', error);
            return;
        }
        let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
        console.log('JSON Response\n');
        console.log(jsonResponse);
    });
});
