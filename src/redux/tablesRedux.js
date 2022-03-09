//selectors

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPLOAD_TABLES = createActionName('UPLOAD_TABLES');
const UPDATE_STATUS = createActionName('UPDATE_STATUS');

// action creators
export const uploadTables = payload => ({ type: UPLOAD_TABLES, payload });
export const updateStatus = payload => ({ type: UPDATE_STATUS, payload });
const url = "http://localhost:3131/api/tables";
export const fetchTables = () => {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(tables => dispatch(uploadTables(tables)))
    }
  };

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPLOAD_TABLES:
      return [...action.payload];
    case UPDATE_STATUS:
      statePart.filter(it => it.id === action.payload.id)[0].status = action.payload.status;
      return statePart;
    default:
      return statePart;
  };
};
export default tablesReducer;