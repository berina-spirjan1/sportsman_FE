import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { COOKIE_AUTHENTICATION_FE } from 'src/constants/keys/browser'

import { pages, settingsForGuestUser, settingsForOwner, settingsForPlayer } from "./headerHelpers";
import NotificationsDrodpdown from './NotificationsSection'
import useStyles from './styles'

const Header = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const [anchorSideMenu, setAnchorSideMenu] = useState(null)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const [anchorUserMenu, setAnchorUserMenu] = useState(null)

  const handleOpenSideMenu = (event) => {
    setAnchorSideMenu(event.currentTarget)
    setOpenSideMenu(true)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorUserMenu(event.currentTarget)
    setOpenUserMenu(true)
  }

  const handleCloseSideMenu = () => {
    setAnchorSideMenu(null)
    setOpenSideMenu(false)
  }

  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null)
    setOpenUserMenu(false)
  }

  const userData = Cookies.get(COOKIE_AUTHENTICATION_FE)
  const parsedUserData = userData && JSON.parse(userData)
  const isUserLogged = userData && !!parsedUserData.id

  const imageSrc = isUserLogged
    ? '/images/defaultUserImage.jpg'
    : '/images/registerUser.png'

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={'/images/logo.svg'}
            alt="Logo"
            className={classes.logo}
            onClick={() => navigate('/')}
            aria-hidden="true"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SPORTISTA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenSideMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorSideMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={openSideMenu}
              onClose={handleCloseSideMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseSideMenu}>
                  <Typography
                    textAlign="center"
                    component="a"
                    href={page.href}
                    onClick={page.onClick}
                    className={classes.item}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img
            src={'/images/logo.svg'}
            alt="Logo"
            className={classes.logoMobile}
            onClick={() => navigate('/')}
            aria-hidden="true"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            className={classes.logoTitleMobile}
          >
            SPORTISTA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseSideMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component="a"
                href={page.href}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {isUserLogged && <NotificationsDrodpdown />}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open user menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={imageSrc} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorUserMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openUserMenu}
              onClose={handleCloseUserMenu}
            >
              {isUserLogged && parsedUserData.user_type === 1
                ? settingsForPlayer.map((item) => (
                    <MenuItem key={item.name} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        component="a"
                        href={item.href}
                        onClick={item.onClick}
                        className={classes.item}
                      >
                        {item.name}
                      </Typography>
                    </MenuItem>
                  ))
                : isUserLogged && parsedUserData.user_type === 2 ? settingsForOwner.map((item) => (
                  <MenuItem key={item.name} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      component="a"
                      href={item.href}
                      onClick={item.onClick}
                      className={classes.item}
                    >
                      {item.name}
                    </Typography>
                  </MenuItem>
                )) : settingsForGuestUser.map((item) => (
                    <MenuItem key={item.name} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        component="a"
                        href={item.href}
                        onClick={item.onClick}
                        className={classes.item}
                      >
                        {item.name}
                      </Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
