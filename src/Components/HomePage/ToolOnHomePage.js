import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Tool from '../Tools/Tool';

const ToolOnHomePage = () => {
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch(`http://localhost:5000/tools`).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <div className='text-center my-10'>
                <h1 className='text-4xl mb-4'>our Products</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 justify-items-center px-3'>
                {
                    tools?.slice(0, 4).map((tool,index) => <Tool refetch={refetch} key={index} tool={tool} ></Tool>)
                }
            </div>
            <div className='text-center my-10'>
                <Link to='/tools' className='btn btn-outline btn-primary'>See More Tools</Link>
            </div>
        </>
    );
};

export default ToolOnHomePage;