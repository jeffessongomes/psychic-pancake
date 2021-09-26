import produce from "immer";

const INITIAL_STATE = {
  data: {}
};

const table = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_DATA_TO_TABLE": {
        const {data: {token, id}} = action.payload;

        draft.data = {
          token: token,
          id: id
        };
        
        break;
      }
      case "REMOVE_DATA_TO_TABLE": {
        draft.data = {};
        
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default table;
