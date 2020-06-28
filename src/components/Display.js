import React from 'react';
import './dstyle.css';

const Display = ({data, data_c}) => {
    
    return (
        <div className="container">
             <h2><center>Location and Current Data :</center></h2>
          <div>
             <ul className="div_ldata">
                    <li>{data.name}</li>
                    <li>{data.region}</li>
                    <li>{data.country}</li>
                    <li>{data.lat}</li>
                    <li>{data.lon}</li>
                    <li>{data.localtime}</li>
            </ul>
         </div>
         <div>
             <ul className="div_ldata">
                     <li>{data_c.temp_c}</li>
                     <li>{data_c.temp_f}</li>
                     <li>{data_c.humidity}</li>
                     <li>{data_c.precip_mm}</li>
                     <li>{data_c.wind_mph}</li>
            </ul>
         </div>
        </div>
    );
}
export default Display;