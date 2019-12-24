exports.handler = async (event) => {
    // TODO implement
    //dynamo.put(event.payload, callback);
    //var AWS = require('aws-sdk');
    //var dynamo = new AWS.DynamoDB.DocumentClient();

   const response = {
        body: 'content',
        bodyEncoding: 'text',
        headers: {
            'header name in lowercase': [{
                key: 'header name in standard case',
                value: 'header value'
             }],
        },
        statusCode: '200'
    };
    
    return response;
};
