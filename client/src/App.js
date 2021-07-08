import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import EntriesList from "./components/Entries/EntriesList";
import AddEntry from "./components/Entries/AddEntry";
import FourZeroFour from "./components/FourZeroFour";

function App() {
  return (
    <BrowserRouter>
      <PageHeader>
        <Switch>
          <Route exact path={"/"} component={EntriesList} />
          <Route exact path={"/add"} render={() => <AddEntry />} />
          <Route path="" render={() => <FourZeroFour />} />
        </Switch>
      </PageHeader>
    </BrowserRouter>
  );
}

export default App;
