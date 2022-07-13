import React from "react";
import "./App.scss";
import { AppProvider } from "./AppContext";
import Card from "./Card";
import "./App.scss";
import "./App_rwd.scss";

export function App() {
  return (
    <AppProvider>
      <div className="app__wrapper">
        <Card />
      </div>
    </AppProvider>
  );
}
