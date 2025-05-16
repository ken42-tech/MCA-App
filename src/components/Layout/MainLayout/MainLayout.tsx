import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router";
import Home from "../../../pages/Home";
import routes from "../../../utils/routes";
import AppLayout from "../AppLayout";
import Matches from "../../../pages/Matches";
import AboutUs from "../../../pages/AboutUs";
import Stats from "../../../pages/Stats";

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
      <Route
        exact
        path={routes.matches}
        render={() => (
          <AppLayout>
            <Matches />
          </AppLayout>
        )}
      />
      <Route
        exact
        path={routes.stats}
        render={() => (
          <AppLayout>
            <Stats />
          </AppLayout>
        )}
      />
      <Route
        exact
        path={routes.aboutUs}
        render={() => (
          <AppLayout>
            <AboutUs />
          </AppLayout>
        )}
      />

      <Route exact path="/">
        <Redirect to={routes.home} />
      </Route>
    </IonRouterOutlet>
  );
};

export default MainLayout;
