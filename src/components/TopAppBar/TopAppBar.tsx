import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../static/logo.png';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logo: {
      marginRight: theme.spacing(2),
      maxWidth: 30
    },
    title: {
      flexGrow: 1,
      textAlign: 'center' 
    },
  }),
);

export default function TopAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <img src={logo} alt="logo" className={classes.logo}></img>
            <Typography variant="h6" className={classes.title}>
                My Products 
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}