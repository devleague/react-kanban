import { ADD_CARD } from '../actions';

let payloadId = 5;

const initialState = {
  cards: [
    {
      id: 1,
      title: `Make Cookies`,
      body: 'Need cookies for party, make chocolate chip',
      priority_id: '3',
      status_id: '1',
      created_by: '0',
      assigned_to: '0'
    },
    {
      id: 2,
      title: `Buy Pizza`,
      body: 'Need 10 pizza to feed everyone at the party',
      priority_id: '2',
      status_id: '1',
      created_by: '0',
      assigned_to: '1'
    },
    {
      id: 3,
      title: 'Clean House',
      body: 'Dont want guests seeing a dirty house',
      priority_id: '2',
      status_id: '2',
      created_by: '0',
      assigned_to: '0'
    },
    {
      id: 4,
      title: 'Choose games',
      body: 'Select games to play with everyone and check they work',
      priority_id: '3',
      status_id: '3',
      created_by: '0',
      assigned_to: '1'
    }
  ],
}

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      action.payload.id = payloadId++;
      return Object.assign({}, state, { cards: [...state.cards, action.payload] });
    // case SELECT_CARD:
    //   break;
    // case CLEAR_CARD:
    //   break;
    default:
      return state;
  };
};

export default cardReducer;