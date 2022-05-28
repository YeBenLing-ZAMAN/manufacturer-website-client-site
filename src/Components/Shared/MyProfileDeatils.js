import React from 'react';
const MyProfileDeatils = () => {

    return (
            <div className='h-screen mt-10 w-full lg:w-1/2 mx-auto'>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <div className='p-4'>
                        <div className='my-4'>
                            <h3 className='text-md'>Name: <span className='font-bold'>Md kamruzzmana</span></h3>
                            <h3 className='text-md'>Email: <span className='font-bold'>mdkzaman2022@gmail.com</span></h3>
                        </div>
                        <div className='my-4'>
                            <h3 className='text-md'>Educational Background</h3>
                            <p className='font-bold'>Runnnig student of chemistry(hons) 4th year at Brahamanbaria govt college </p>
                        </div>
                        <div>
                            <h1 className='text-md font-bold'>live website link:</h1>
                            <button className='text-primary block mt-2' onClick={() => {
                                window.open("https://food-factory-yebenling.web.app/", "_blank");
                            }} >project 01</button>
                            <button className='text-primary block mt-2' onClick={() => {
                                window.open("https://aim-and-foucs.web.app/", "_blank");
                            }} >project 02</button>
                            <button className='text-primary block mt-2' onClick={() => {
                                window.open("https://happylife-convanstion-center.netlify.app/", "_blank");
                            }} >project 03</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div className='my-6'>
                            <h3 className='text-md font-bold'>List of technologies i have skilled as a web devloper</h3>
                            <ul className='list-disc list-outside mx-5'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Tailwind </li>
                                <li>JAVASCRIPT</li>
                                <li>DOM</li>
                                <li>REACT</li>
                                <li>REACT-Tootstrap</li>
                                <li>FIREBASE</li>
                                <li>Node</li>
                                <li>Express.js</li>
                                <li>Mongodb</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MyProfileDeatils;
