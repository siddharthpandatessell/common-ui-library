// src/themes.js

import { createTheme } from '@mui/material';
import { blueGrey, cyan, pink } from '@mui/material/colors';
import { styles } from './style-templates'; 
import { blue } from '@mui/material/colors';

const tessellBlue = JSON.parse(JSON.stringify(blue));

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: cyan['A200'],
        },
        secondary: {
            main: pink['A400'],
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: pink['A200'],
        },
        secondary: {
            main: cyan['A400'],
        },
        background: {
            default: blueGrey['800'],
            paper: blueGrey['700'],
        },
    },
});

export const tessellTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '20px',
                    transition:
                        'background-color 200ms linear, box-shadow 200ms linear, border-color 200ms linear',
                },
                text: {
                    '&:hover': {
                        color: `${styles.color.hover} !important`,
                        background: 'none !important',
                        border: 'none !important',
                    },
                },
                contained: {
                    '&:hover': {
                        color: 'white',
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 10px rgb(0 0 0 / 10%) !important',
                        backgroundColor: `${styles.color.hover} !important`,
                        border: 'none !important',
                    },
                },
                outlined: {
                    '&:hover': {
                        color: 'white',
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 10px rgb(0 0 0 / 10%) !important',
                        backgroundColor: `${styles.color.hover} !important`,
                        border: 'none !important',
                    },
                },
            },
        },
        MuiFab: {
            styleOverrides: {
                circular: {
                    '&:hover': {
                        color: 'white',
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 10px rgb(0 0 0 / 10%) !important',
                        backgroundColor: `${styles.color.hover} !important`,
                        border: 'none !important',
                    },
                },
            },
        },
        MuiLoadingButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '20px',
                    transition:
                        'background-color 200ms linear, box-shadow 200ms linear, border-color 200ms linear',
                },
                text: {
                    '&:hover': {
                        color: `${styles.color.hover} !important`,
                        background: 'none !important',
                        border: 'none !important',
                    },
                },
                contained: {
                    '&:hover': {
                        color: 'white',
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 10px rgb(0 0 0 / 10%) !important',
                        backgroundColor: `${styles.color.hover} !important`,
                        border: 'none !important',
                    },
                },
                outlined: {
                    '&:hover': {
                        color: 'white',
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 10px rgb(0 0 0 / 10%) !important',
                        backgroundColor: `${styles.color.hover} !important`,
                        border: 'none !important',
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    transition:
                        'background-color 200ms linear, box-shadow 200ms linear',
                    '&:hover': {
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 10px rgb(0 0 0 / 10%) !important',
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    borderColor: '#c4c4c4',
                    textTransform: 'none',
                    padding: '8px',
                    '&.Mui-selected': {
                        backgroundColor: `${styles.color.lighterShade} !important`,
                    },
                },
            },
        },
        MuiSnackbar: {
            styleOverrides: {
                anchorOriginBottomLeft: {
                    left: '5px !important',
                    bottom: '90px !important',
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: `${styles.color.lighterShade} !important`,
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    backgroundColor: styles.color.greyBackground,
                },
                content: {
                    margin: '0 !important',
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    '&.Mui-expanded': {
                        margin: 0,
                        marginTop: 2,
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '5px',
                    transition:
                        'background-color 500ms linear, box-shadow 500ms linear',
                    '&:hover': {
                        backgroundColor: styles.color.greyBackground,
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 10px rgb(0 0 0 / 10%) !important',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: styles.color.darkShade,
                    },
                },
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    transition:
                        'background-color 500ms linear, box-shadow 500ms linear',
                    backgroundColor: '#FFF',
                    '&:hover': {
                        backgroundColor: styles.color.lighterShade,
                        boxSizing: 'border-box',
                        boxShadow: '0 4px 10px rgb(0 0 0 / 10%) !important',
                    },
                    '&.Mui-focused': {
                        backgroundColor: '#FFF',
                    },
                },
                underline: {
                    '&:before': {
                        border: '0 !important',
                    },
                    '&:after': {
                        border: '0 !important',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    '&:focus': {
                        borderTopRightRadius: '20px !important',
                        borderBottomRightRadius: '20px !important',
                        backgroundColor: 'transparent',
                    },
                },
                icon: {
                    color: styles.color.darkShade,
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    borderBottom: `1px solid #E6E6E6`,
                    minHeight: '44px',
                },
                indicator: {
                    backgroundColor: '#4996DB',
                    height: '3px',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    paddingTop: 0,
                    paddingBottom: 0,
                    minHeight: '44px',
                    marginLeft: '16px',
                    marginRight: '16px',
                    paddingLeft: '4px',
                    paddingRight: '4px',
                    minWidth: 0,
                    // opacity: 1,
                    // transition: 'background-color 200ms linear',
                    color: styles.color.textBoxLabel,
                    '&.Mui-selected': {
                        // background: styles.color.lighterShade,
                        color: styles.color.darkShade,
                    },
                },
            },
        },
        MuiTabPanel: {
            styleOverrides: {
                root: {
                    padding: '8px',
                },
            },
        },
        MuiBadge: {
            styleOverrides: {
                colorPrimary: {
                    color: 'white',
                },
            },
        },
        MuiTableCell: {
            stickyHeader: {
                backgroundColor: `#E7F3FA`,
            },
            head: {
                padding: '8px 16px',
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    borderTop: '1px solid #E6E6E6',
                },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F8F8F8',
                },
            },
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: 'none',
                    '& .MuiDataGrid-columnSeparator': {
                        color: 'transparent',
                        transition: 'color 200ms linear',
                        '&:hover': {
                            color: styles.color.lighterShade,
                        },
                    },
                    '& .MuiDataGrid-columnHeader': {
                        '&:focus': {
                            outline: 'none',
                        },
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        background: `${styles.color.lighterShade2}22`,
                        minHeight: '44px !important',
                        maxHeight: '44px !important',
                        borderTopRightRadius: '10px',
                        borderTopLeftRadius: '10px',
                        borderLeft: '10px solid transparent',
                        textTransform: 'capitalize',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        marginTop: '44px !important',
                    },
                    '& .MuiDataGrid-cell': {
                        flexDirection: 'column',
                        alignItems: 'unset !important',
                        justifyContent: 'center !important',
                        height: 'unset !important',
                        minHeight: '70px !important',
                        maxHeight: 'unset !important',
                        padding: '16px',
                        '&:focus': {
                            outline: 'none',
                        },
                    },
                    '& .MuiDataGrid-row': {
                        minHeight: 'unset !important',
                        maxHeight: 'unset !important',
                        transition:
                            'background-color 200ms linear, box-shadow 200ms linear, border-color 200ms linear',
                        borderLeft: '4px solid transparent',
                        '&:hover': {
                            backgroundColor: '#F8F8F8',
                            boxShadow: '1px 6px 15px -9px rgba(164, 164, 164, 0.5)',
                            borderLeft: `4px solid ${styles.color.hover}`,
                        },
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                rounded: {
                    borderRadius: '10px',
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '& .MuiSlider-valueLabel': {
                        lineHeight: 1.2,
                        fontSize: 12,
                        padding: 0,
                        width: 24,
                        height: 24,
                        borderRadius: '50% 50% 50% 0',
                        backgroundColor: styles.color.darkShade,
                        transformOrigin: 'bottom left',
                        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
                        '&:before': { display: 'none' },
                        '&.MuiSlider-valueLabelOpen': {
                            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
                        },
                        '& > *': {
                            transform: 'rotate(45deg)',
                        },
                    },
                    '& .MuiSlider-track': {
                        height: '2px',
                    },
                    '& .MuiSlider-rail': {
                        height: '2px',
                    },
                },
            },
        },
    },
    palette: {
        primary: tessellBlue,
        secondary: {
            main: styles.color.lightShade,
        },
    },
    typography: {
        fontFamily: '"Texta", "Lato", "Helvetica", "Arial", sans-serif',
        // fontFamily: '"Lato", "Texta", "Helvetica", "Arial", sans-serif',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        body1: {
            fontSize: '14px',
            fontFamily: '"Lato", "Texta", "Helvetica", "Arial", sans-serif',
        },
        body2: {
            fontSize: '12px',
            fontFamily: '"Lato", "Texta", "Helvetica", "Arial", sans-serif',
        },
        subtitle1: {
            fontFamily: '"Lato", "Texta", "Helvetica", "Arial", sans-serif',
        },
        subtitle2: {
            fontFamily: '"Lato", "Texta", "Helvetica", "Arial", sans-serif',
        },
        caption: {
            fontFamily: '"Lato", "Texta", "Helvetica", "Arial", sans-serif',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            laptop: 1439,
            desktop: 1679,
            miniLaptop: 1279,
        },
    },
});