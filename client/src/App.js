import { BrowserRouter, Switch, Route } from "react-router-dom";
import EntriesPage from "./components/Entries/EntriesPage";
import AddEntry from "./components/Entries/AddEntry";
import FourZeroFour from "./components/FourZeroFour";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <div className={classes.pageContainer}>
          <Switch>
            <Route exact path={"/"} component={EntriesPage} />
            <Route exact path={"/add"} render={() => <AddEntry />} />
            <Route path="" render={() => <FourZeroFour />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
