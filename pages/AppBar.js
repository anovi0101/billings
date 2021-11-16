import {AppBar, Toolbar, IconButton, Typography} from "@mui/material";
import {ArrowBack, ContactSupport} from "@mui/icons-material";

export default function AppBarComponent(){
return(
<AppBar
        position="sticky"
        sx={{
          boxShadow: "0px 0px 0px 0px",
          //height: "5rem",
          background: "linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)",
          color: "#fff",
          padding: "0.75rem 0 0.5rem"
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "700" }}
          >
            Billing
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: -1 }}
          >
            <ContactSupport />
          </IconButton>
        </Toolbar>
      </AppBar>

)}