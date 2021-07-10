import { Typography, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import EntryCards from "./EntryCards";
import { entriesPageUseStyles } from "./styles";

const EntriesPage = () => {
  const classes = entriesPageUseStyles();

  //create a card to display each entry
  return (
    <Container maxWidth="md">
      {/* <Container> */}

      <Typography
        className={classes.header}
        variant="h2"
        component="h1"
        // align="center"
        // gutterBottom
      >
        Duck Feed
      </Typography>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to={{ pathname: "/add" }}
      >
        Add Entry
      </Button>
      {/* </Container> */}
      <EntryCards />
    </Container>
  );
};

export default EntriesPage;
