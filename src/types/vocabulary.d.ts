export interface IVocabulary {
  name: string;
  partOfSpeech: string;
  collection: string;
  meaning: string;
  note?: string;
}

export interface ICollection {
  name: string;
  vocabularies: IVocabulary[];
  color?: string;
}
