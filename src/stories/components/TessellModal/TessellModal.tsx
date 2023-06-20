/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Dialog, DialogActions, DialogContent, DialogTitle, Stack, Button } from '@mui/material';
// import Close from '@mui/icons-material/Close';
import React from 'react';

const DialogTitleDefault = () => <h4>Test Modal</h4>;
const DialogContentDefault = () => (
       <p>Hello</p>
    );
const DialogActionsDefault = () => (
        <Button color="primary" size="small" variant="contained">
            Close
        </Button>
    );

const renderFunctions = {
        title: DialogTitleDefault(),
        content: DialogContentDefault(),
        actions: DialogActionsDefault(),
    };

const TessellModal = (props) => {
  const { customStyles = {}, renderFunctions, maxWidth, open, onClose, ...restProps } = props;

  return (
    <>
      {open && (
        <Dialog open={open} onClose={onClose} maxWidth={maxWidth} {...restProps}>
          <DialogTitle sx={customStyles?.title}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
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
          <DialogContent sx={customStyles?.content}>{renderFunctions?.content}</DialogContent>
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
  maxWidth: 'md', 
  open: true, 
  onClose: () => {}
};



