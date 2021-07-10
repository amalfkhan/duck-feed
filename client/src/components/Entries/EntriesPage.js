import { Typography, Container, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import EntryCards from "./EntryCards";
import { entriesPageUseStyles } from "./styles";

const EntriesPage = () => {
  const classes = entriesPageUseStyles();

  return (
    <Container maxWidth="md">
      <Grid item container xs={12} className={classes.headingContainer}>
        <Grid item xs={12}>
          <Typography component="h1" className={classes.pageTitle} gutterBottom>
            DUCK FEED
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h2"
            className={classes.pageSubtitleSans}
            gutterBottom
          >
            DATA LOG
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h2"
            className={classes.pageSubtitleSerif}
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            component={Link}
            to={{ pathname: "/add" }}
          >
            Add Entry &rarr;
          </Button>
        </Grid>
      </Grid>
      <EntryCards />
    </Container>
  );
};

export default EntriesPage;
