import React from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';
import classes from './Statistik.module.css';
import DataSource from '../../DataSource/data';

const COLORS = ['#FF0000', '#FFFF00'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TotalPie = () => {
  return (
    <center className={classes.section}>
      <h4>Total Persen Suara</h4>
      <PieChart width={400} height={400}>
        <Pie
          data={DataSource.totalPie}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {
            DataSource.totalPie.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
        <ul style={{  listStyle: 'none', fontWeight: 'bold', marginButtom: '50px'}}>
          <li style={{color: '#FF0000'}}><span>Sehati:</span> {DataSource.totalPie[0].value} Suara</li>
          <li style={{color: '#FFFF00'}}><span>Kobul:</span> {DataSource.totalPie[1].value} Suara</li>
        </ul>
    </center>
  );
}

export default TotalPie;