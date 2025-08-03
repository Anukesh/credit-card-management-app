import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CreditCard } from "../types/card";

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getCards: builder.query<CreditCard[], void>({
      query: () => "data/cards.json",
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;
