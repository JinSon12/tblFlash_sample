import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PromoDetail from "../component/PromoDetail/PromoDetail";
import RestaurantDeals from "../component/RestaurantDeals/RestaurantDeals";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={RestaurantDeals} />
      <Route
        path="/promo/:promoId"
        render={(props) => <PromoDetail {...props} />}
      />
      {/* <Route path="/about" component={Aquarium} /> */}
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Routes;
