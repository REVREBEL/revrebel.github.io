import { lighten, darken } from "@theme-ui/color"


const breakpoints = [480, 768, 960, 1200, 1280];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

const space = [0, 4, 8, 16, 32, 48];
space.small = space[1];
space.medium = space[2];
space.large = space[3];

export const theme = {

  name: "REVREBEL",

  config: {
    useCustomProperties:	true,
  },

  borderWidths: [0, "1px", "2px", "4px", "5px"],
  borderRadius: [0, "3px", "32px", "9999px"],
  borderStyles: ["solid", "solid"],
  durations: ["250ms", "375ms", "500ms"],

  colors: {
    blue: '#1c447f',
    purple: '#5e688d',
    green: '#5b8aa0',
    lightBlue: '#b2d3de',
    red: '#ef5353',
    darkOrange: '#e4782e',
    orange: '#f08d19',
    yellow: '#fad644',
    gray: '#575757',
    darkGray: '#2F2F2F',
    white: '#fafafa',
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray400: '#ced4da',
    gray500: '#adb5bd',
    gray600: '#575757',
    gray700: '#575757',
    gray800: '#2f2f2f',
    gray900: '#2f2f2f',
    text: '#1c447f',
    muted: '#aaaaaa',
    background: '#FAFAFA',
    foreground: '#ffffff',
    primary: '#1c447f',
    secondary: '#5b8aa0',
    highlight: '#b2d3de',
    accent: '#5e688d',
   
    tint: [
      "hsla(0, 0%, 100%, .035)",
      "hsla(0, 0%, 100%, 0.1)",
      "hsla(0, 0%, 100%, 0.19)",
      "hsla(0, 0%, 100%, .28)",
      "hsla(0, 0%, 100%, 0.36)",
      "hsla(0, 0%, 100%, 0.45)",
      "hsla(0, 0%, 100%, .55)",
      "hsla(0, 0%, 100%, 0.64)",
      "hsla(0, 0%, 100%, .73)",
      "hsla(0, 0%, 100%, .815)",
      "hsla(0, 0%, 100%, .895)",
      "hsla(0, 0%, 100%, .94)",
    ],
    
    "light-navy": [
      "#1C447F",
      "#1c447fe8",
      "#1c447fd6",
      "#1c447fc7",
      "#1c447fad",
      "#1c447f7d",
    ],

    "ucla-blue": [
      "#5E688D",
      "#5e688de3",
      "#5e688dd6",
      "#5e688dbd",
      "#5e688d91",
      "#5e688d7a",
    ],

    horizon: [
      "#5B8AA0",
      "#5b8aa0d4",
      "#5b8aa0b8",
      "#5b8aa09e",
      "#5b8aa080",
      "#5b8aa063",
    ],
    "light-pastel-blue": [
      "#b2d3de",
      "#b2d3de",
      "#b2d3de",
      "#b2d3de",
      "#b2d3de",
      "#b2d3de",
    ],

    coral: [
      "#Ef5353",
      "#ef5353d4",
      "#ef5353c4",
      "#ef5353a8",
      "#ef5353b0",
      "#ef53538a",
    ],

    "cadmium-orange": [
      "#E4782E",
      "#e4782ede",
      "#e4782ec7",
      "#e4782ebd",
      "#e4782eab",
      "#e4782e9c",
    ],

    "carrot-orange": [
      "#F08D19",
      "#f08d19de",
      "#f08d19c2",
      "#f08d19b3",
      "#f08d1991",
      "#f08d196b",
    ],

    yellow: [
      "#FAD644",
      "#fad644e3",
      "#fad644cf",
      "#fad644bd",
      "#fad644ad",
      "#fad64491",
    ],

    "davy-grey": [
      "#575757",
      "#575757e3",
      "#575757d1",
      "#575757b8",
      "#575757a3",
      "#57575782",
    ],

    white: [
      "#FAFAFA", 
      "#FAFAFA", 
      "#FAFAFA", 
      "#FAFAFA", 
      "FFFFFF", 
      "FFFFFF"
    ],

    initialColorMode: 'light',

    modes: {
      light: {
        background: "#FAFAFA",
        text: "#1C447F",
        border: "#FAFAFA",
        primary: "#1C447F",
        accent: "#1C447F",
        muted: "#5B8AA0",
      },

      dark: {
        background: "#1C447F",
        text: "#FAFAFA",
        border: "#1C447F",
        primary: "#FAFAFA",
        accent: "#FAFAFA",
        muted: "#b2d3de",
      },
    },
  },

  fontSizes: [
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.125rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "6rem",
    "8rem",
  ],

  space: [0, "4px", "8px", "16px", "32px", "64px", "128px", "256px", "512px"],

  fonts: {
    headlines: '-apple-system, BlinkMacSystemFont, Khand, Roboto, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Sarabun, "Open Sans", sans-serif',
    monospace: '-apple-system, BlinkMacSystemFont, "Fira Code", Courier, monospace',
  },

  fontWeights: {
    headlines: 700,
    body: 300,
    monospace: 400,
    bold: 500,
  },

  letterSpacings: {
    tracked: "0.1em",
    negative: "-0.01em",
    large: "0.25em",
    tight: "0.01em",
  },

  easingFunctions: {
    0: "linear",
    1: "cubic-bezier(0.828, 0.39, 0.236, 1.167)",
    2: "ease",
  },

  lineHeights: {
    solid: 1.125,
    heading: 1,
    body: 1.4,
    monospace: 1.125,
  },

  boxShadows: {
    0: "0px 1px 1px 0px hsla(0, 0%, 0%, 0.035), 0px 2px 2px 0px rgba(0, 0, 0, 0.125), 0px 4px 4px 0px rgba(0, 0, 0, 0.125), 0px 8px 8px 0px rgba(0, 0, 0, 0.125), 0px 16px 16px 0px rgba(0, 0, 0, 0.125)",
    1: "0px 0px 3px 0px rgb(222, 222, 222), 22px 24px 28px 0px #eaf2f5",
  },

  gradients: {
    "multicolor": "background: rgb(28,68,127); background: linear-gradient(90deg, rgba(28,68,127,1) 0%, rgba(105,115,153,1) 19%, rgba(91,138,160,1) 33%, rgba(120,140,147,1) 45%, rgba(198,73,73,1) 63%, rgba(223,119,48,1) 78%, rgba(255,143,13,1) 88%, rgba(250,214,68,1) 95%);",
    
    "blue-green": " background: rgb(28,68,127); background: linear-gradient(90deg, rgba(28,68,127,1) 0%, rgba(91,138,160,1) 50%, rgba(178,211,222,1) 100%);",
   
    "red-orange": "background: rgb(239,83,83); background: linear-gradient(90deg, rgba(239,83,83,1) 0%, rgba(228,120,46,1) 35%, rgba(240,141,25,1) 100%);",
  },

  text: {
    heading: {
      "font-family": "heading",
      "font-weight": 700,
      "line-height": "1",
      "letter-spacing": "-0.01em",
      "font-size": "3rem",
      "text-transform": "uppercase",
      "text-decoration": "none",
      "word-break": "normal",
      "word-spacing": "19",
      "white-space": "normal",
    },

    body: {
      "font-family": "body",
      "font-weight": 300,
      "line-height": "1.5",
      "letter-spacing": "0.1em",
      "font-size": "1.125rem",
    },

    link: {
      "font-family": "link",
      "font-weight": 700,
      "line-height": "1",
      "letter-spacing": "0.01em",
      "font-size": "0.875rem",
      "text-transform": "uppercase",
      "text-decoration": "none",
    },
  },

  styles: {
    Layout: {
      color: 'text',
      backgroundColor: 'background',
      fontFamily: 'body',
      lineHeight: 'body',
    },

    Container: {
      maxWidth: 1160,
      padding: 3,
    },

    root: {
      fontSize: 1,
      wordBreak: "break-all",
      fontFamily: "body",
      lineHeight: "body",
      minWidth: 320,
    },

    h1: {
      lineHeight: "headline",
      fontFamily: "headline",
      fontSize: 7,
      lineHeight: "headline",
      marginTop: 0,
      marginBottom: 2,
      "text-transform": "uppercase",
    },

    h2: {
      lineHeight: "headline",
      fontFamily: "headline",
      fontSize: 6,
      lineHeight: "headline",
      marginTop: 0,
      marginBottom: 3,
      "text-transform": "uppercase",
    },

    h3: {
      lineHeight: "headline",
      fontFamily: "headline",
      fontSize: 5,
      lineHeight: "headline",
      marginTop: 0,
      marginBottom: 2,
      "text-transform": "uppercase",
    },

    h4: {
      lineHeight: "headline",
      fontFamily: "headline",
      fontSize: 4,
      lineHeight: "headline",
      marginTop: 0,
      marginBottom: 3,
      "text-transform": "uppercase",
    },

    h5: {
      lineHeight: "headline",
      fontFamily: "headline",
      fontSize: 3,
      lineHeight: "headline",
      marginTop: 0,
      marginBottom: 3,
      "text-transform": "uppercase",
    },

    h6: {
      lineHeight: "headline",
      fontFamily: "headline",
      fontSize: 2,
      lineHeight: "headline",
      marginTop: 0,
      marginBottom: 3,
      "text-transform": "uppercase",
    },

    p: {
      lineHeight: "body",
      fontFamily: "body",
      lineHeight: "body",
      marginTop: 0,
      marginBottom: 4,
      code: {
        fontSize: "1.1rem",
        p: 1,
        backgroundColor: "gray",
      },
    },

    a: {
      ":focus": {
        ...commonFocus,
      },
      
      button: {
        ":focus": {
          outline: "none",
        },
      },
    },

    hr: {
      mt: 3,
      mb: 3,
      color: "lighten",
    },
  },

  buttons: {
    primary: {
      borderRadius: 0,
      cursor: "pointer",
      fontSize: 1,
      transition: ".2s linear background-color",
      ":hover": {
        background: darken("primary", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },

    secondary: {
      backgroundColor: "secondary",
      borderRadius: 0,
      cursor: "pointer",
      color: "gray",
      fontSize: 1,
      transition: ".2s linear background-color, .1s linear color",
      ":hover": {
        color: "text",
        background: darken("secondary", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },

    accent: {
      backgroundColor: "accent",
      borderRadius: 0,
      cursor: "pointer",
      fontSize: 1,
      transition: ".2s linear background-color",
      ":hover": {
        background: darken("accent", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },

    ghost: {
      backgroundColor: "darken",
      borderRadius: 0,
      cursor: "pointer",
      fontSize: 1,
      transition: ".2s linear background-color",
      ":hover": {
        background: lighten("darken", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },

    close: {
      borderRadius: 0,
      color: "text",
      cursor: "pointer",
      transition: ".2s linear background-color",
      ":hover": {
        background: lighten("darken", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },

    icon: {
      borderRadius: 0,
      color: "text",
      cursor: "pointer",
      transition: ".2s linear background-color",
      ":hover": {
        background: lighten("darken", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },

    ghostIcon: {
      borderRadius: 0,
      color: "gray",
      cursor: "pointer",
      transition: ".2s linear background-color",
      ":hover": {
        background: darken("lighten", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },

    menu: {
      borderRadius: 0,
      color: "text",
      cursor: "pointer",
      transition: ".2s linear background-color",
      ":hover": {
        background: lighten("darken", 0.05),
      },
      ":focus": {
        ...commonFocus,
      },
    },
  },

  text: {
    fontFamily: "body",
  },

  links: {
    nav: {
      color: "muted",
      fontWeight: "body",
      px: 3,
      py: 2,
      transition: ".2s linear color",
      ":hover": {
        color: "text",
        backgroundColor: "darken",
      },
      ":focus": {
        outline: "none",
        color: "text",
      },
      ":active": {
        color: "text",
      },
    },
  },

  layout: {
    container: {
      p: [3, 4, 6, 6],
    },
  },

  forms: {
    label: {
      color: "muted",
      fontFamily: "body",
      fontSize: 0,
      fontWeight: "bold",
      alignItems: "center",
      mb: 2,
      userSelect: "none",
      wordBreak: "initial",
    },

    input: {
      borderColor: "lighten",
      borderRadius: 0,
      p: 2,
      mb: 4,
      ":focus": {
        ...commonFocus,
      },
    },

    select: {
      color: "text",
      borderColor: "lighten",
      borderRadius: 0,
      ["svg"]: {
        color: "primary",
      },
    },

    textarea: {
      borderColor: "lighten",
      borderRadius: 0,
      p: 2,
      mb: 4,
      ":focus": {
        ...commonFocus,
      },
    },

    radio: {
      cursor: "pointer",
    },

    checkbox: {
      cursor: "pointer",
    },

    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },

    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },

    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },

    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },

  },
}

export default theme