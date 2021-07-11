//compontent that displays layout of entries page, and houses component that renders each individual component
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
            Dr. Ayoola Winston
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="h2"
            className={classes.pageSubtitleSerif}
            gutterBottom
          >
            This website is a portal being used to crowdsource data on duck
            feeding at parks around the world. By entering data you are agreeing
            for it to be used in Dr. Ayoola Winston's study being completed
            through the Green Source research institute.
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
