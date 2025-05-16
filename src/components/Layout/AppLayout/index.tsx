"use client";
import { IonContent, IonPage } from "@ionic/react";
import React, { ReactNode, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { navItems } from "./data";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const isMobile = true;

  return (
    <>
      {isMobile ? (
        <IonPage>
          <div className="flex flex-col h-[100dvh] relative">
            <Navbar />
            <IonContent className="flex-1 relative z-10">
              <div className="relative z-20 h-full px-4">{children}</div>
            </IonContent>
            <Footer navItems={navItems} />
          </div>
        </IonPage>
      ) : (
        <div className="w-full h-screen absolute bg-black flex items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl text-center max-w-[500px]">
            Currently desktop view is not available
          </h1>
        </div>
      )}
    </>
  );
};

export default AppLayout;
