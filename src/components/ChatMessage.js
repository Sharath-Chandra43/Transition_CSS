import React from 'react';

const ChatMessage = ({ sender, senderName, timestamp, deliveryMethod, message }) => {
  return (
    <div className="chat-message">
      <div className="message-header">
        <span className="sender">{sender}</span>
        <div className='sender-details'>
            <span className="sender-name">{senderName}</span>
            <div className='timestap-delivery'>
                <span className="timestamp">{timestamp}</span>
                <span className="delivery-method">{deliveryMethod}</span>
            </div>
        </div>
      </div>
      <div className="message-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;