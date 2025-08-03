import { configureStore } from "@reduxjs/toolkit";
import creditCardReducer from "./creditCardSlice";
import frozenCardsReducer from "./frozenCardsSlice";
import { cardsApi } from "./cardsApi";

export const store = configureStore({
  reducer: {
    creditCards: creditCardReducer,
    frozenCards: frozenCardsReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
