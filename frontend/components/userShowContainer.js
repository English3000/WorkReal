import {connect} from 'react-redux';
import UserShow from './userShow';

const mapStateToProps = ({ session }) => ({currentUser: session.currentUser});

export default connect(mapStateToProps)(UserShow);
