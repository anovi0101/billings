import {
  Divider,
  Box,
  Grid,
  Container,
  Typography,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  Drawer
} from "@mui/material";
import {
  Check,
  CalendarToday,
  HomeOutlined,
  AccountBalanceWalletOutlined,
  AccountCircleOutlined,
  ContactSupportOutlined,
  PowerSettingsNewOutlined
} from "@mui/icons-material";

import Invoices from "./Invoices";
import AppBarComponent from "./AppBar";
import * as React from 'react';

const invoiceNumbers = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8},
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
];

const drawerWidth = 240;

export default function Home(props) {
  const {window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button key="HOME">
          <ListItemIcon>
            <HomeOutlined sx={{color: "#32424E"}} />
          </ListItemIcon>
          <Typography variant="subtitle2" sx={{fontWeight: "700", color: "#32424E"}}>HOME</Typography>
        </ListItem>
        <ListItem button key="BILLING">
          <ListItemIcon>
            <AccountBalanceWalletOutlined sx={{color: "#32424E"}} />
          </ListItemIcon>
          <Typography variant="subtitle2" sx={{fontWeight: "700", color: "#32424E"}}>BILLING</Typography>
        </ListItem>
        <ListItem button key="ACCOUNT SETTINGS">
          <ListItemIcon>
            <AccountCircleOutlined sx={{color: "#32424E"}} />
          </ListItemIcon>
          <Typography variant="subtitle2" sx={{fontWeight: "700", color: "#32424E"}}>ACCOUNT SETTINGS</Typography>
        </ListItem>
        <ListItem button key="HELP & FAQ">
          <ListItemIcon>
            <ContactSupportOutlined sx={{color: "#32424E"}} />
          </ListItemIcon>
          <Typography variant="subtitle2" sx={{fontWeight: "700", color: "#32424E"}}>HELP & FAQ</Typography>
        </ListItem>
        <ListItem button key="LOG OUT">
          <ListItemIcon>
            <PowerSettingsNewOutlined sx={{color: "#32424E"}} />
          </ListItemIcon>
          <Typography variant="subtitle2" sx={{fontWeight: "700", color: "#32424E"}}>LOG OUT</Typography>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Container disableGutters sx={{ flexGrow: 1, background: "#F2F5F8"}}>
      <AppBarComponent sx={{width: {sm: `calc(100% - ${drawerWidth}px)`},
          ml: {sm: `${drawerWidth}px`}}} />
      <Box component = "nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm:0}}}>
      <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{
          color: "#fff",
          background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
          textAlign: "center",
          height: "290px",
          display: "grid",
        }}
      >
        <Typography variant="subtitle2">Account Balance</Typography>
        <Typography variant="h2">49,99{"\u20AC"}</Typography>
        <Grid
          container
          sx={{
            justifyContent: "space-evenly",
            p: 1,
            padding: "2rem 1rem 1rem",
          }}
        >
          <Grid item>
            <Typography>
              <Check />
            </Typography>
            <Typography variant="subtitle2">Overdue balance</Typography>
            <Typography variant="h5">0{"\u20AC"}</Typography>
          </Grid>

          <Grid item>
            <Divider
              light
              orientation="vertical"
              sx={{ borderColor: "white" }}
            />
          </Grid>

          <Grid item>
            <Typography>
              <CalendarToday />
            </Typography>
            <Typography variant="subtitle2">Due on 21/10/2020</Typography>
            <Typography variant="h5">49,99{"\u20AC"}</Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle2">
          Next invoice will be issued on 21/11/2020.
        </Typography>
      </Box>
      <Invoices invoicesIds={invoiceNumbers}/>
    </Container>
  );
}
