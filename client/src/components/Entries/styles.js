import { makeStyles } from "@material-ui/core";

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

const entriesPageUseStyles = makeStyles({
  header: {
    paddingTop: "5%",
    paddingBottom: "3%",
  },
  button: {
    marginBottom: "5%",
    padding: "10px 20px",
    display: "inline-block",
  },
});

const entryCardUseStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 10px",
    transform: "scale(0.8)",
  },
  datetime: {
    fontSize: 14,
  },
  entryCard: {
    padding: "15px",
  },
});

export { addEntryUseStyles, entriesPageUseStyles, entryCardUseStyles };
