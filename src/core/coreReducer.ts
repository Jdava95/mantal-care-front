import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import { appHistory } from './utils/appHistory';

export const coreReducer = combineReducers({
  router: connectRouter(appHistory),
  core: combineReducers({})
})

export type RootState = ReturnType<typeof coreReducer>