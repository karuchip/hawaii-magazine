import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import MapIcon from '@mui/icons-material/Map';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        sx={{backgroundColor:"transparent", mt:"10px", padding:"0"}}
      >
        <label className='WidgetsIcon'>
          <MenuIcon sx={{fontSize:"40px"}}/>
          {/* <p>メニュー</p> */}
        </label>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disableRipple>
          ログインしていません
        </MenuItem>
        <MenuItem disableRipple>
          <Link href="/user/login">
            <LoginIcon />
            ログイン
          </Link>
        </MenuItem>
        <MenuItem disableRipple>
          <Link href="/user/register">
            <HowToRegIcon />
            新規会員登録
          </Link>
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem disableRipple>
          <Link href="/">
            <HomeIcon />
            ホーム
          </Link>
        </MenuItem>

        <MenuItem disableRipple>
          <Link href="/post/readAll">
            <ViewCarouselIcon />
            記事一覧
          </Link>
        </MenuItem>

        <MenuItem disableRipple>
          <Link href="/map">
            <MapIcon />
            地図から探す
          </Link>
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={handleClose} disableRipple>
          メニューを閉じる
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
