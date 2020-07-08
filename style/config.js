const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
}

export const config = `
    * {
        box-sizing: border-box;
        margin: 0;
    }

    html { font-size: 16px; }

    .kanit-bold {
        font-family: 'Kanit', 'Sans-Serif';
        font-weight: 700;
    }
    
    .kanit-medium {
        font-family: 'Kanit', 'Sans-Serif';
        font-weight: 500;
    }
    
    .kanit-regular {
        font-family: 'Kanit', 'Sans-Serif';
        font-weight: 400;
    }
    
    .kanit-light {
        font-family: 'Kanit', 'Sans-Serif';
        font-weight: 300;
    }
    
    .kanit-thin {
        font-family: 'Kanit', 'Sans-Serif';
        font-weight: 100;
    }
`