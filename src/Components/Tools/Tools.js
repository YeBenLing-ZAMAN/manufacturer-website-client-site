import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('http://localhost:5000/tools')
            .then((res) => res.json())
            .then(data => {
                setTools(data)
                console.log(data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div className='text-center my-10'>
                <h1 className='text-4xl mb-4'>Avaiblie Products</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-3'>
                {
                    tools.map(tool => <Tool key={tool.id} tool={tool} ></Tool>)
                }
            </div>
        </>
    );
};

export default Tools;