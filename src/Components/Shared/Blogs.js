import React from 'react';
import blogCodeImage from '../../images/reviews/blogcode.jpg';
const Blogs = () => {
    return (
        <div className='p-5 m-5 border-2 shadow-lg border-primary'>
            <div>
                <h3 className='text-2xl mb-2 font-bold'>How will you improve the performance of a React Application?</h3>
                <p><span className='text-xl font-bold'>Answer: </span> Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where you can still speed up your React application. in blow list several steps: </p>
                <div className='pl-10 mb-10'>
                    <ul className='list-disc list-outside'>
                        <li>Rollup</li>
                        <li>Virtualize Long Lists</li>
                        <li>shouldComponentUpdate In Action</li>
                        <li>The Power Of Not Mutating Data</li>
                        <li>Dependency optimization</li>
                        <li>Multiple Chunk Files</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <h3 className='text-2xl mb-2 font-bold'>What are the different ways to manage a state in a React application</h3>
                <p><span className='text-xl font-bold'>Answer: </span> There are lots of manage a state in a react application.react state management is React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.</p>
                <div className='pl-10 mb-10'>
                    <ul className='list-disc list-outside'>
                        <li>Local state => useReducer || useState || dispath</li>
                        <li>Global state => useReducr || useContext</li>
                        <li>Server state => useState || useEffect || useSWR || fetcher</li>
                        <li>URL state => useHistory || useLocaton || useParams || seRouter</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <h3 className='text-2xl mb-2 font-bold'>How does prototypical inheritance work?</h3>
                <p><span className='text-xl font-bold'>Answer: </span> Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor.
                </p>
                <p>Prototypical inheritance clearly has a lot of benefits for JavaScript programmings, but, like all tools, it does have limitations. Let’s take a look at the key downsides to look out for as you write a prototype-based</p>
                <p className='font-bold'>Program : </p>
                <div className='pl-10 mb-10'>
                    <ul className='list-disc list-outside'>
                        <li> <span className='font-bold'>Inheritance cannot flow in circles as this will create an error.</span></li>
                        <li><span className='font-bold'>Objects cannot inherit from multiple prototypes. </span>As we saw above, they can inherit multiple object’s properties through a chain, however another object linked as a prototype explicitly will cause an error. This is the case even if the additional prototype is</li>
                        <li><span className='font-bold'>Prototypical relationships can only be made to objects.</span> This is because the __proto__ function works as a forwarder, directing the program where to find the value it is looking for. </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <h3 className='text-2xl mb-4 font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <div>
                    <span className='text-xl font-bold'>Answer: </span>
                    <img src={blogCodeImage} alt="" />
                </div>
            </div>
            <hr className='mt-6' />
            <div>
                <h3 className='text-2xl my-4 font-bold'>What is a unit test? Why should write unit tests?</h3>
                <p><span className='text-xl font-bold'>Answer: </span> Unit test, also known as module test, refers to the test of the smallest testable unit in the software. The purpose is to check whether each unit can realize the function correctly and find out various defects that may exist in each module.
                    <p>Integration test is a test which is based on unit test and according to the design requirements, the units that passes unit test are assembled into a system or subsystem. The purpose is to check whether the interface relationship between different program units or components meets the requirements and whether they can operate normally.</p>
                </p>
                <p>
                    <span className='font-bold text-md'>During unit test, if the module is not a separate program, some auxiliary test modules need to be set. There are two types of auxiliary test modules:</span>
                    <div className='pl-10 mb-10'>
                        <ul className='list-disc list-outside'>
                            <li>Driver: Simulate the upper module of the tested module, which is equivalent to the main program of the tested module. It receives the data, transmits the relevant data to the tested module, starts the tested module, and produces the corresponding results.</li>
                            <li>Stub: It is used to simulate the module called in the working process of the tested module.</li>
                        </ul>
                    </div>
                </p>
            </div>
            <hr />
        </div>
    );
};

export default Blogs;