import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { ContactMail } from '@mui/icons-material';
import { Link } from 'react-scroll';


const navItems = [
   {
      route: "Home",
      pathName: "banner"
   },
   {
      route: "About Me",
      pathName: "about"
   },
   {
      route: "Skill",
      pathName: "skill"
   },
   {
      route: "Experience",
      pathName: "experience"
   },
   {
      route: "Projects",
      pathName: "project"
   },
   {
      route: "Education",
      pathName: "education"
   },
]

const Navbar = () => {
   const [anchorElNav, setAnchorElNav] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };



   // const [menu, setMenu] = React.useState()
   // const isMenu = navItems.map(item => item.pathName === menu)
   // console.log(isMenu)


   // const handleSetActive = (to) => {
   //    setMenu(to)
   // }

   return (
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', zIndex: 5, }}>
         <Container maxWidth="">
            <Toolbar disableGutters>

               {/* Small Screen Navitem */}
               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{ display: { xs: 'block', md: 'none' } }}
                  >
                     {navItems.map((item) => (
                        <Link key={item?.route} to={item?.pathName} textDecoration="none" className='flex flex-col items-start '>
                           <Button key={item.route} textDecoration="none" sx={{ color: 'black', textDecoration: 'none', textUnderlineOffset: '.3rem' }} onClick={handleCloseNavMenu}>
                              {item.route}
                           </Button>
                        </Link>
                     ))}
                  </Menu>
               </Box>

               {/* small Screen logo */}
               <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                     mr: 2,
                     display: { xs: 'flex', md: 'none' },
                     flexGrow: 1,
                     fontFamily: 'monospace',
                     fontWeight: 700,
                     letterSpacing: '.1rem',
                     color: 'yellow',
                     textDecoration: 'none',
                  }}
               >
                  MSP <span className='pl-1 text-green-400'>Sohan</span>
               </Typography>


               {/* large screen logo */}
               <Typography
                  variant="h4"
                  noWrap
                  className='min-w-max'
                  component="a"
                  href="#home"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, color: 'yellow', textDecoration: 'none', }}>
                  MSP <span className='pl-2 text-green-400'>Sohan</span>
               </Typography>

               {/* large screen navitems */}
               <Box className="w-full text-center flex items-center gap-5 text-[20px] cursor-pointer font-semibold" sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                  {navItems.map((item) => (
                     <Link
                        key={item.route}
                        to={item.pathName}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                     // onSetActive={handleSetActive}
                     >
                        {item.route}
                        {/* <button
                           key={item.route}
                           onClick={handleCloseNavMenu}
                        // className={`{isMenu[5] ? "underline " : ''} capitalize flex justify-center items-center`}
                        >
                           
                        </button> */}
                     </Link>
                  ))}
               </Box>
               {/* contact */}
               {/* <ThemeToggle /> */}
               <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', } }}>
                  <Link to="contact"
                     activeClass="active"
                     spy={true}
                     smooth={true}
                     duration={500}>
                     Contact
                  </Link>
               </Box>
               {/* small device */}
               <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                  <Link to="contact"
                     spy={true}
                     smooth={true}
                     duration={500}>
                     <ContactMail />
                  </Link>
               </Box>

            </Toolbar>
         </Container>
      </AppBar>
   );
}
export default Navbar;
