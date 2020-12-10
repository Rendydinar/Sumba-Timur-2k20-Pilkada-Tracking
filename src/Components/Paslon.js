import React from 'react';
import PaslonClass from './Paslon.module.css';
import SehatiImg from '../static/sehati.jpg';
import KobulImg from '../static/kobul.jpg';

// Grid
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// Card
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// List
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ListIcon from '@material-ui/icons/List';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import EventIcon from '@material-ui/icons/Event';

// Logo Partai
import PartaiPDIP from '../static/logo-pdip.png';
import PartaiDemokrat from '../static/logo-demokrat.jpg';
import PartaiGerindra from '../static/logo-gerindra.jpg';
import PartaiHanura from '../static/logo-hanura.png';
import PartaiNasdem from '../static/logo-nasdem.jpg';
import PartaiPan from '../static/logo-pan.jpg';
import PartaiGolkar from '../static/logo-golkar.png';
import PartaiPkb from '../static/logo-pkb.png';
import PartaiPkpi from '../static/logo-pkpi.jpg';
import PartaiPsi from '../static/logo-psi.png';

// Menu
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FacebookIcon from '@material-ui/icons/Facebook';	
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  contentCenter: {
  	display: 'flex',
  	flexDirection: 'row',
  	justifyContent: 'center',
  	alignContent:'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rootCard: {
    maxWidth: 400,
    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,52,89,1) 0%, rgba(0,168,232,1) 90% );',
  },
  media: {
    height: 120,
    paddingTop: '56.25%', // 16:9
	objectPosition: 'top'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatarSehati: {
    backgroundColor: 'blue',
    fontWeight: 'bold'
  },
  avatarKobul: {
    backgroundColor: 'yellow',
    fontWeight: 'bold'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },  
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  partaiWrap: {
  	display: 'flex',
  	flexWrap: 'wrap',
  	justifyContent: 'center'
  },
  MenuShare: {
  	background: 'transparent'
  }
}));

