import { Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const PageHeader = ({ children }) => {
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
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Grid>

      <div>{children}</div>
    </Grid>
  );
};

export default PageHeader;
