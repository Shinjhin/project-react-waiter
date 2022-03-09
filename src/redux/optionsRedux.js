// selectors

// actions
const createActionName = actionName => `app/options/${actionName}`;
const UPLOAD_OPTIONS = createActionName('UPLOAD_OPTIONS');

// action creators
export const uploadOptions = payload => ({ type: UPLOAD_OPTIONS, payload });
const url = "http://localhost:3131/api/options";
export const fetchOptions = () => {
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(options => dispatch(uploadOptions(options)))
    }
};

const optionsReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPLOAD_OPTIONS:
            return [...action.payload]
        default:
            return statePart;
    };
};

export default optionsReducer;
