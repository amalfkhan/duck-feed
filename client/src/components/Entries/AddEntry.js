// import { Grid, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Grid, Button, TextField } from "@material-ui/core";
import EntriesDataServices from "../../services/entry.services";
import { addEntryUseStyles } from "./styles";

export default () => {
  const history = useHistory();
  const classes = addEntryUseStyles();
  const [submitted, setSubmitted] = useState(false);
  const [entry, setEntry] = useState({
    name: "",
    datetime: "",
    location: "",
    numFed: "",
    feedType: "",
    feedAmount: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const saveNewEntry = async () => {
    console.log(entry);
    //try/catch for saving to db
    setSubmitted(true);
  };

  const cancelNewEntry = () => {
    history.push("/");
  };

  return (
    <div>
      {submitted ? (
        <div>
          SUBMITTED
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={Link}
            to={{ pathname: "/" }}
          >
            Back to all entries
          </Button>
        </div>
      ) : (
        <form className={classes.form} noValidate>
          <Grid container spacing={3} align="center">
            <Grid item xs={12}>
              <TextField
                className={classes.field}
                label="Name"
                name="name"
                value={entry.name}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Feed date and time"
                name="datetime"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                // value={entry.date}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.field}
                label="Location"
                name="location"
                value={entry.location}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.field}
                label="Number of ducks fed"
                name="numFed"
                value={entry.numFed}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.field}
                label="Feed type"
                name="feedType"
                value={entry.feedType}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.field}
                label="Feed amount"
                name="feedAmount"
                value={entry.feedAmount}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                color="primary"
                variant="outlined"
                onClick={cancelNewEntry}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                color="primary"
                variant="contained"
                onClick={saveNewEntry}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};
