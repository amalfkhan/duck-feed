// import { Grid, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormHelperText,
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

  const onSubmit = async (data) => {
    setSubmitted(true);
    try {
      const res = await EntriesDataServices.createEntry(data);
      console.log(res);
    } catch (e) {
      console.log(e);
      // if (e.response) handleError(e.response.data.error);
    }
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
          <Grid container spacing={5}>
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
                    pattern: /^[a-zA-Z0-9'-. ]+$/,
                  }}
                />
                {errors?.name && (
                  <FormHelperText className={classes.errorText}>
                    Please enter a valid name of minimum 3 characters
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
                  rules={{
                    required: true,
                    minLength: 3,
                    maxLength: 50,
                  }}
                />
                {errors?.location && (
                  <FormHelperText className={classes.errorText}>
                    Please enter a valid location
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
                {errors?.datetime && (
                  <FormHelperText className={classes.errorText}>
                    Please select a date and time
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
                    min: 1,
                    max: 1000,
                    pattern: /^[0-9]*$/,
                  }}
                />
                {errors?.numFed && (
                  <FormHelperText className={classes.errorText}>
                    Please enter a numeric value between 1 and 1000
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
                  rules={{
                    required: true,
                    minLength: 2,
                    maxLength: 50,
                    pattern: /^\d*[a-zA-Z][a-zA-Z0-9 ]*$/,
                  }}
                />
                {errors?.feedType && (
                  <FormHelperText className={classes.errorText}>
                    Please enter a valid feed (no symbols)
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
                  rules={{
                    required: true,
                    min: 1,
                    max: 5000,
                    pattern: /^[0-9]*$/,
                  }}
                />
                {errors?.feedAmount && (
                  <FormHelperText className={classes.errorText}>
                    Please enter a numeric value between 1 and 5000
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
      )}
    </div>
  );
};
