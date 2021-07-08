import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import EntryDataServices from "../../services/entry.services";

const useStyles = makeStyles({
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

const EntriesList = () => {
  const classes = useStyles();
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
