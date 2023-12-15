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
import { Link as ScrollLink } from 'react-scroll';
import { Tooltip, styled, tooltipClasses } from '@mui/material';
import { useState } from 'react';
import { FaHome, FaPlus, FaTimes, FaUserAlt, FaUserGraduate } from 'react-icons/fa';
import { DiCodeBadge } from "react-icons/di";
import { BsYinYang } from "react-icons/bs";
import { SiCodeproject } from "react-icons/si";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const navItems = [
   {
      route: "Home",
      pathName: "banner",
      Icon: <FaHome className='text-xl' />
   },
   {
      route: "About Me",
      pathName: "about",
      Icon: <FaUserAlt className='text-xl' />
   },
   {
      route: "Skill",
      pathName: "skill",
      Icon: <DiCodeBadge className='text-xl' />
   },
   {
      route: "Experience",
      pathName: "experience",
      Icon: <BsYinYang className='text-xl' />
   },
   {
      route: "Projects",
      pathName: "project",
      Icon: <SiCodeproject className='text-xl' />
   },
   {
      route: "Education",
      pathName: "education",
      Icon: <FaUserGraduate className='text-xl' />
   },
   {
      route: "Contact",
      pathName: "contact",
      Icon: <MdOutlineMarkEmailUnread className='text-xl' />
   },
]

const Icon = FaPlus

const Navbar = () => {
   const [anchorElNav, setAnchorElNav] = useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };




   const LightTooltip = styled(({ className, ...props }) => (
      <Tooltip {...props} classes={{ popper: className }} />
   ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
         backgroundColor: theme.palette.common.white,
         color: 'rgba(0, 0, 0, 0.87)',
         boxShadow: theme.shadows[1],
         fontSize: 16,
      },
   }));

   // Theme
   // const [theme, setTheme] = useState("");
   // useEffect(() => {
   //    if (theme === "dark") {
   //       document.documentElement.classList.add("dark");
   //    } else {
   //       document.documentElement.classList.remove("dark");
   //    }
   // }, [theme]);

   // const handleThemeSwitch = () => {
   //    setTheme(theme === "dark" ? "light" : "dark");
   // };

   const [hover, setHover] = useState(false)

   return (
      <>
         <AppBar position="fixed" sx={{ backgroundColor: 'transparent', zIndex: 5 }} className=''>
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
                           <ScrollLink key={item?.route} to={item?.pathName} textDecoration="none" className='flex flex-col items-start '>
                              <Button key={item.route} textDecoration="none" sx={{ color: 'black', textDecoration: 'none', textUnderlineOffset: '.3rem' }} onClick={handleCloseNavMenu}>
                                 {item.route}
                              </Button>
                           </ScrollLink>
                        ))}
                     </Menu>
                  </Box>

                  {/* small Screen logo */}
                  <LightTooltip title="Sohan Perves" placement='bottom'>
                     <Typography
                        variant="h5"
                        noWrap
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
                        <img src="https://i.imgur.com/wwJfU9s.jpg" alt="" className='w-12 h-12 rounded-full' />
                     </Typography>
                  </LightTooltip>


                  {/* large screen logo */}
                  <LightTooltip title="Sohan Perves" placement='right'>
                     <Typography variant="h4" noWrap className='min-w-max' component="a" href="#home"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, color: 'yellow', textDecoration: 'none', }}>
                        <img src="https://i.imgur.com/wwJfU9s.jpg" alt="" className='w-14 h-14 rounded-full' />
                     </Typography>
                  </LightTooltip>

                  {/* large screen navitems */}
                  <Box className="w-full text-center flex items-center gap-5 text-[20px] cursor-pointer font-semibold" sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                     {navItems.slice(0, 6).map((item) => (
                        <ScrollLink
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
                        </ScrollLink>
                     ))}
                  </Box>
                  {/* contact */}
                  {/* <ThemeToggle /> */}
                  <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', cursor: 'pointer' } }}>
                     <ScrollLink to="contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        className="font-semibold text-[20px]"
                        duration={500}>

                        Contact
                     </ScrollLink>
                  </Box>
                  {/* small device */}
                  <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none', color: 'white' } }}>
                     <ScrollLink to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <IconButton sx={{ color: 'white', backgroundColor: '#000f01', p: '1' }}>
                           <ContactMail />
                        </IconButton>
                     </ScrollLink>
                  </Box>

               </Toolbar>
            </Container>
         </AppBar>
         <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="z-50 fixed right-1 md:right-5 bottom-2">
            {
               hover ? <div className='text-white flex flex-col gap-1 duration-500 ease-in-out transition'>
                  {
                     navItems?.map(nav =>
                        <ScrollLink key={nav?.route} to={nav?.pathName} title={nav?.route} placement="top" className='p-3 bn10 bg-gray-500 rounded-full tooltip cursor-pointer'>
                           {nav.Icon} <span className="tooltiptext">{nav?.route}</span>
                        </ScrollLink>
                     )
                  }
                  <p to="banner" className='p-3 bn10 bg-gray-500 rounded-full'><FaTimes className='text-xl' /></p>
               </div> : <p to="banner" className=' p-3 bg-gray-500 rounded-full'><Icon className='text-xl' /></p>
            }
         </div>
      </>
   );
}
export default Navbar;
