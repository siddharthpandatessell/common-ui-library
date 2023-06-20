/* eslint-disable import/prefer-default-export */
/*
 *
 * Copyright © Tessell Inc, 2021. All rights reserved.
 *
 *     Date            Author                  Comment
 *   --------------------------------------------------
 *     8/19/2021     bakul.banthia         Created
 *
 */

import {
    red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    brown,
    grey,
    blueGrey,
} from '@mui/material/colors';

const palettes = [
    blue,
    indigo,
    cyan,
    teal,
    lightBlue,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    red,
    pink,
    purple,
    deepPurple,
    brown,
    grey,
    blueGrey,
];

const tessellBlue = {
    dark: '#11567F',
    light: '#1E7EA1',
    hover: '#29B5E8',
};

export const styles = {
    color: {
        darkShade: tessellBlue.dark,
        lightShade: tessellBlue.light,
        hover: tessellBlue.hover,
        darkBorder: '#004D73',
        lighterShade: 'rgba(30, 126, 161, 0.4)',
        lighterShade2: '#1E7EA1',
        header: '#11567F',
        baseBackground: '#FFF',
        greyBackground4: '#F7F7F7',
        greyBackground: '#EEEEEE',
        greyBackground3: '#DDDDDD',
        greyBackground2: '#CCCCCC',
        monotoneLightLight: '#c0c0c0',
        monotoneLightDark: '#f0f0f0',
        monotoneDarkDark: '#666666',
        monotoneDarker: '#222222',
        monotoneDarkLight: '#999999',
        red: '#EC373C',
        warningBackground: '#FAE5E5',
        lighterRed: '#EC373CBD',
        green: '#4DAC4A',
        warn: '#F29132',
        textBoxLabel: '#08080D',
    },
    contentBox: {
        boxSizing: 'border-box',
        borderRadius: '10px',
        boxShadow: '0px 3px 10px rgba(8, 8, 13, 0.25) !important',
        background: 'white',
    },
    textBoxLabel: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#08080D',
    },
    protection: [
        {
            name: 'Gold',
            darkShade: '#FFD900',
            lightShade: '#FAFAD2',
        },
        {
            name: 'Silver',
            darkShade: '#c0c0c0',
            lightShade: '#e8e8e8',
        },
        {
            name: 'Bronze',
            darkShade: '#cd7f32',
            lightShade: '#edbd97',
        },
        {
            name: 'Brass',
            darkShade: '#B5A642',
            lightShade: '#d9d19e',
        },
        {
            name: 'Default',
            darkShade: tessellBlue.dark,
            lightShade: tessellBlue.light,
        },
    ],
    palettes,
};
