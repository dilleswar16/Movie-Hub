import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TvIcon from '@material-ui/icons/Tv';
import { Search, Whatshot } from '@material-ui/icons';
import MovieIcon from '@material-ui/icons/Movie';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
    backgroundColor: '#49767fb5',
    zIndex: 100
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(value === 0)
      navigate('/');
    else if(value === 1)
      navigate('/movies');
    else if(value === 2)
      navigate('/series');
    else if(value === 3)
      navigate('/search');
  }, [value,navigate])
  

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: 'white' }} 
        label="Trending" 
        icon={<Whatshot />} />
      <BottomNavigationAction
        style={{ color: 'white' }} 
        label="Movies" 
        icon={<MovieIcon />} />
      <BottomNavigationAction
        style={{ color: 'white' }} 
        label="TV" 
        icon={<TvIcon />} />
      <BottomNavigationAction
        style={{ color: 'white' }} 
        label="Search" 
        icon={<Search />} />

    </BottomNavigation>

  );
}
