import { ChevronLeft, ChevronRight, Home as HomeIcon, Menu } from "@mui/icons-material";
import { AppBar as MuiAppBar,AppBarProps as MuiAppBarProps, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, styled, Toolbar, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react"; 
import { Link, Outlet } from "react-router-dom";

import banner from "../images/banner.png";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({theme,open}) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0,1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

interface AppBarProps extends MuiAppBarProps{
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })
  })
}))

export default function TopBar(){
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  
  function handleOpen(){
    setOpen(true);
  }

  function handleClose(){
    setOpen(false);
  }

  return(
    <Box sx={{display: 'flex'}}>
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            onClick={(handleOpen)}
            color="inherit"
            aria-label="menu"
            sx = {{mr: 2, ...(open && {display: 'none'})}}
          >
            <Menu/>
          </IconButton>
          <Link to='/'>
            <IconButton
              size="large"
              edge="start"
            >
              <HomeIcon sx={{color:"#ffffff"}}/>
            </IconButton>
          </Link>
          <Link style={
              {
                textAlign: "center",
                display:"block",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
              to='/'>
            <img
              src={banner}
              alt="DevaSolutions.Net banner"
              width="25%"/>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleClose}>
            {theme.direction === 'ltr'? <ChevronLeft/> : <ChevronRight/>}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <List sx={{ fontFamily: `'Ubuntu', Arial, Helvetica, sans-serif` }}>
          {['Ordenes', 'Aplicaciones', 'Reportes'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <Link style={{textDecoration: 'none', color: 'inherit' }} to={text.toLowerCase()}>
                  <ListItemText sx={{fontSize: '2rem'}} primary={text}/>
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main  open={open}>
        <DrawerHeader/>
        <Outlet/>
      </Main>
    </Box>
  )
}