import React from 'react';
import './Blogs.css';

const Blogs = () => {
   return (
      <div className='border-container'>
         <div>
            <h3>Difference between JavaScript and Node.js</h3>
            <p><small>
               JavaScript is a simple programming language that runs in any browser JavaScript Engine.Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</small></p>
         </div>
         <div>
            <h3>When should you use Node.js and When should you use MongoDB</h3>
            <p><small>Node.js: Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
               MongoDB: NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.MongoDB is the most popular of the new breed of non-relational NoSQL databases. Specifically, it's a document database, also called a document-oriented database or a document store.</small></p>
         </div>
         <div>
            <h3>Difference between SQL and NoSQL database</h3>
            <p><small>The five critical differences between SQL vs NoSQL are: SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
               SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</small></p>
         </div>
         <div>
            <h3>What is purpose of jwt and how does it work</h3>
            <p><small>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</small></p>
         </div>

      </div>
   );
};

export default Blogs;