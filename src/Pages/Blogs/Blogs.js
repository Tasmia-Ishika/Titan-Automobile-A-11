import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-danger m-3 p-2 fw-bold text-center'>What is the difference between JS and NodeJs ?</h1>
            <p className='fst-italic m-3 p-3 fw-bolder'>ANSWER: Javascript is a high-level programming language that is used for writing scripts on website.Javascrips only run in the browsers. It is basically used in Client side. js is used in frontend development.	Javascript can add HTML and can run through the DOM.
                And NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. Nodejs is used in backend development.Nodejs can not add HTML tags.</p>

            <h1 className='text-danger m-3 p-2 fw-bold text-center'>When should I use NodeJs and When should I use MongoDB ?</h1>
            <p className='fst-italic m-3 p-3 fw-bolder'>ANSWER: NodeJs is a powerful tool showing excellent performance in many cases. The list of NodeJs application examples is quite long, and any project may very well benefit from using this technology. NodeJs uses JavaScript, which is great if it is coming from a front-end developer background - a very common pairing that leads to quick full-stack development potential. As a web framework, it's pretty great in being able to have red/write streams to websockets or to HTTP. It's pretty snappy at all this as well. It's using the V8 engine developed by Google. Javascript is compiled and executed swiftly as a result.
                MongoDB is an open source database built on horizontal scale architecture that uses a flexible source for storing data.As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON type format to store data. This format directly maps to native objects in most modern programming languages, makes it a natural choice for developers to not need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.</p>
            <h1 className='text-danger m-3 p-2 fw-bold text-center'>What is the purpose of JWT and How does it work?</h1>
            <p className='fst-italic m-3 p-3 fw-bolder'>ANSWER: JWT or JSON Web Token, is an open standard used to share security information between a client and a server. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.  Each JWT contains encoded JSON objects, including a set of numbers.
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                A JWT is a string made of three parts, separated by dots and serialized using base64. In the most common serialization format compact serialization, the JWT looks something like this: aaaaa.rrrrrr.ppppp.

                if decoded we will get two JSON strings. They are The header, the payload and The signature. </p>
        </div>
    );
};

export default Blogs;