import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { themeOptions } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme(themeOptions)}>
      <CssBaseline />
        <div 
          style={{
            minWidth: "100%",
            minHeight: "100vh"
          }}
        > 
          <App />
        </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
