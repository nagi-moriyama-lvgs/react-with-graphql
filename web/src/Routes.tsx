import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginView } from "./modules/LoginView";
import { RegisterView } from "./modules/RegisterView";
import { MeView } from "./modules/MeView";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/me" component={MeView} />
      </Switch>
    </BrowserRouter>
  );
};
