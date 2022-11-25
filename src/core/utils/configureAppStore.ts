import { configureStore } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import { coreReducer } from "core/coreReducer";

import { appHistory } from './appHistory';


export const configureAppStore = () => {
  const reactRouterMiddleware = routerMiddleware(appHistory)
  const middlewares = [reactRouterMiddleware]

  return configureStore({
    reducer: coreReducer,
    middleware: () => [...middlewares],
    devTools: process.env.NODE_ENV !== "production",
  })
}