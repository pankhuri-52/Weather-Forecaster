import React from 'react';

const conditions = ({location, current}) => {
  return (
    <div>
        <h1>{location.name}</h1>
        <h1>{current.temp_c}</h1>
   </div>
  );
}
export default conditions;