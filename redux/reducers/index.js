import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";
import PropertyReducer from "./PropertyReducer";
import PropertyDetailReducer from "./PropertyDetailReducer";
import PostPropertyReducer from "./PostPropertyReducer";
import contactus from "./ContactusReducer";
import snackbar from "./Snackbar";
import verification from "./VerificationReducer";
import RouteReducer from "./RouteReducer";
const reducers = {
  Login: LoginReducer,
  Register: RegisterReducer,
  property: PropertyReducer,
  PropertyDetail: PropertyDetailReducer,
  PostProperty: PostPropertyReducer,
  contactus: contactus,
  snackbar: snackbar,
  verification: verification,
  route: RouteReducer,
};
export default reducers;
