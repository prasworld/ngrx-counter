export const initialState: ICounterState = {
  counter: 0,
  text: 'Sample Text',
};

export interface ICounterState {
  counter: number;
  text: string;
}
