import { createGlobalStyle } from "styled-components";

export type THEME = {
  colors: {
    font: string;
    notFont: string;
    primary: string;
    secondary: string;
    modalBackground: string;
    selected: string;
    fontTransparent: string;
    notFontTransparent: string;
  };
};

export const theme_blue: THEME = {
  colors: {
    font: "#FFFDF9",
    notFont: "#202020",
    primary: "#4299bc",
    secondary: "#5cc0e4",
    modalBackground: "#1a5e79",
    selected: "#36313D",
    fontTransparent: "#ffffff80",
    notFontTransparent: "#00000025",
  },
};

export const theme_green: THEME = {
  colors: {
    font: "#FFFDF9",
    notFont: "#202020",
    primary: "#44bc42",
    secondary: "#5ce475",
    modalBackground: "#25791a",
    selected: "#36313D",
    fontTransparent: "#ffffff80",
    notFontTransparent: "#00000025",
  },
};

export const getSavedTheme = () => {
  return themeIdToTheme(localStorage.getItem("theme") || "blue");
};

export const saveNewTheme = (themeId: string) =>
  localStorage.setItem("theme", themeId);

const themeIdToTheme = (id: string) => {
  switch (id) {
    case "blue":
      return theme_blue;
    case "green":
      return theme_green;
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.font};
  }
  .bm-burger-bars {
    background: ${(props) => props.theme.colors.font};
  }

  .bm-burger-bars-hover {
    background: ${(props) => props.theme.colors.fontTransparent};
  }

  .bm-cross {
    background: ${(props) => props.theme.colors.fontTransparent};
  }

  .bm-menu {
    background: ${(props) => props.theme.colors.modalBackground};
  }
  
  .bm-item {
    color: ${(props) => props.theme.colors.font};
  }
  
  .bm-item:hover {
    color: ${(props) => props.theme.colors.fontTransparent};
  }
  
  .react-slideshow-container + ul.indicators .each-slideshow-indicator:before {
    background-color: ${(props) => props.theme.colors.font} !important;
  }
  
  .image-gallery-thumbnail.active {
    border-color: ${(props) => props.theme.colors.secondary};
  }
  
  .image-gallery-thumbnail:hover {
    border-color: ${(props) => props.theme.colors.secondary};
  }
  
  .image-gallery-icon:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
