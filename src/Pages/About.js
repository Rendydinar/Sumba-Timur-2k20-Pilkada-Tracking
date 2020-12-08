import React from 'react';
import ImgPemiluJokowi from '../static/jokowi-pemilu.jpg';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import classes from './About.module.css';
import Typography from '@material-ui/core/Typography';

const About = () => {
  return (
  	<div>
      <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Tentang</h1>
        <Container>
          <Grid container>
            <Grid item xs={12} md={4} sm={4} xl={4} lg={4}>
              <img className={classes.imgReponsive} src={ImgPemiluJokowi} alt="Pemilu" />
            </Grid>
            <Grid item xs={12} md={8} sm={8} xl={8} lg={8}>
              <br/>
              <Typography variant="h6" paragraph align="justify">
                <h4>Sumba Timur 2K20 Pilkada Tracking</h4>
                Website Non-Official Yang Menampilkan Data Pemilihan Kepada Daerah Sumba Timur Periode 2021-2026.
                Sumber Data Didapatkan Dari Beberapa Orang Yang Bekerja Di PAWANSLU (Pengawas Pemilihan Umum) Yang Sudah Menjalani Mitra Kerja.
                Data Akan Diupdate Setiap 30 Menit.
              </Typography>
              <Typography variant="h6" paragraph align="justify">
                Kontak Developer Untuk Mendapatkan Informasi Lebih Lanjut <a href="mailto:r3ndydinar@gmail.com">WnnaCry</a>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </center>
  	</div>
  );
}

export default About;
