import React from "react";
import { getAllMessages } from "../util/messages_api_util";
import "../App.css";
import { Link } from "react-router-dom";
import Createmessage_container from "./CreateMessage/createmessage_container";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllMessages();
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="main-page">
        <div className="title">TOP SECRET</div>
        <Createmessage_container />
        <div className="sub-title">Click on a message to reveal its contents</div>
        <div className="messages-remaining">{messages.length} messages remaining</div>
        <div className="messages">
          {messages.map((m, i) => {
            return (
              <Link to={`/messages/${m._id}`} state={{id:m._id}} className="message-card">
                  <div className="msg-number">{i + 1}</div>
                  <div className="msg-title">{m.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MainPage;
