import {
  Button,
  Box,
  Typography,
} from "@mui/material";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// import Close from '@mui/icons-material/Close';
import React from "react";
import TessellButton from "../TessellButton/TessellButton";

const DialogTitleDefault = () => <h6>Test Modal</h6>;
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const DialogContentDefault = () => (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const DialogActionsDefault = () => (
  <>
    <TessellButton
      label="Open"
      color="primary"
      size="small"
      variant="contained"
    ></TessellButton>
    <TessellButton
      label="Close"
      color="primary"
      size="small"
      variant="contained"
    ></TessellButton>
  </>
);

const renderFunctions = {
  title: DialogTitleDefault(),
  content: DialogContentDefault(),
  actions: DialogActionsDefault(),
};

export default renderFunctions;
