import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FrozenCardsState {
  frozenCardIds: number[];
}

// Load frozen cards from localStorage
const loadFrozenCards = (): number[] => {
  try {
    const saved = localStorage.getItem("frozenCards");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error loading frozen cards from localStorage:", error);
    return [];
  }
};

// Save frozen cards to localStorage
const saveFrozenCards = (frozenCardIds: number[]) => {
  try {
    localStorage.setItem("frozenCards", JSON.stringify(frozenCardIds));
  } catch (error) {
    console.error("Error saving frozen cards to localStorage:", error);
  }
};

const initialState: FrozenCardsState = {
  frozenCardIds: loadFrozenCards(),
};

const frozenCardsSlice = createSlice({
  name: "frozenCards",
  initialState,
  reducers: {
    freezeCard: (state, action: PayloadAction<number>) => {
      const cardId = action.payload;
      if (!state.frozenCardIds.includes(cardId)) {
        state.frozenCardIds.push(cardId);
        saveFrozenCards(state.frozenCardIds);
      }
    },
    unfreezeCard: (state, action: PayloadAction<number>) => {
      const cardId = action.payload;
      state.frozenCardIds = state.frozenCardIds.filter((id) => id !== cardId);
      saveFrozenCards(state.frozenCardIds);
    },
    toggleCardFreeze: (state, action: PayloadAction<number>) => {
      const cardId = action.payload;
      if (state.frozenCardIds.includes(cardId)) {
        state.frozenCardIds = state.frozenCardIds.filter((id) => id !== cardId);
      } else {
        state.frozenCardIds.push(cardId);
      }
      saveFrozenCards(state.frozenCardIds);
    },
  },
});

export const { freezeCard, unfreezeCard, toggleCardFreeze } =
  frozenCardsSlice.actions;
export default frozenCardsSlice.reducer;
