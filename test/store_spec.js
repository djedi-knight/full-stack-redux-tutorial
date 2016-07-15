import {expect} from 'chai';
import {Map, fromJS} from 'immutable';

import makeStore from '../src/store';

describe('Store', () => {

  it('Is a Redux Store Configured with the Correct Reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.equal(Map());

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Trainspotting', '28 Days Later']
    });
    expect(store.getState()).to.equal(fromJS({
      entries: ['Trainspotting', '28 Days Later']
    }));
  });

});
