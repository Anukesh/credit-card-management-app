import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CreditCard } from "../types/card";

interface CreditCardState {
  cards: CreditCard[];
}

// Extract localStorage logic from useLocalStorage hook
const STORAGE_KEY = "creditCards";

const getInitialCards = (): CreditCard[] => {
  const localValue = localStorage.getItem(STORAGE_KEY);
  if (localValue !== null) {
    try {
      return JSON.parse(localValue) as CreditCard[];
    } catch (e) {
      console.warn(`Error parsing localStorage key "${STORAGE_KEY}":`, e);
    }
  }
  return [];
};

const saveCardsToStorage = (cards: CreditCard[]) => {
  if (cards !== undefined && cards !== null) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
};

const initialState: CreditCardState = {
  cards: getInitialCards(),
};

const creditCardSlice = createSlice({
  name: "creditCards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CreditCard>) => {
      state.cards.push(action.payload);
      saveCardsToStorage(state.cards);
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
      saveCardsToStorage(state.cards);
    },
  },
});

export const { addCard, deleteCard } = creditCardSlice.actions;
export default creditCardSlice.reducer;
