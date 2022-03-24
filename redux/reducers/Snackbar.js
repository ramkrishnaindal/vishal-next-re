import { HYDRATE } from "next-redux-wrapper";
const Snackbar = (state = {}, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state, // use previous state
                ...action.payload, // apply delta from hydration
            };
        case "SNACKBAR_SUCCESS":
            return {
                ...state,
                successSnackbarOpen: true,
                successSnackbarMessage: action.message,
                snackbartype: "success",
            };

        case "SNACKBAR_FAIL":
            return {
                ...state,
                successSnackbarOpen: true,
                successSnackbarMessage: action.message,
                snackbartype: "error",

            };

        case "SNACKBAR_CLEAR":
            return {
                ...state,
                successSnackbarOpen: false,
                errorSnackbarOpen: false,
                infoSnackbarOpen: false
            };
        default:
            return state;
    }
};

export default Snackbar;