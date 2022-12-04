import sliceReducer, { getPollutionData } from '../redux/Slice/slice';

const initialState = [];
describe('Tests Redux in project', () => {
  it('Tests if it returns same item in the array', () => {
    expect(
      sliceReducer(initialState, getPollutionData(['Albania'])),
    ).not.toEqual(['Albania']);
  });

  it('Tests if the state is initially an empty array', () => {
    expect(sliceReducer(initialState, [])).toEqual([]);
  });

  it('Tests if it returns a 5 items array', () => {
    expect(
      sliceReducer(
        initialState,
        getPollutionData([
          'Albania',
          'Andorra',
          'Austria',
          'Belarus',
          'Belgium',
        ]),
      ),
    ).not.toEqual([
      'Albania',
      'Andorra',
      'Austria',
      'Belarus',
      'Belgium',
    ]);
  });
});
