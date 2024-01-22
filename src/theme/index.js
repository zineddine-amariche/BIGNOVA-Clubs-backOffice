
// CMD K + G TO GENERATE COLORS


export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#dddddd",
    200: "#bbbbbb",
    300: "#989898",
    400: "#767676",
    500: "#545454",
    600: "#434343",
    700: "#323232",
    800: "#222222",
    900: "#111111",
    1000: "#000000",
  },
  primary: {
    // blue
    100: "#dff9fa",
    200: "#bef3f5",
    300: "#9eecf0",
    400: "#7de6eb",
    500: "#5De0e6",
    600: "#4ab3b8",
    700: "#38868a",
    800: "#255a5c",
    900: "#132d2e",
  },
  secondary: {
    // teal
    100: "#ccdbef",
    200: "#99b7de",
    300: "#6692ce",
    400: "#336ebd",
    500: "#004aad",
    600: "#003b8a",
    700: "#002c68",
    800: "#001e45",
    900: "#000f23",
  },
  thirdly: {
    100: "#fff8de",
    200: "#fff2bd",
    300: "#ffeb9b",
    400: "#ffe57a",
    500: "#ffde59",
    600: "#ccb247",
    700: "#998535",
    800: "#665924",
    900: "#332c12",
  },
};

function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[500],
              light: tokensDark.primary[100],
              dark: tokensDark.primary[900],
              contrastText: tokensDark.primary[700],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[500],
              light: tokensDark.secondary[100],
              dark: tokensDark.secondary[900],
              contrastText: tokensDark.secondary[100],
            },
            neutral: {
              ...tokensDark.thirdly,
              ...tokensDark.grey,
              main: tokensDark.thirdly[500],
              light: tokensDark.thirdly[100],
              dark: tokensDark.thirdly[900],
            contrastText: tokensDark.grey[1000],


            },
            background: {
              ...tokensDark.grey,
              default: tokensDark.grey[1000],
              alt: tokensDark.grey[0],
              paper: tokensDark.grey[10],
              main: tokensDark.thirdly[400],

            },
            text :{
              ...tokensDark.grey,
              ...tokensDark.primary,
              ...tokensDark.primary,
              main: tokensDark.primary[500],
              light: tokensDark.grey[0],
              dark: tokensDark.grey[1000],
              contrastText: tokensDark.grey[300],
            }
          }
        : {
            primary: {
              ...tokensLight.primary,
              main: tokensDark.primary[500],
              light: tokensDark.primary[900],
              dark: tokensDark.primary[100],
              contrastText: tokensDark.primary[300],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[500],
              light: tokensDark.secondary[900],
              dark: tokensDark.secondary[100],
              contrastText: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensLight.thirdly,
              main: tokensDark.thirdly[0],
              light: tokensDark.thirdly[900],
              dark: tokensDark.thirdly[100],
              contrastText: tokensDark.thirdly[500],

            },
            background: {
              ...tokensLight.grey,
              default: tokensDark.grey[10],
              alt: tokensDark.grey[900],
              paper: tokensDark.grey[800],
              main: tokensDark.grey[900],
            },
            text :{
              ...tokensDark.grey,
              ...tokensDark.primary,
              main: tokensDark.grey[0],
              light: tokensDark.grey[800],
              dark: tokensDark.grey[50],
              contrastText: tokensDark.primary[200],

            }
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
