import { Grid, Typography } from "@material-ui/core";
import AddEntry from "./Entries/AddEntry";
import useStyles from "./styles";

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
        <Typography variant="h6" color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Grid>

      <AddEntry />
    </Grid>
  );
};

export default PageHeader;
