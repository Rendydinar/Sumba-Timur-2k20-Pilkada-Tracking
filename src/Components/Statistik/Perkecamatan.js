import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import classes from './Statistik.module.css';
import DataSource from '../../DataSource/data';

const Perkecamatan = () => {
  return (
    <center className={classes.section}>
      <h4>Total Suara Per-Kecematan</h4>
      <BarChart
        width={470}
        height={400}
        data={DataSource.perkecamatan}
        margin={{
          top: 20, right: 30, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sehati" stackId="a" fill="#0000FF" />
        <Bar dataKey="kobul" stackId="a" fill="#FFFF00" />
      </BarChart>
    </center>

  );
}

export default Perkecamatan;