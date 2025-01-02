import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@src/app';
import {ICollection, IVocabulary} from '@src/types/vocabulary';

interface InitialState {
  collections: ICollection[]
  vocabularies: IVocabulary[];
}

const initialState: InitialState = {
  collections: [],
  vocabularies: []
}

const vocabManagementSlice = createSlice({
  initialState,
  name: 'vocabManagement',
  reducers: {
    createCollection: (state, {payload}: PayloadAction<ICollection>) => {
      state.collections.push({ ...payload, vocabularies: [] });
      return state
    },
    addNewVocabulary: (
      state,
      action: PayloadAction<IVocabulary>,
    ) => {
      const collectionExist = state.collections.find(item => item.name === action.payload.collection)
      if (!collectionExist) {
        console.log(`${action.payload.collection} is not already exists`);
        return;
      }
      collectionExist.vocabularies.push(action.payload)
      return state;
    },
  },
});

export const collectionsSelector = (state: RootState) => state.vocabManagement.collections

export const {} = vocabManagementSlice.actions;
export default vocabManagementSlice.reducer
