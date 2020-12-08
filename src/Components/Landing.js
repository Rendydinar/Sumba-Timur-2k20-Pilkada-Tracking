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
	        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
	        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
	        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      	 </p>
	  	</div>
	  </div>
  	  <p className={classes.fontSection}>
  	    Ayo Bersama Sukseskan PILKADA Sumba Timur 2020
  	  </p>
  	  <hr />
	</div>
  )
}

export default Landing;