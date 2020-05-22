import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from './modules/rootState';
import logger from "redux-logger";

// setup 関数を用意してエクスポートする。
export const setupStore = () => {
	const middlewares = [...getDefaultMiddleware(), logger];

	// only development
	if (process.env.NODE_ENV === `development`) {
		middlewares.push(logger);
	}

	return configureStore({
		reducer: rootReducer,
		middleware: middlewares,

		devTools: true
	});
}
