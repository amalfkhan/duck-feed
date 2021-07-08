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

const entriesListUseStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 10px",
    transform: "scale(0.8)",
  },
  cuisine: {
    fontSize: 14,
  },
  address: {
    marginBottom: 10,
  },
  restaurantCard: {
    padding: "15px",
  },
});

export { addEntryUseStyles, entriesListUseStyles };
