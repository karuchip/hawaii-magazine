import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

type Props = {
  loginUserName: string,
  loginUserId: string
}

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

export default function CustomizedMenus({loginUserName, loginUserId}:Props) {
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
        sx={{backgroundColor:"transparent", mt:"10px"}}
      >
        <WidgetsIcon  className='WidgetsIcon'/>
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
          {loginUserName} さん
        </MenuItem>
        <MenuItem disableRipple>
          <Link href="/post/create">
            <EditIcon />
            投稿する
          </Link>
        </MenuItem>
        <MenuItem disableRipple>
          <Link href={`/readmypage/${loginUserId}`}>
            <FileCopyIcon />
            マイページ
          </Link>
        </MenuItem>
        <MenuItem disableRipple>
          <Link href={`/user/setting/${loginUserId}`} className="logoutBtn">
            <SettingsIcon />
            設定
          </Link>
        </MenuItem>
        <MenuItem disableRipple>
          <Link href="/user/logout" className="logoutBtn">
            <LogoutIcon />
            ログアウト
          </Link>
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem disableRipple>
          <Link href="/">
            <DynamicFeedIcon />
            記事一覧
          </Link>
        </MenuItem>

        <MenuItem disableRipple>
          <Link href="/hawaiiAbout/about">
            <InfoOutlineIcon />
            このアプリについて
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
