import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router";
import Home from "../../../pages/Home";
import routes from "../../../utils/routes";
import AppLayout from "../AppLayout";

const MainLayout = () => {
  return (
    <IonRouterOutlet>
      <Route
        exact
        path={routes.home}
        render={() => (
          <AppLayout>
            <Home />
          </AppLayout>
        )}
      />

      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </IonRouterOutlet>
  );
};

export default MainLayout;
