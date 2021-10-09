import { RotateRightTwoTone } from "@mui/icons-material";
import { AppBar, Container, styled, Toolbar, Typography } from "@mui/material";
import { keyframes } from "@mui/styled-engine";
import React, { useState } from "react";
import { MainView } from "./components/MainView";
import { SearchBox } from "./components/SearchBox";

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

  return (
    <main>
      <AppBar color="primary" enableColorOnDark elevation={0} >
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, letterSpacing: 2 }}>
            <Guest>guest</Guest><TV>tv</TV><Plus>+</Plus>
          </Typography>
          <SearchBox value={searchTerm} onChange={({target}) => setSearchTerm(target.value)} />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{marginTop: 18, marginBottom: 18}}>
          <MainView searchTerm={searchTerm} />
      </Container>

    </main>
  );
};
export default App;
                                                                                                         