'use strict';

const { SSM } = require('aws-sdk')
const ssm = new SSM()
const f = require('faunadb'),
    q = f.query

let client;

const init = async () => {
	// TODO: update to use aws-parameter-cache
    // Get the Fauna Server Key from AWS Systems Manager Parameter Store at runtime.
    const { Parameter: { Value } } = await ssm.getParameter({ Name:  process.env.FAUNA_SECRET_PARAMETER, WithDecryption: true }).promise();

    // Setup our Fauna client
    client = new f.Client({ secret: Value }, { headers: { 'X-Fauna-Source': 'sam-app' } })
}

// This starts our initialization before a handler is invoked by calling the `init` function above
const initComplete = init();

exports.list = async () => {
    await initComplete;
    
    let results = await client.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('stores'))),
            q.Lambda(product => q.Get(product))
        )
    );
        
    const response = {
        statusCode: 200,
        body: JSON.stringify(results)
    };

    return response;
}

exports.create = async (event) => {
    await initComplete;

    let result = await client.query(
        q.Create(q.Collection('stores'), { data: JSON.parse(event.body) })
    );

    const response = {
        statusCode: 200,
        body: JSON.stringify(result)
    };

    return response;
}

exports.update = async (event) => {
    await initComplete;

    let result = await client.query(
        q.Update(
            q.Ref(q.Collection('stores'), event.pathParameters.id),
            { data: JSON.parse(event.body) }
        )
    );

    const response = {
        statusCode: 200,
        body: JSON.stringify(result)
    };

    return response;
}

exports.delete = async (event) => {
    await initComplete;

    let result = await client.query(
        q.Delete(q.Ref(q.Collection('stores'), event.pathParameters.id)));

    const response = {
        statusCode: 200,
        body: JSON.stringify(result)
    };

    return response;
}
