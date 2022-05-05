import React from "react";
import { Link } from "react-router-dom";

class MessageShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let messageId = this.props.messageId;

    this.props.getOneMessage(messageId);
  }

  componentWillUnmount() {
    let messageId = this.props.messageId;
    this.props.deleteMessage(messageId).then(() => window.location.reload());
  }

  render() {
    const { message } = this.props;
    return (
      <div className="message-show">
        <Link to="/" className="linkback">
          Go back to messages
        </Link>
        <div className="message-show-heading">
          This message will self-destruct when you leave
          the page.
        </div>
        <div className="show-card">
          <div className="show-title">{message.title}</div>
          <div className="show-body">{message.body}</div>
        </div>
      </div>
    );
  }
}

export default MessageShow;
