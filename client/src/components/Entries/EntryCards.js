import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  CardContent,
  Container,
  Grid,
} from "@material-ui/core";
import EntryDataServices from "../../services/entry.services";
import { entryCardUseStyles } from "./styles";

//grid styling from old commit

const EntriesPage = () => {
  const classes = entryCardUseStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [entries, setEntries] = useState([]);

  //get all entries from db on load
  useEffect(() => {
    retrieveEntries();
  }, []);

  const retrieveEntries = () => {
    EntryDataServices.getAllEntries()
      .then((res) => {
        setEntries(res.data);
      })
      .catch((e) => {
        console.error(`unable to retrieve entries in EntriesList: ${e}`);
        // history.push("/500");
      });
  };

  //create a card to display each entry
  return (
    // <Container>
    <Grid
      className={classes.reviewsContainer}
      container
      spacing={3}
      justify="center"
    >
      {entries.map((entry, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className={classes.entryCard} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.datetime}
                  color="textSecondary"
                  gutterBottom
                >
                  {entry.datetime}
                </Typography>
                <Typography variant="h5" component="h2">
                  {entry.name}
                </Typography>
                <Typography color="textSecondary">{entry.location}</Typography>
                <Typography variant="body2" component="p">
                  {entry.numFed}
                  {bull}
                  {entry.feedType}
                  {bull}
                  {entry.feedAmount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
    // </Container>
  );
};

export default EntriesPage;
