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

export const indigo = {
    bodyBackground: "#1c1c27",
    bodyColor: "white",
    gridBackground: "#28293d"
}

export const white = {
    bodyBackground: "#e9ebee",
    bodyColor: "#1d2129",
    gridBackground: "#e0e0e0"
}

export const amber = {
    bodyBackground: "#ff6f00",
    bodyColor: "white",
    gridBackground: "#ff8f00"
}

export const brown = {
    bodyBackground: "#3e2723",
    bodyColor: "white",
    gridBackground: "#4e342e"
}

export const lightGreen = {
    bodyBackground: "#558b2f",
    bodyColor: "white",
    gridBackground: "#7cb342"
}