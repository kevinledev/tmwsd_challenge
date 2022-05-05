import { connect } from "react-redux";
import { getOneMessage, deleteMessage } from "../../actions/message_actions";
import MessageShow from "./MessageShow";


const mapStateToProps = (state, ownProps) => {
  return {
    message: state.messages,
    messageId: window.location.href.slice(
      window.location.href.length - 24
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOneMessage: (messageId) => dispatch(getOneMessage(messageId)),
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageShow);
