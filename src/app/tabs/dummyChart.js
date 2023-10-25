import React from 'react';

const generateRandomColor = ()=>'#'+Math.floor(Math.random()*16777215).toString(16);
const getRandomValue = ()=> Math.floor(Math.random()*29)+1;

const getContrastColor = (color)=>{
    color = color.slice(1);//get rid of #
    const r = parseInt(color.slice(0, 2), 16),
          g = parseInt(color.slice(2, 4), 16),
          b = parseInt(color.slice(4, 6), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
        ? '#000000'
        : '#FFFFFF';
}

const DummyChart = () =>{
  const chartValues = Array(10).fill(0).map(value => getRandomValue());
  const scale = 300/Math.max(...chartValues);
  return <>
    <h1>DummyChart</h1>
    <div className="chart">
      {chartValues.map((value,index)=>{
        const background = generateRandomColor();
        const color = getContrastColor(background); 
        return <div 
          className="chart__value" 
          style={{height: value*scale + 'px',background , color}}
          key={index}>
            {value}
          </div>
      })}
    </div>
  </>
}
 

export default DummyChart;
