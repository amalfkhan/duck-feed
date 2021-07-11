import { useHistory } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { fourZeroFourUseStyles } from "./styles";

const FourZeroFour = () => {
  const history = useHistory();
  const classes = fourZeroFourUseStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.headingContainer}
    >
      <Grid item xs={12}>
        <Typography component="h2" className={classes.pageTitle} gutterBottom>
          404
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          component="h2"
          className={classes.pageSubtitleSerif}
          gutterBottom
        >
          Hmm that page doesn't exist...
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button className={classes.button} onClick={() => history.push("/")}>
          Go home &rarr;
        </Button>
      </Grid>
    </Grid>
  );
};

export default FourZeroFour;