const Paslon = () => {
  const classes = useStyles();
  const [expandedKobul, setExpandedKobul] = React.useState(false);
  const [expandedSehati, setExpandedSehati] = React.useState(false);
  const [openSehatiInfo, setOpenSehatiInfo] = React.useState({
  	visi: false,
  	misi: false,
  	strategi: false, 
  	agendaPembangunan: false
  });
  const [openKobulInfo, setOpenKobulInfo] = React.useState({
  	viis: false,
  	misi: false,
  });

  const handleSehatiInfoClick = (e) => {
  	switch (e) {
  		case "visi":
		    setOpenSehatiInfo({
		    	...openSehatiInfo,
		    	visi: !openSehatiInfo.visi,
		    });
  			break;
  		case "misi":
		    setOpenSehatiInfo({
		    	...openSehatiInfo,
		    	misi: !openSehatiInfo.misi,
		    });
  			break;
  		case "strategi":
		    setOpenSehatiInfo({
		    	...openSehatiInfo,
		    	strategi: !openSehatiInfo.strategi,
		    });
  			break;
  		case "agendaPembangunan":
		    setOpenSehatiInfo({
		    	...openSehatiInfo,
		    	agendaPembangunan: !openSehatiInfo.agendaPembangunan,
		    });
  			break;
  		default:
  			break;	
  	}
  };
  const handleKobulInfoClick = (e) => {
  	switch (e) {
  		case "visi":
		    setOpenKobulInfo({
		    	...openKobulInfo,
		    	visi: !openKobulInfo.visi,
		    });
  			break;
  		case "misi":
		    setOpenKobulInfo({
		    	...openKobulInfo,
		    	misi: !openKobulInfo.misi,
		    });
  			break;
  		default:
  			break;	
  	}
  };

  const handleExpandClickSehati = () => {
    setExpandedSehati(!expandedSehati);
  };

  const handleExpandClickKobul = () => {
    setExpandedKobul(!expandedKobul);
  };
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickShare = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseShare = () => {
    setAnchorEl(null);
  };  
  return (
  	<center>
    <Container className={classes.root}>
      <Grid className={classes.contentCenter} container>
        <Grid className={classes.marginLeft} item xs={12} md={5} sm={5} xl={5} lg={5}>
		  <Card className={classes.rootCard}> 
		    <CardHeader
		      avatar={
		        <Avatar aria-label="recipe" className={classes.avatarSehati}>
		          1
		        </Avatar>
		      }
		      title="PAKET SEHATI"
		      subheader="Calon Bupati Drs. Kristofel Praing,M.Si & Calon Wakil Bupati David Melo Wadu,S.T"
		    />
		    <h2>COBLOS NO. 1 - SEHATI</h2>
		    <CardMedia
		      className={classes.media}
		      image={SehatiImg}
		      title="Sehati"
		    />
		    <CardContent>
		      <Typography variant="body2" color="textSecondary" component="p">
		        "SEHATI BERGERAK MENUJU PERUBAHAN"
		      </Typography>
		    </CardContent>
		    <CardActions disableSpacing>
		      <IconButton aria-label="share">
		        <ShareIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickShare} />
			      <Menu
			        id="simple-menu"
			        anchorEl={anchorEl}
			        keepMounted
			        open={Boolean(anchorEl)}
			        onClose={handleCloseShare}
			        className={classes.MenuShare}
			      >
			        <MenuItem><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://sumba-timur-2k20-pilkada-tracking.netlify.app/" rel="noopener noreferrer" className="fb-xfbml-parse-ignore"><FacebookIcon /></a></MenuItem>
			        <MenuItem><a target="_blank" href="whatsapp://send?text=Saya Pilih *Sehati*, Ayo Pantau Pilkada Sumba Timur Disini => https://sumba-timur-2k20-pilkada-tracking.netlify.app/" rel="noopener noreferrer" data-action="share/whatsapp/share"><WhatsAppIcon /></a></MenuItem>
			      </Menu>
		      </IconButton>
		      <IconButton
		        className={clsx(classes.expand, {
		          [classes.expandOpen]: expandedSehati,
		        })}
		        onClick={handleExpandClickSehati}
		        aria-expanded={expandedSehati}
		        aria-label="show more"
		      >
		        <ExpandMoreIcon />
		      </IconButton>
		    </CardActions>
		    <Collapse in={expandedSehati} timeout="auto" unmountOnExit>
		      <CardContent>
			    <List
			      component="nav"
			      aria-labelledby="nested-list-subheader"
			      subheader={
			        <ListSubheader component="div" id="nested-list-subheader">
			          Info Lebih Lanjut
			        </ListSubheader>
			      }
			    >
			      <ListItem button onClick={() => handleSehatiInfoClick('visi')}>
			        <ListItemIcon>
			          <HighlightOffIcon />
			        </ListItemIcon>
			        <ListItemText primary="VISI" />
			        {openSehatiInfo.visi ? <ExpandLess /> : <ExpandMore />}
			      </ListItem>
			      <Collapse in={openSehatiInfo.visi} timeout="auto" unmountOnExit>
			        <List component="div" disablePadding>
			          <ListItem button className={classes.nested}>
			          	<ol type="1">
			          		<li>
			          			<b>Sejahtera</b> merupakan suatu kondisi sosial, politik, ekonomi, dan budaya masyarkat yang produktif dan mampu memenuhi kebutuhan dasarnya secara layak dan berkelanjutan (life-sustaining basic human needs) dengan memanfaatkan potensi dan sumber daya lokal sebagai penggerak utama.
			          		</li>
			          		<li>
			          			<b>Harmoni</b> mengandung makna keselarasan dalam seluruh aspek kehidupan bermasyarakat, berbangsa dan bernegara. Terwujudnya tatanan kehidupan yang demokratis, serasi dan selaras dengan nilai-nilai luhur dan karakter bangsa indonesia yang mengikat keutuhan dalam mozaik kebhinekaan.
			          		</li>
			          		<li>
			          			<b>Tertib</b> menggambarkan kinerja berpemerintahan yang inklusif dan berkeadilan, berlansakan pada norma, kaidah dan hukum dalam mewujudkan stabilitas, pemerataan dan pembangunan berkelanjutan.
			          		</li>
			          	</ol>
			          </ListItem>
			        </List>
			      </Collapse>

			      <ListItem button onClick={() => handleSehatiInfoClick('misi')}>
			        <ListItemIcon>
			          <ListIcon />
			        </ListItemIcon>
			        <ListItemText primary="MISI" />
			        {openSehatiInfo.misi ? <ExpandLess /> : <ExpandMore />}
			      </ListItem>
			      <Collapse in={openSehatiInfo.misi} timeout="auto" unmountOnExit>
			        <List component="div" disablePadding>
			          <ListItem button className={classes.nested}>
			          	<ol type="1">
			          		<li>
			          			Meningkatkan kualitas Sumber Daya Manusia (SDM) dan produktivitas masyarkat, pemerintahan, dan dunia usaha dalam mengelola dan mengembangkan berbagai sumber daya ekonomi, sosial, politik dan budaya secara terpadu dan berkelanjutan sehingga mampu mandiri dan bermartabat
			          			<p>Tujuan: Terwujudnya kemandirian masyarkat dan daerah yang berkelanjutan.</p>
			          		</li>
			          		<li>
			          			Mewujudkan tatanan kehidupan bermasyarakat, berbangsa, dan bernegara yang demokratis dan berkarakter
			          			<p>Tujuan: Terwujudnya keseimbangan dan harmonisasi kehidupan bermasyarakat, berbangsa, dan bernegara secara inklusif, berkeadilan, dan berkelanjutan.</p>
			          		</li>
			          		<li>
			          			Meningkatkan kinerja pemerintah yang inklusif dan berkeadilan
			          			<p>Tujuan: Terwujudnya ketertiban umum dan meningkatkannya kualitas penyelenggaraan pemerintahan, pembangunan, dan pelayanan publik.</p>
			          		</li>
			          	</ol>			            
			          </ListItem>
			        </List>
			      </Collapse>

			      <ListItem button onClick={() => handleSehatiInfoClick('strategi')}>
			        <ListItemIcon>
			          <WbIncandescentIcon />
			        </ListItemIcon>
			        <ListItemText primary="STRATEGI" />
			        {openSehatiInfo.strategi ? <ExpandLess /> : <ExpandMore />}
			      </ListItem>
			      <Collapse in={openSehatiInfo.strategi} timeout="auto" unmountOnExit>
			        <List component="div" disablePadding>
			          <ListItem button className={classes.nested}>
			          	<ol type="1">
			          	  	<li>
			          	  	  	Peningkatan produktivitas sektor-sektor unggulan, yaitu pertanian, perikanan, dan peternakan terintegrasi pariwisata, dengan pemanfaatan IPTEK dan memperhatikan daya dukung lingkungan hidup
			          		</li>
			          		<li>
			          			Pola kemitraan pemerintah, masyarkat, dan dunia usaha.
			          		</li>
			          		<li>
			          			Pembangunan karakter dan etos kerja
			          		</li>
			          		<li>
			          			Peningkatan akses masyarkat terhadap infrastuktur dasar
			          		</li>
			          		<li>
			          			Peningkatan kualitas tata kelola pemerintahan
			          		</li>
			          	</ol>			            
			          </ListItem>
			        </List>
			      </Collapse>

			      <ListItem button onClick={() => handleSehatiInfoClick('agendaPembangunan')}>
			        <ListItemIcon>
			          <EventIcon />
			        </ListItemIcon>
			        <ListItemText primary="AGENDA PEMBANGUNAN" />
			        {openSehatiInfo.agendaPembangunan ? <ExpandLess /> : <ExpandMore />}
			      </ListItem>
			      <Collapse in={openSehatiInfo.agendaPembangunan} timeout="auto" unmountOnExit>
			        <List component="div" disablePadding>
			          <ListItem button className={classes.nested}>
			          	<ol type="1">
			          	  	<li>
			          	  	  	Pemberdayaan ekonomi kerakyatan.
			          		</li>
			          		<li>
			          			Peningkatan kualitas Sumber Daya Manusia (SMD).
			          		</li>
			          		<li>
			          			Penataan dan pengembangan infrastuktur dasar.
			          		</li>
			          		<li>
			          			Reformasi birokrasi.
			          		</li>
			          		<li>
			          			Penegakan hukum dan Hak Asasi Manusia (HAM).
			          		</li>
			          	</ol>			            
			          </ListItem>
			        </List>
			      </Collapse>
			    </List>
			    <div className={classes.partaiWrap}>
			    	<Avatar alt="PDIP" src={PartaiPDIP} />
			    	<Avatar alt="Nasdem" src={PartaiNasdem} />
			    	<Avatar alt="Pan" src={PartaiPan} />
			    	<Avatar alt="Hanura" src={PartaiHanura} />
			    	<Avatar alt="Demokrat" src={PartaiDemokrat} />
			    	<Avatar alt="Gerindra" src={PartaiGerindra} />
			    	<Avatar alt="Pkpi" src={PartaiPkpi} />
			    </div>
		      </CardContent>
		    </Collapse>
		  </Card>
       	</Grid>	
        <Grid item xs={12} md={2} sm={2} xl={2} lg={2}>
	      <p className={PaslonClass.fontVS}>VS</p>
        </Grid>
        <Grid item xs={12} md={5} sm={5} xl={5} lg={5}>
		  <Card className={classes.rootCard}>
		    <CardHeader
		      avatar={
		        <Avatar aria-label="recipe" className={classes.avatarKobul}>
		          2
		        </Avatar>
		      }
		      title="PAKET KOBUL"
		      subheader="Calon Bupati Umbu Lili Pekuwali,S.T, M.T & Calon Wakil Bupati Ir. Yohanis Hiwa Wunu,M.Si.	"
		    /> 
		    <h2>COBLOS NO. 2 - KOBUL</h2>
		    <CardMedia
		      className={classes.media}
		      image={KobulImg}
		      title="Kobul"
		    />
		    <CardContent>
		      <Typography variant="body2" color="textSecondary" component="p">
		        "MELAYANI DENGAN HATI"
		      </Typography>
		    </CardContent>
		    <CardActions disableSpacing>
		      <IconButton aria-label="share">
		        <ShareIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickShare} />
			      <Menu
			        id="simple-menu"
			        anchorEl={anchorEl}
			        keepMounted
			        open={Boolean(anchorEl)}
			        onClose={handleCloseShare}
			        className={classes.MenuShare}
			      >
			        <MenuItem><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https://sumba-timur-2k20-pilkada-tracking.netlify.app/" className="fb-xfbml-parse-ignore"><FacebookIcon /></a></MenuItem>
			        <MenuItem><a target="_blank" rel="noopener noreferrer" href="whatsapp://send?text=Saya Pilih *Kobul*, Ayo Pantau Pilkada Sumba Timur Disini => https://sumba-timur-2k20-pilkada-tracking.netlify.app/" data-action="share/whatsapp/share"><WhatsAppIcon /></a></MenuItem>
			      </Menu>
		      </IconButton>
		      <IconButton
		        className={clsx(classes.expand, {
		          [classes.expandOpen]: expandedKobul,
		        })}
		        onClick={handleExpandClickKobul}
		        aria-expanded={expandedKobul}
		        aria-label="show more"
		      >
		        <ExpandMoreIcon />
		      </IconButton>
		    </CardActions>
		    <Collapse in={expandedKobul} timeout="auto" unmountOnExit>
		      <CardContent>
			    <List
			      component="nav"
			      aria-labelledby="nested-list-subheader"
			      subheader={
			        <ListSubheader component="div" id="nested-list-subheader">
			          Info Lebih Lanjut
			        </ListSubheader>
			      }
			    >
			      <ListItem button onClick={() => handleKobulInfoClick('visi')}>
			        <ListItemIcon>
			          <HighlightOffIcon />
			        </ListItemIcon>
			        <ListItemText primary="VISI" />
			        {openKobulInfo.visi ? <ExpandLess /> : <ExpandMore />}
			      </ListItem>
			      <Collapse in={openKobulInfo.visi} timeout="auto" unmountOnExit>
			        <List component="div" disablePadding>
			          <ListItem button className={classes.nested}>
			          	<Typography paragraph>
			          		Bersama Rakyat Mewujudkan Sumba Timur EMAS(Mandiri, Adil Dan Sejahtera) Berdasarkan Keunggulan Lokal Secara Berkelanjutan
			          	</Typography>
			          </ListItem>
			        </List>
			      </Collapse>

			      <ListItem button onClick={() => handleKobulInfoClick('misi')}>
			        <ListItemIcon>
			          <ListIcon />
			        </ListItemIcon>
			        <ListItemText primary="MISI" />
			        {openKobulInfo.misi ? <ExpandLess /> : <ExpandMore />}
			      </ListItem>
			      <Collapse in={openKobulInfo.misi} timeout="auto" unmountOnExit>
			        <List component="div" disablePadding>
			          <ListItem button className={classes.nested}>
			          	<ol type="1">
			          		<li>
			          			Transformasi ekonomi Masyarakat yang berkualitas dan berdaya saing
			          		</li>
			          		<li>
			          			Transformasi Sumber Daya Manusia yang sehat dan cerdas
			          		</li>
			          		<li>
			          			Transformasi pembangunan infrastuktur yang berkualitas merata dan ramah lingkungan
			          		</li>
			          		<li>
			          			Transformasi Birokrasi merata yang profesional, efektif, demokratis, dan terpercaya
			          		</li>
			          		<li>
			          			Transformasi pengelolaan pariwisata secara fokus dan terintegrasi
			          		</li>
			          	</ol>			            
			          </ListItem>
			        </List>
			      </Collapse>
			    </List>
			    <div className={classes.partaiWrap}>
			    	<Avatar alt="Golkar" src={PartaiGolkar} />
			    	<Avatar alt="PKB" src={PartaiPkb} />
			    	<Avatar alt="PSI" src={PartaiPsi} />
			    </div>
		      </CardContent>
		    </Collapse>
		  </Card>
       	</Grid>	
      </Grid>				
    </Container>
    </center>
  )
}

export default Paslon;


