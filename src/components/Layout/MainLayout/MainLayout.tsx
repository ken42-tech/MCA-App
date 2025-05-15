import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router";
import Home from "../../../pages/Home";

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
