import { Context, createContext, useContext } from "react";

import Store, { IStore } from "./main";

let StoresContext: Context<IStore>;

export const createStore = () => {
  const store: IStore = Store.create({});
  StoresContext = createContext(store);
  if (process.env.NODE_ENV === "development") {
    // @ts-ignore
    window.store = store; // for debug
  }
};

export const useStore = (): IStore => useContext(StoresContext);
