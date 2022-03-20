

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { createTheme, ThemeProvider } from "@mui/material/styles";


import Typography from '@mui/material/Typography';

const themeOptions = {
  typography: {
    h6: {
      fontWeight: 1000,
      color: "#00c853",
      fontSize: "2rem",
    },
  },
};

const themes = createTheme(themeOptions);

function BasicMuiTheme() {
  console.log(themes);

  return (
    <ThemeProvider theme={themes}>
      <Stack direction="row" spacing={2}>
        <Typography variant="h6" component="h6">
          h6. Heading
        </Typography>
        ;<Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </Stack>
    </ThemeProvider>
  );
}

export default BasicMuiTheme;
