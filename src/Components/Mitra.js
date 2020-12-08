import React from 'react'
import classes from './Mitra.module.css';
import MaskotPilkada2020 from '../static/logo-pemilihan-serentak.png';

const Mitra = () => {
  return (
    <div className={classes.wrapper}>
      <center>
        <img src={MaskotPilkada2020} alt="MaskotPilkada2020" />
      </center>
    </div>
  )
}

export default Mitra;