import {
  Box,
  List,
  Toolbar,
  Grid,
  Divider,
  Drawer,
  Typography,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import {
  HomeOutlined,
  AccountBalanceWalletOutlined,
  AccountCircleOutlined,
  ContactSupportOutlined,
  PowerSettingsNewOutlined,
} from "@mui/icons-material";

export default function Sidebar(props) {
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: props.width },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.width,
            height: `calc(100vh - 44px)`,
          },
        }}
        open
      >
        <div>
          <Toolbar sx={{ color: "#fff", backgroundColor: "#014656" }}>
            <Grid container>
              <Grid item>
                <Typography variant="subtitle1">Alex Garcia</Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  alex.garcia@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
          <Divider />
          <List>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlined sx={{ color: "#32424E" }} />
              </ListItemIcon>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "700", color: "#32424E" }}
              >
                HOME
              </Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceWalletOutlined sx={{ color: "#32424E" }} />
              </ListItemIcon>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "700", color: "#32424E" }}
              >
                BILLING
              </Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleOutlined sx={{ color: "#32424E" }} />
              </ListItemIcon>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "700", color: "#32424E" }}
              >
                ACCOUNT SETTINGS
              </Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ContactSupportOutlined sx={{ color: "#32424E" }} />
              </ListItemIcon>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "700", color: "#32424E" }}
              >
                HELP &amp; FAQ
              </Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PowerSettingsNewOutlined sx={{ color: "#32424E" }} />
              </ListItemIcon>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "700", color: "#32424E" }}
              >
                LOG OUT
              </Typography>
            </ListItemButton>
          </List>
        </div>
      </Drawer>
    </Box>
  );
}
