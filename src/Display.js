import React from 'react';

const Display = ({data}) => {
    console.log(data);
    return (
        <div>
           <h1>{data.name}</h1>
        </div>
    );
}
export default Display;