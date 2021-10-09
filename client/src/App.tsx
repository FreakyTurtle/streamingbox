import { RotateRightTwoTone } from "@mui/icons-material";
import { AppBar, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, styled, Toolbar, Typography } from "@mui/material";
import { PowerSettingsNew } from "@mui/icons-material";
import React, { useState } from "react";
import { MainView } from "./components/MainView";
import { SearchBox } from "./components/SearchBox";
import axios from "axios";

const Plus = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '0.8em',
  fontWeight: 800,
  display: 'inline-block',
  position: 'relative',
  left: '-2px',
  top: '-18px'
}));

const TV = styled('span')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontStyle: "italic",
  fontSize: '1.3em',
  fontWeight: 800
}));

const Guest = styled('span')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontStyle: "italic",
  fontWeight: 800
}));

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [rebootOpen, setRebootOpen] = useState(false)

  return (
    <main>
      <AppBar color="primary" enableColorOnDark elevation={0} >
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, letterSpacing: 2 }}>
            <Guest>guest</Guest><TV>tv</TV><Plus>+</Plus>
          </Typography>
          <SearchBox value={searchTerm} onChange={({target}) => setSearchTerm(target.value)} />
          <IconButton onClick={() => setRebootOpen(true)} >
            <PowerSettingsNew />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{marginTop: 18, marginBottom: 18}}>
          <MainView searchTerm={searchTerm} />
      </Container>

      <Dialog
        open={rebootOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Reboot Device
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you would like to restart the device? Rebooting can take several minutes.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRebootOpen(false)} color="secondary">Cancel</Button>
          <Button onClick={() => {
            axios.get("http://localhost:3000/reboot").then((response) => setRebootOpen(false))
          }} autoFocus>
            Restart
          </Button>
        </DialogActions>
      </Dialog>

    </main>
  );
};
export default App;
                                                                                                         