import { createMuiTheme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  pageContainer: {
    background: "#f9f9f9",
    width: "100%",
    paddingBottom: "5%",
  },
});

const theme = createMuiTheme({
  typography: {
    pageTitle: {
      fontFamily: "Playfair Display",
      fontWeight: 700,
      fontSize: 42,
    },
    pageSubtitleSans: {
      fontFamily: "Montserrat",
      fontSize: 15,
      fontWeight: 400,
    },
    pageSubtitleSerif: {
      fontFamily: "PT Serif",
      fontSize: 15,
    },
    categorySubHeading: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: 14,
    },
    paragraph: {
      fontFamily: "PT Serif",
      fontSize: 14,
    },
    altParagraph: {
      fontFamily: "Montserrat",
      fontSize: 12,
    },
    button: {
      fontFamily: "Montserrat",
      fontSize: 12,
      fontWeight: 600,
      "&:hover": {
        backgroundColor: "#f9f9f9",
        textDecoration: "underline",
      },
    },
  },
});

export { useStyles, theme };
