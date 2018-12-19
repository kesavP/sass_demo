import { connect } from "react-redux";
import PropertiesView from "../components/SnPropertiesView";
import {
  onPropPageButtonAction,
  pageNumberChange,
} from "../actions";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
  return {
    propertyArray: state.buttonFilter.properties,
    pageNumber: state.buttonFilter.pageNumber,
    pageSize : state.buttonFilter.pageSize,
    totalPages : state.buttonFilter.totalPages
  };
};

const mapDispatchToProps = dispatch => ({
  btnClickActionPropsPage: bindActionCreators(onPropPageButtonAction, dispatch),
  onPageNumberChange: bindActionCreators(pageNumberChange, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertiesView);
