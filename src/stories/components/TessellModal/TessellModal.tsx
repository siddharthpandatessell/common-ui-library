/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Button,
  Box,
  Typography
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

const DialogContentDefault = () => (<React.Fragment>
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
</React.Fragment>);

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

const TessellModal = (props) => {
  const {
    customStyles = {},
    renderFunctions,
    maxWidth,
    open,
    onClose,
    ...restProps
  } = props;

  return (
    <>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          maxWidth={maxWidth}
          {...restProps}
        >
          <DialogTitle sx={customStyles?.title}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack>{renderFunctions?.title}</Stack>
              {/* <Stack
            sx={{
              cursor: 'pointer',
              border: 0,
              backgroundColor: '#F8F8F8',
            }}
            component="button"
            variant="contained"
          >
          </Stack> */}
              {/* <Fab
            // size='small'
            variant="circular"
            // size="small"
            mini
            onClick={onClose}
          >
            <Close
              sx={{
                width: '10px',
                height: '10px',
                maxWidth: '10px',
                maxHeight: '10px',
              }}
              color="#666666"
            />
          </Fab> */}
            </Stack>
          </DialogTitle>
          <DialogContent sx={customStyles?.content}>
            {renderFunctions?.content}
          </DialogContent>
          <DialogActions spacing={1} sx={customStyles?.actions}>
            {renderFunctions?.actions}
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default TessellModal;

TessellModal.defaultProps = {
  customStyles: {},
  renderFunctions: renderFunctions,
  minWidth: "lg",
  open: true,
  onClose: () => {},
};
