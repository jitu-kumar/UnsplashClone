import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { getApi } from "../services/get";

export const store = configureStore({
    reducer:{
        [getApi.reducerPath]: getApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApi.middleware)
})

setupListeners(store.dispatch)