import React, { useState, useEffect } from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import EntryDataServices from "../../services/entry.services";
import { entriesListUseStyles } from "./styles";

const EntriesList = () => {
  const classes = entriesListUseStyles();
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
    <>
      {entries.map((entry, index) => {
        return (
          <div key={index}>
            <Card className={classes.restaurantCard} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.cuisine}
                  color="textSecondary"
                  gutterBottom
                >
                  {entry.datetime}
                </Typography>
                <Typography variant="h5" component="h2">
                  {entry.name}
                </Typography>
                <Typography className={classes.address} color="textSecondary">
                  {entry.location}
                </Typography>
                <Typography variant="body2" component="p">
                  {entry.numFed}
                  {bull}
                  {entry.feedType}
                  {bull}
                  {entry.feedAmount}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default EntriesList;
