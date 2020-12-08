import React from 'react'
import Perkecamatan from './Perkecamatan';
import TotalPie from './TotalPie';
import TotalBartChart from './TotalBartChart';

const Statistik = () => {
  return (
    <div>
      <center><h1>Statistik Data</h1></center>
      <Perkecamatan />
      <TotalBartChart />
      <TotalPie />
    </div>
  )
}

export default Statistik;