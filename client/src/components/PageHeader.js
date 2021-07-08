import { makeStyles, Grid, Typography } from "@material-ui/core";
import AddEntry from "./AddEntry";

const useStyles = makeStyles({
  header: {
    paddingTop: "5%",
    paddingBottom: "2%",
  },
  cuisine: {
    fontSize: 16,
  },
  button: {
    margin: 20,
    padding: "10px 20px",
    display: "inline-block",
  },
});

const PageHeader = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      align="center"
      alignItems="center"
      justify="center"
      spacing={1}
      className={classes.header}
    >
      <Grid item xs={12}>
        <Typography variant="h3" component="h2" gutterBottom>
          Duck Feed
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          className={classes.address}
          color="textSecondary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Grid>

      <AddEntry />
    </Grid>
  );
};

export default PageHeader;
