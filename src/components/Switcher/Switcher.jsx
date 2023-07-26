import React, {useState}  from 'react'
import UseDarkSide from '../hook/UseDarkSide.js'
// import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 17,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 1,
    '&.Mui-checked': {
      transform: 'translateX(11px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 15,
    height: 15,
    borderRadius: 10,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const Switcher = () => {
    const [colorTheme , setTheme] = UseDarkSide();
    const [darkSide,setDarkSide] =useState(colorTheme==='Light'? true : false);

    const toggleDarkMode=(checked)=>{
        setTheme(colorTheme);
        setDarkSide(checked.target.checked);
    }
  return (
    <div>
        {/* <DarkModeSwitch
        checked ={darkSide}
        size={26}
        /> */}
        <Stack direction="row" spacing={1} alignItems="center" >
        <AntSwitch checked={darkSide} onChange={toggleDarkMode}
         inputProps={{ 'aria-label': 'ant design' }} />
      </Stack>
        </div>
        
        
  )
}

export default Switcher