import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --black: #0f0f0f;
        --yellow: #ffd400;
        --white: #ffffff;
        --pinkishGrey: #bcbcbc;
        --lightGrey: #e9eae8;
        --danger: #e33a58;
        --warmGrey: #777777;
        --snow: #f0f0f0;
        --greyishBrown: #555555;
        --grey: #cecece;
        --greyish-: #4e4e4e;
        --orangeYellow: #ffa900;
        --tangerine: #ff8b00;
        --pinkish-grey: #d0d0d0;
        --warm-grey: #9e9e9e;
        --greyishBrownTwo: #3b3836;
        --purplishGrey: #5f5d60;
        --silver: #cdd6db;
        --whiteTwo: #fbfbfb;
        --lipstick: #e53755;
        --warmGreyThree: #808080;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    html, body, textarea, select, input {
        font-family: 'Arial';
    }
`;
