// import { Grid, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import EntriesDataServices from "../../services/entry.services";
import { addEntryUseStyles } from "./styles";

export default () => {
  const history = useHistory();
  const classes = addEntryUseStyles();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({ error: false, errorText: "" });
  const [entry, setEntry] = useState({
    name: "",
    datetime: "2021-01-01T12:00",
    location: "",
    numFed: "",
    feedType: "",
    feedAmount: "",
  });

  const handleInputChange = (e) => {
    console.log(new Date().toISOString().substring(0, 10));
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

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      location: "",
      datetime: "2021-01-01T12:00",
      numFed: "",
      feedType: "",
      feedAmount: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5} alignItems="center" justify="center">
            <Grid item xs={12}>
              <FormControl style={{ width: "100%" }}>
                <FormLabel className={classes.formLabel}>Name *</FormLabel>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="eg. Jessica Hernandez"
                      fullWidth
                      variant="outlined"
                    />
                  )}
                  name="name"
                  control={control}
                  rules={{
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  }}
                />
                {errors?.name && (
                  <FormHelperText className={classes.errorText}>
                    Please enter a name of minimum 3 characters
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl style={{ width: "100%" }}>
                <FormLabel className={classes.formLabel}>Location *</FormLabel>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="eg. Hollydene Park, Victoria BC"
                      fullWidth
                      variant="outlined"
                    />
                  )}
                  name="location"
                  control={control}
                  rules={{ required: true, minLength: 6, maxLength: 30 }}
                />
                {errors?.location && (
                  <FormHelperText className={classes.errorText}>
                    Please enter a park name or address
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl style={{ width: "100%" }}>
                <FormLabel className={classes.formLabel}>
                  Feed date and time *
                </FormLabel>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="datetime-local"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                  name="datetime"
                  control={control}
                  rules={{ required: true }}
                />
                {errors?.datetime?.type === "required" && (
                  <FormHelperText className={classes.errorText}>
                    Required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl style={{ width: "100%" }}>
                <FormLabel className={classes.formLabel}>
                  Number fed *
                </FormLabel>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="eg. 20"
                      fullWidth
                      variant="outlined"
                    />
                  )}
                  name="numFed"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^([1-9]|[01][0-9][0-9]|100[0-0])$/,
                    minLength: 1,
                  }}
                />
                {errors?.numFed && (
                  <FormHelperText className={classes.errorText}>
                    Please enter a number between 1 and 1000
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl style={{ width: "100%" }}>
                <FormLabel className={classes.formLabel}>Feed type *</FormLabel>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="eg. Day old crusts"
                      fullWidth
                      variant="outlined"
                    />
                  )}
                  name="feedType"
                  control={control}
                  rules={{ required: true }}
                />
                {errors?.feedType?.type === "required" && (
                  <FormHelperText className={classes.errorText}>
                    Required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl style={{ width: "100%" }}>
                <FormLabel className={classes.formLabel}>
                  Feed amount in grams *
                </FormLabel>
                <Controller
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="eg. 285"
                      fullWidth
                      variant="outlined"
                    />
                  )}
                  name="feedAmount"
                  control={control}
                  rules={{ required: true }}
                />
                {errors?.feedAmount?.type === "required" && (
                  <FormHelperText className={classes.errorText}>
                    Required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              onClick={() => history.push("/")}
            >
              Cancel
            </Button>

            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </form>
        // <form className={classes.form} noValidate>
        //   <Grid container spacing={3} align="center">
        //     <Grid item xs={12}>
        //       <TextField
        //         className={classes.field}
        //         label="Name"
        //         name="name"
        //         value={entry.name}
        //         onChange={(e) => {
        //           handleInputChange(e);
        //         }}
        //         variant="outlined"
        //         required
        //       />
        //     </Grid>
        //     <Grid item xs={12}>
        //       <TextField
        //         label="Feed date and time"
        //         name="datetime"
        //         type="datetime-local"
        //         value={entry.datetime}
        //         onChange={(e) => {
        //           handleInputChange(e);
        //         }}
        //         InputLabelProps={{
        //           shrink: true,
        //         }}
        //         required
        //       />
        //     </Grid>
        //     <Grid item xs={12}>
        //       <TextField
        //         className={classes.field}
        //         label="Location"
        //         name="location"
        //         value={entry.location}
        //         onChange={(e) => {
        //           handleInputChange(e);
        //         }}
        //         variant="outlined"
        //         required
        //       />
        //     </Grid>
        //     <Grid item xs={12}>
        //       <TextField
        //         className={classes.field}
        //         label="Number of ducks fed"
        //         name="numFed"
        //         value={entry.numFed}
        //         onChange={(e) => {
        //           handleInputChange(e);
        //         }}
        //         variant="outlined"
        //         required
        //       />
        //     </Grid>
        //     <Grid item xs={12}>
        //       <TextField
        //         className={classes.field}
        //         label="Feed type"
        //         name="feedType"
        //         value={entry.feedType}
        //         onChange={(e) => {
        //           handleInputChange(e);
        //         }}
        //         variant="outlined"
        //         required
        //       />
        //     </Grid>
        //     <Grid item xs={12}>
        //       <TextField
        //         className={classes.field}
        //         label="Feed amount"
        //         name="feedAmount"
        //         value={entry.feedAmount}
        //         onChange={(e) => {
        //           handleInputChange(e);
        //         }}
        //         variant="outlined"
        //         required
        //       />
        //     </Grid>
        //     <Grid item xs={3}>
        //       <Button
        //         color="primary"
        //         variant="outlined"
        //         onClick={cancelNewEntry}
        //       >
        //         Cancel
        //       </Button>
        //     </Grid>
        //     <Grid item xs={3}>
        //       <Button
        //         color="primary"
        //         variant="contained"
        //         onClick={saveNewEntry}
        //       >
        //         Submit
        //       </Button>
        //     </Grid>
        //   </Grid>
        // </form>
      )}
    </div>
  );
};
