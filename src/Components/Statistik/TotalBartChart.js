import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import classes from './Statistik.module.css';
import DataSource from '../../DataSource/data';

const totalSehati = DataSource.perkecamatan.reduce((a, b) => a + (b["sehati"] || 0), 0);
const totalkobul = DataSource.perkecamatan.reduce((a, b) => a + (b["kobul"] || 0), 0);

let totalBartChart = [{
  name: "Total Suara",
  Sehati: totalSehati,
  Kobul: totalkobul
}]

const TotalBartChart = () => {  
  console.log(totalSehati, ' ', totalkobul);
  return (
    <center className={classes.section}>
      <h4>Total Suara Seluruhnya</h4>
      <BarChart
        width={380}
        height={380}
        data={totalBartChart}
        margin={{
          top: 5, right: 30, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sehati" fill="#FF0000" />
        <Bar dataKey="Kobul" fill="#FFFF00" />
      </BarChart>
    </center>
  );
}

export default TotalBartChart;