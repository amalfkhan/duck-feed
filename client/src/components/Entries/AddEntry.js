import { Grid, Button } from "@material-ui/core";
import { addEntryUseStyles } from "./styles";

const AddEntry = () => {
  const classes = addEntryUseStyles();

  return (
    <Grid item xs={12}>
      <Button variant="contained" color="primary" className={classes.button}>
        Add Entry
      </Button>
    </Grid>
  );
};

export default AddEntry;
