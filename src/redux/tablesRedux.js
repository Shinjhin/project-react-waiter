//selectors

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPLOAD_TABLES = createActionName('UPLOAD_TABLES');
const UPDATE_INFO = createActionName('UPDATE_INFO');

// action creators
export const uploadTables = payload => ({ type: UPLOAD_TABLES, payload });
export const updateInfo = payload => ({ type: UPDATE_INFO, payload });
const url = "/api/tables";
export const fetchTables = () => {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(tables => dispatch(uploadTables(tables)))
  }
};

export const updateTables = (noweDane) => {
  return(dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(noweDane),
    };

    fetch(url + '/' + noweDane.id, options)
      .then(() => dispatch(updateInfo(noweDane)))
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPLOAD_TABLES:
      return [...action.payload];
    case UPDATE_INFO:
      statePart.filter(it => it.id === action.payload.id)[0].status = action.payload.status;
      statePart.filter(it => it.id === action.payload.id)[0].bill = action.payload.bill;
      statePart.filter(it => it.id === action.payload.id)[0].peopleAmount = action.payload.clients;
      statePart.filter(it => it.id === action.payload.id)[0].maxPeopleAmount = action.payload.maxClients;
      return statePart;
    default:
      return statePart;
  };
};

export default tablesReducer;