import React, { Component } from 'react';
import {Widget, addResponseMessage} from 'react-chat-widget';

class ChatWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mounted:false,
      responseMessage: "Hello!",
    }
    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
  }

  async componentDidMount(){
    this.setState({mounted:true});
    addResponseMessage(this.state.responseMessage)
  }

  handleNewUserMessage = async (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    await this.props.handleUserUtterance(newMessage);
    await this.setState({responseMessage:this.props.responseMessage})
    this.state.chatPopup.addResponseMessage(this.state.responseMessage)
  }

  render(){
    return(
      <div className='App'>
        <Widget
          subtitle='test'
          title = 'Chat with me'
          handleNewUserMessage = {this.handleNewUserMessage}
          />
      </div>
    )
  }
}

export default ChatWidget;
