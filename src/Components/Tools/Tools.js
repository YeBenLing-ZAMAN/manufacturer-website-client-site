import React, { useState } from 'react';

const Tools = () => {
    const [tools, setTools] = useState([]);

    return (
        <div>
            <p>tools= {tools.length}</p>
        </div>
    );
};

export default Tools;