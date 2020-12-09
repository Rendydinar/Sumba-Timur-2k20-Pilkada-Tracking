import React from 'react'
import classes from './Landing.module.css';

const Landing = () => {
  return (
  	<div>
	  <div className={classes.landingWrap}>
	  	<div className={classes.landingContent}>
	      <p className={classes.fontH2}>
	        PILKADA SUMBA TIMUR 2k20 TRACKING
	      </p>
	      <p className={classes.fontH5}>
	      	Ayo Bersama Kita Kawal Pemilihan Bupati Sumba Timur Rabu 9 Desember 2020. Jangan Sampai Kamu Salah Pilih Seorang Yang Akan Memimpin Kota Tercinta-Mu Selama 2021-2026.
      	 </p>
	  	</div>
	  </div>
  	  <p className={classes.fontSection}>
  	    Ayo Bersama Sukseskan PILKADA Sumba Timur 2020
  	  </p>
	</div>
  )
}

export default Landing;