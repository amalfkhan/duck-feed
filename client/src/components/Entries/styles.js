import { makeStyles } from "@material-ui/core";
import { theme } from "../../styles";

const addEntryUseStyles = makeStyles({
  button: {
    margin: 20,
    padding: "10px 20px",
    // display: "inline-block",
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    width: "60%",
  },
  helperText: {
    color: "red",
  },
});

const entriesPageUseStyles = makeStyles((theme) => ({
  header: {
    paddingTop: "5%",
    paddingBottom: "3%",
  },
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
  categoryHeading: {
    ...theme.typography.categoryHeading,
    paddingBottom: theme.spacing(6),
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
  categoryContainer: {
    padding: theme.spacing(8, 0),
  },
}));

const entryCardUseStyles = makeStyles({
  entryCard: {
    padding: "15px",
  },
  categorySubHeading: {
    ...theme.typography.categorySubHeading,
  },
  paragraph: {
    ...theme.typography.paragraph,
    marginBottom: theme.spacing(2),
  },
  altParagraph: {
    ...theme.typography.altParagraph,
  },
  textButton: {
    ...theme.typography.textButton,
    padding: theme.spacing(1, 1, 1, 0),
    minHeight: 0,
    minWidth: 0,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  imgCard: {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
  },
  cardContent: {
    padding: theme.spacing(0),
  },
});

export { addEntryUseStyles, entriesPageUseStyles, entryCardUseStyles };
