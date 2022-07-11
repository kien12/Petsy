import GlobalNavBar from "./global_navbar";
import { connect } from 'react-redux';
import { signup, login } from '../../actions/user_action';

export default connect(null, null)(GlobalNavBar);