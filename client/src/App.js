import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import EntriesPage from "./components/Entries/EntriesPage";
import AddEntry from "./components/Entries/AddEntry";
import FourZeroFour from "./components/FourZeroFour";
import { useStyles, theme } from "./styles";

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <div className={classes.pageContainer}>
            <Switch>
              <Route exact path={"/"} component={EntriesPage} />
              <Route exact path={"/add"} render={() => <AddEntry />} />
              <Route path="" render={() => <FourZeroFour />} />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
