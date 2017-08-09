import React from 'react';
import Dropdown from './Dropdown'
import Dropdown1 from './Dropdown1'
import Dropdown2 from './Dropdown2'
import Dropdown3 from './Dropdown3'
import Dropdown4 from './Dropdown4'
import './App.css';

const App = () => {


  return (
    <div className="App">

    <div id="header">
      <strong>View Report Samples</strong>
      <br />
      <br />
      <button className="button">Login to view your reports</button>
      <br />
      <br />
    </div>

    {/*total amount of provisioned vehicles and provisioned TCUs*/}
    <div id="first">
      <Dropdown/>
    </div>

      <br />
      <br />

     {/*uncomment to see the line graph for eCall/iCall/ACN/Theft Alarm
    <div id="first_2">
      <Dropdown1 />
    </div>

      <br />
      <br />*/}

    {/*total remote operations called + detail line graph*/}
    <div id="second">
      <Dropdown2 />     
    </div>

    <br />
    <br />

    {/*number of times remote operations called pie graph*/}
    <div id="third">
      <Dropdown3 />
    </div>

    {/*max and average response time for remote operations line graph*/}
    <div id="fourth">
      <Dropdown4 />
    </div>

    <br />
    <br />

    </div>
    
  );
};

export default App;
