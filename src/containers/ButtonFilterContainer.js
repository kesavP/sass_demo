import { connect } from 'react-redux';
import ButtonClick from '../components/ButtonClick';
import { onUserPageButtonAction } from '../actions';
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
    console.log("el,md;khbhb ",state);
    return {
      appName: state.buttonFilter.name,
      buttonFamily : state.buttonFilter.buttonFamily
    }};

    const mapDispatchToProps = dispatch => ({
        btnClickActionUsersPage: bindActionCreators(onUserPageButtonAction, dispatch)
      })

export default connect(mapStateToProps, mapDispatchToProps)(ButtonClick)