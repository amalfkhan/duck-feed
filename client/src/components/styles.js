import { makeStyles } from "@material-ui/core";

const fourZeroFourUseStyles = makeStyles((theme) => ({
  pageTitle: {
    ...theme.typography.pageTitle,
  },
  pageSubtitleSerif: {
    ...theme.typography.pageSubtitleSerif,
    margin: theme.spacing(2, 0, 5, 0),
  },
  button: {
    ...theme.typography.button,
    padding: theme.spacing(0, 2, 2, 0),
    minHeight: 0,
    minWidth: 0,
    textTransform: "none",
  },
  headingContainer: {
    padding: theme.spacing(10, 0),
  },
}));

export { fourZeroFourUseStyles };
