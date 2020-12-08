import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import classes from './Statistik.module.css';
import DataSource from '../../DataSource/data';

const TotalBartChart = () => {  
  return (
    <center className={classes.section}>
      <h4>Total Suara Seluruhnya</h4>
      <BarChart
        width={470}
        height={300}
        data={DataSource.totalBartChart}
        margin={{
          top: 5, right: 30, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sehati" fill="#0000FF" />
        <Bar dataKey="Kobul" fill="#FFFF00" />
      </BarChart>
    </center>
  );
}

export default TotalBartChart;