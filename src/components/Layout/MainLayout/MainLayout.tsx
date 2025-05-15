import { IonRouterOutlet } from "@ionic/react";
import Home from "../../../pages/Home";
import { Redirect, Route } from "react-router";

const MainLayout = () => {
  return (
    <IonRouterOutlet>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </IonRouterOutlet>
  );
};

export default MainLayout;
