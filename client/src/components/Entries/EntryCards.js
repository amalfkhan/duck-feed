import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent, Grid } from "@material-ui/core";
import EntryDataServices from "../../services/entry.services";
import { entryCardUseStyles } from "./styles";

const EntriesPage = () => {
  const classes = entryCardUseStyles();

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    retrieveEntries();
  }, []);

  //get all entries from db on load
  const retrieveEntries = () => {
    EntryDataServices.getAllEntries()
      .then((res) => {
        setEntries(res.data);
      })
      .catch((e) => {
        console.error(`unable to retrieve entries in EntriesList: ${e}`);
      });
  };

  //create a card to display each entry
  //reverse order of array that is returned so most recent entries appear first
  return (
    <Grid container spacing={3} justify="center">
      {entries
        .slice(0)
        .reverse()
        .map((entry, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.entryCard} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.altParagraph}
                    style={{ fontStyle: "italic" }}
                  >
                    {entry.name}
                  </Typography>
                  <Typography
                    component="h3"
                    className={classes.subHeading2}
                    style={{ paddingTop: "7px" }}
                  >
                    {/* extract date from datetimestamp */}
                    {entry.datetime.split("T")[0]}
                  </Typography>
                  <Typography
                    component="h3"
                    className={classes.subHeading2}
                    style={{ paddingBottom: "7px" }}
                  >
                    {/* extract hours and minutes from datetimestamp */}
                    {entry.datetime.split("T")[1].split(".")[0].split(":")[0]}
                    {":"}
                    {entry.datetime.split("T")[1].split(".")[0].split(":")[1]}
                    {" utc"}
                  </Typography>
                  <Typography
                    component="p"
                    className={classes.paragraph}
                    gutterBottom
                  >
                    {"location: "}
                    {entry.location}
                  </Typography>
                  <Typography component="p" className={classes.altParagraph}>
                    {"Feed type: "}
                    {entry.feedType}
                  </Typography>
                  <Typography component="p" className={classes.altParagraph}>
                    {"Feed amount: "}
                    {entry.feedAmount}
                    {" g"}
                  </Typography>
                  <Typography
                    component="p"
                    className={classes.altParagraph}
                    style={{ paddingTop: "7px" }}
                  >
                    {"Number fed: "}
                    {entry.numFed}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default EntriesPage;
