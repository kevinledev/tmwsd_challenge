import { connect } from "react-redux";
import { createMessage } from "../../actions/message_actions";
import CreateMessage from "./CreateMessage";

const mapStateToProps = (state) => {
  return {
    message: { title: "", body: "" },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (message) => dispatch(createMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMessage);
