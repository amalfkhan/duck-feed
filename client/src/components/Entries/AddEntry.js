import { makeStyles, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    margin: 20,
    padding: "10px 20px",
    // display: "inline-block",
  },
});

const AddEntry = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Button variant="contained" color="primary" className={classes.button}>
        Add Entry
      </Button>
    </Grid>
  );
};

export default AddEntry;
