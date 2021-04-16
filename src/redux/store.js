import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist"; // it lets the browser cache our store depending on some configuration

import { logger } from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
