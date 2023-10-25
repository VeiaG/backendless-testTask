import React from "react";

const getRandomValue = ()=> Math.floor(Math.random()*15);

const DummyTable = () => (
  <>
    <h1>DummyTable</h1>
    <table >
      <tbody>
        <tr>
          <td>Dummy</td>
          <td>Table</td>
          <td></td>
        </tr>
        <tr>
          <td>{getRandomValue()}</td>
          <td>{getRandomValue()}</td>
          <td>{getRandomValue()}</td>
        </tr>
        <tr>
          <td>{getRandomValue()}</td>
          <td>{getRandomValue()}</td>
          <td>{getRandomValue()}</td>
        </tr>
        
      </tbody>
    </table>
  </>
);

export default DummyTable;
