import { connect } from "react-redux";
import { getAllMessages } from "../actions/message_actions";
import MainPage from "./MainPage";

const mapStateToProps = (state) => {
  return {
    messages: Object.values(state.messages),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMessages: () => dispatch(getAllMessages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
