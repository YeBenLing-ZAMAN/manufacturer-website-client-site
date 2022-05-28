import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5 m-5 border border-2 shadow-lg border-danger'>
            <div>
                <h3>Difference between javascript and nodejs</h3>
                <p><strong>javascript:</strong> Javascript is a Programmign language. It's famous on website development.Javascript can only be run in the browsers.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                    <br />
                    <strong>nodejs:</strong> NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development.</p>
            </div>
            <hr />
            <div>
                <h3> When should you use nodejs and when should you use mongodb?</h3>
                <p>Choosing the right languages, tools and platforms can determine a lot of aspects of the future app functioning – from the straightforwardness of development to the performance and efficiency.Thus, it is critical to make the right choice in the beginning.If you have a web application project in mind, you are, most probably, evaluating the pros and cons of building your stack around JavaScript and the tools using it. Sooner or later, you will think of the backend development platform, and surely come across Node.js.</p>
                <p>MongoDB is an open-source document database built on a horizontal scale-out architecture that uses a flexible schema for storing data. MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas.MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily.</p>
                <ul>
                    <li>Document Model</li>
                    <li>Get Started Quickly</li>
                    <li>Deployment Options</li>
                    <li>Find Community</li>
                </ul>
            </div>
            <hr />
            <div>
                <h3>Differences between sql and nosql databases?</h3>
                <p></p>
                <ul>
                    <li><strong>sql databases</strong></li>
                    <li>Structured query language (SQL)		</li>
                    <li>Table	</li>
                    <li>Predefined	</li>
                    <li>ACID	</li>
                    <li>Relational	</li>
                    <li>Vertical	</li>
                    <li>Specialized DB hardware (Oracle Exadata, etc.)		</li>
                    <li>MySQL, PostgreSQL, Oracle, and MS-SQL		</li>
                    <li>A mix of open-source like Postgres & MySQL, and commercial like Oracle Database.</li>
                    <li>Cross-platform support, secure and free	</li>
                </ul>
                <ul>
                    <li><strong>nosql databases</strong></li>
                    <li>No declarative query language</li>
                    <li>Key-value, document, wide-column, and graph</li>
                    <li>Dynamic	</li>
                    <li>Non-relational</li>
                    <li>MongoDB, Apache HBase, Amazon DynamoDB, Redis, Couchbase, Cassandra, and Elasticsearch</li>
                    <li>Horizontal</li>
                    <li>MongoDB, Apache HBase, Amazon DynamoDB, Redis, Couchbase, Cassandra, and Elasticsearch</li>
                    <li>Commodity hardware</li>
                    <li>BASE</li>
                    <li>Easy to use, high performance, and flexible tool</li>
                </ul>
            </div>
            <hr />
            <div>
                <h3> What is the purpose of jwt and how does it work?</h3>
                <p></p>
            </div>
        </div>
    );
};

export default Blogs;