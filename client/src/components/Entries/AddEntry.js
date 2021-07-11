//form component for adding new records to system

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
  Paper,
  Typography,
} from "@material-ui/core";
import EntriesDataServices from "../../services/entry.services";
import { addEntryUseStyles } from "./styles";

export default () => {
  const history = useHistory();
  const classes = addEntryUseStyles();
  const [submitted, setSubmitted] = useState(false);

  //set-up for react-hook-form
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

  //react-hook-forms performs data validation before running this function
  const onSubmit = async (data) => {
    setSubmitted(true);
    try {
      const res = await EntriesDataServices.createEntry(data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.headingContainer}
      >
        <Grid item xs={12}>
          <Typography component="h1" className={classes.pageTitle} gutterBottom>
            ADD ENTRY
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h2"
            className={classes.pageSubtitleSerif}
            gutterBottom
          >
            Please add data as accurately as possible
          </Typography>
        </Grid>
      </Grid>
      {/* conditionally display data entry form or submission complete message depending on what stage the user is at*/}
      {submitted ? (
        <Grid container direction="column" alignItems="center">
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <Typography
                component="h2"
                className={classes.subHeading}
                gutterBottom
              >
                Thank you for your submission!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button}
                component={Link}
                to={{ pathname: "/" }}
              >
                Back to all entries &rarr;
              </Button>
            </Grid>
          </Paper>
        </Grid>
      ) : (
        <Grid container direction="column" alignItems="center">
          <Paper className={classes.paper}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
                    <FormLabel className={classes.formLabel}>
                      Location *
                    </FormLabel>
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
                    <FormLabel className={classes.formLabel}>
                      Feed type *
                    </FormLabel>
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
                      }}
                    />
                    {errors?.feedType && (
                      <FormHelperText className={classes.errorText}>
                        Please enter a valid feed
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
                <Grid item>
                  <Button
                    className={classes.button}
                    onClick={() => history.push("/")}
                  >
                    Cancel &rarr;
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.button} type="submit">
                    Submit &rarr;
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      )}
    </div>
  );
};
