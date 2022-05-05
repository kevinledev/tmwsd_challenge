import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.message;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createMessage(this.state)
      .then(() => window.location.reload())
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <div className="">
        <div className="">

        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="create-msg">
            <label className="">
              <div className="create-msg-header">
                Write a secret message
              </div>
              <div className="">
                <div className="field-heading">Title</div>
              </div>
              <div className="">
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.updateTitle}
                />
              </div>
            </label>
            <label className="">
              <div>
                <div className="field-heading">Body</div>
              </div>
              <textarea
                spellcheck="false"
                value={this.state.body}
                onChange={this.updateBody}
              />
            </label>
            <input id="submit-button" type="submit" value="Write message"></input>
          </div>
        </form>
      </div>
    );
  }
}
