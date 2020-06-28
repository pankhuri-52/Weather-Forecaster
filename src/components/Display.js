import React from 'react';
import './dstyle.css';

const Display = ({data, data_c}) => {
    
    if(data !== '') {
    return (
        <div className="container">
             <h2><center>Location and Current Data :</center></h2>
          <div>
             <ul className="div_ldata">
                    <li>Name of the city : <i>{data.name}</i></li>
                    <li>Name of the region : <i>{data.region}</i></li>
                    <li>Name of the country : <i>{data.country}</i></li>
                    <li>Latitude : <i>{data.lat}</i></li>
                    <li>Longitude : <i>{data.lon}</i></li>
                    <li>Current Date and Time : <i>{data.localtime}</i></li>
            </ul>
         </div>
         <div>
             <ul className="div_ldata">
                     <li>Temperature in Celsius : <i>{data_c.temp_c}</i></li>
                     <li>Temperature in Fahrenheit : <i>{data_c.temp_f}</i></li>
                     <li>Humidity :<i> {data_c.humidity}</i></li>
                     <li>Precipitation : <i>{data_c.precip_mm}</i></li>
                     <li>Wind Condition : <i>{data_c.wind_mph}</i></li>
            </ul>
         </div>
        </div>
    );
    }
    else {
        return (
            <div></div>
        )
    }
}
export default Display;