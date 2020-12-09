import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Img from '../static/patung-kuda-waingapu.jpg'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import HeaderClasses from './Header.module.css'
import DataSource from '../DataSource/data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  background: {
    'background': 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,52,89,1) 0%, rgba(0,168,232,1) 90% )'
  }
}));

const Header = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
       <div
        className={clsx(classes.list, classes.background, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {[{title: 'Home', link: '/'}, {title: 'Tentang', link: '/tentang'}].map((nav, index) => (
            <ListItem button key={nav.title} component={Link} to={nav.link}>
              <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <InfoIcon />}</ListItemIcon>
              <ListItemText primary={nav.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
  );


  return (
     <div>
      <AppBar className={classes.background} position="fixed">
        <Toolbar>
          <IconButton edge="start" onClick={toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        <Typography variant="h6" className={classes.title, HeaderClasses.textHidden} color="inherit">
          <Link to="/" style={{textDecoration: 'none', color: 'white', display:'hidden'}}>Pilkada Sumba Timur 2k20 Tracking</Link>
        </Typography>
          <p className={HeaderClasses.blink}>
            Terakhir Kali Update: {DataSource.terkahirUpdate.date}
          </p>
          <Avatar src={Img}/>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  )
}

export default Header;
