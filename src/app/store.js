import { configureStore } from "@reduxjs/toolkit";
import RouteMapper from "./features/urlMapper";

export const store = configureStore({
    reducer:{
        urlMapper:RouteMapper,
    }
});