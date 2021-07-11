import { makeStyles } from "@material-ui/core";
import { theme } from "../../styles";

const addEntryUseStyles = makeStyles({
  button: {
    margin: 20,
    padding: "10px 20px",
  },
  formLabel: {
    ...theme.typography.pageSubtitleSerif,
    color: "black",
    paddingBottom: "10px",
  },
  errorText: {
    ...theme.typography.pageSubtitleSans,
    color: "red",
    fontSize: 12,
  },
  subHeading: {
    ...theme.typography.subHeading1,
    paddingBottom: 20,
  },
  paper: {
    padding: "40px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
  },
  form: {
    width: "100%",
    margin: theme.spacing(3),
  },
  pageTitle: {
    ...theme.typography.pageTitle,
  },
  button: {
    ...theme.typography.button,
    padding: theme.spacing(1, 2, 2, -1),
    minHeight: 0,
    minWidth: 0,
    "&:hover": {
      backgroundColor: "#fff",
      textDecoration: "underline",
    },
  },
  headingContainer: {
    padding: theme.spacing(6, 0),
  },
});

const entriesPageUseStyles = makeStyles((theme) => ({
  pageTitle: {
    ...theme.typography.pageTitle,
  },
  pageSubtitleSans: {
    ...theme.typography.pageSubtitleSans,
    marginBottom: theme.spacing(2),
  },
  pageSubtitleSerif: {
    ...theme.typography.pageSubtitleSerif,
    marginBottom: theme.spacing(2),
  },
  button: {
    ...theme.typography.button,
    padding: theme.spacing(0, 2, 2, 0),
    minHeight: 0,
    minWidth: 0,
    textTransform: "none",
  },
  headingContainer: {
    padding: theme.spacing(6, 0),
  },
}));

const entryCardUseStyles = makeStyles({
  entryCard: {
    padding: "15px",
  },
  subHeading2: {
    ...theme.typography.subHeading2,
  },
  paragraph: {
    ...theme.typography.paragraph,
    marginBottom: theme.spacing(2),
  },
  altParagraph: {
    ...theme.typography.altParagraph,
  },
});

export { addEntryUseStyles, entriesPageUseStyles, entryCardUseStyles };
