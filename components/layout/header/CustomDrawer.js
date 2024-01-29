import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useBottomBarLinks from './links/BottomBarLinks';

export default function CustomDrawer({ open, anchor, toggleDrawer }) {
  const links = useBottomBarLinks();
  return (
    <Drawer anchor={anchor} open={open} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer}>
        <List>
          {links.map((link, index) => (
            <ListItem key={link.name} disablePadding>
              <ListItemButton>
                <ListItemText primary={link.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
