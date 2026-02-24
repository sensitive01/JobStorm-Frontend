import React, { useState } from "react";
import "./chat.css";

// Dummy data for chat conversations
const dummyChats = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "SJ",
    lastMessage: "Thanks for the interview opportunity!",
    time: "2 min ago",
    unread: 2,
    online: true,
    messages: [
      {
        id: 1,
        sender: "Sarah Johnson",
        text: "Hi! I saw the Senior Developer position posted.",
        time: "10:30 AM",
        isMine: false,
      },
      {
        id: 2,
        sender: "You",
        text: "Hello Sarah! Yes, we're actively hiring. Would you like to schedule an interview?",
        time: "10:32 AM",
        isMine: true,
      },
      {
        id: 3,
        sender: "Sarah Johnson",
        text: "That would be great! I'm available this week.",
        time: "10:35 AM",
        isMine: false,
      },
      {
        id: 4,
        sender: "You",
        text: "Perfect! How about Thursday at 2 PM?",
        time: "10:36 AM",
        isMine: true,
      },
      {
        id: 5,
        sender: "Sarah Johnson",
        text: "Thanks for the interview opportunity!",
        time: "10:38 AM",
        isMine: false,
      },
    ],
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "MC",
    lastMessage: "Can you share the job description?",
    time: "15 min ago",
    unread: 0,
    online: true,
    messages: [
      {
        id: 1,
        sender: "Michael Chen",
        text: "Hello, I'm interested in the Manager position.",
        time: "9:15 AM",
        isMine: false,
      },
      {
        id: 2,
        sender: "You",
        text: "Hi Michael! Great to hear from you.",
        time: "9:20 AM",
        isMine: true,
      },
      {
        id: 3,
        sender: "Michael Chen",
        text: "Can you share the job description?",
        time: "9:22 AM",
        isMine: false,
      },
    ],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "ER",
    lastMessage: "I have 5 years of experience in design.",
    time: "1 hour ago",
    unread: 1,
    online: false,
    messages: [
      {
        id: 1,
        sender: "Emily Rodriguez",
        text: "Hi! I'm a UI/UX Designer looking for opportunities.",
        time: "8:00 AM",
        isMine: false,
      },
      {
        id: 2,
        sender: "You",
        text: "Hello Emily! We have a Design position open.",
        time: "8:10 AM",
        isMine: true,
      },
      {
        id: 3,
        sender: "Emily Rodriguez",
        text: "I have 5 years of experience in design.",
        time: "8:15 AM",
        isMine: false,
      },
    ],
  },
  {
    id: 4,
    name: "David Park",
    avatar: "DP",
    lastMessage: "Looking forward to hearing from you.",
    time: "2 hours ago",
    unread: 0,
    online: false,
    messages: [
      {
        id: 1,
        sender: "David Park",
        text: "Hello, I submitted my application yesterday.",
        time: "7:30 AM",
        isMine: false,
      },
      {
        id: 2,
        sender: "You",
        text: "Hi David! We received your application and will review it soon.",
        time: "7:45 AM",
        isMine: true,
      },
      {
        id: 3,
        sender: "David Park",
        text: "Looking forward to hearing from you.",
        time: "7:50 AM",
        isMine: false,
      },
    ],
  },
  {
    id: 5,
    name: "Lisa Thompson",
    avatar: "LT",
    lastMessage: "What's the salary range for this position?",
    time: "3 hours ago",
    unread: 3,
    online: true,
    messages: [
      {
        id: 1,
        sender: "Lisa Thompson",
        text: "Hi, I'm interested in the Senior role.",
        time: "6:00 AM",
        isMine: false,
      },
      {
        id: 2,
        sender: "Lisa Thompson",
        text: "What's the salary range for this position?",
        time: "6:05 AM",
        isMine: false,
      },
    ],
  },
  {
    id: 6,
    name: "James Wilson",
    avatar: "JW",
    lastMessage: "Thank you for the information!",
    time: "Yesterday",
    unread: 0,
    online: false,
    messages: [
      {
        id: 1,
        sender: "James Wilson",
        text: "Hi, can you tell me about the company culture?",
        time: "Yesterday",
        isMine: false,
      },
      {
        id: 2,
        sender: "You",
        text: "We have a collaborative and innovative work environment.",
        time: "Yesterday",
        isMine: true,
      },
      {
        id: 3,
        sender: "James Wilson",
        text: "Thank you for the information!",
        time: "Yesterday",
        isMine: false,
      },
    ],
  },
];

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(dummyChats[0]);
  const [messageInput, setMessageInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      // In a real app, you would send the message to a backend
      console.log("Sending message:", messageInput);
      setMessageInput("");
    }
  };

  const filteredChats = dummyChats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div
      className="chat-container"
      style={{
        margin: 0,
        marginTop: 0,
        height: "calc(100vh - 140px)",
        width: "100%",
      }}
    >
      {/* Sidebar with chat list */}
      <div className="chat-sidebar">
        <div className="chat-sidebar-header">
          <h2>Messages</h2>
          <button className="new-chat-btn">+</button>
        </div>

        <div className="chat-search">
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="chat-list">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${
                selectedChat.id === chat.id ? "active" : ""
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="chat-item-avatar">
                <div className="avatar">{chat.avatar}</div>
                {chat.online && <span className="online-indicator"></span>}
              </div>
              <div className="chat-item-content">
                <div className="chat-item-header">
                  <h4>{chat.name}</h4>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <div className="chat-item-footer">
                  <p className="last-message">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="unread-badge">{chat.unread}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="chat-main">
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-header-avatar">
              <div className="avatar">{selectedChat.avatar}</div>
              {selectedChat.online && (
                <span className="online-indicator"></span>
              )}
            </div>
            <div>
              <h3>{selectedChat.name}</h3>
              <span className="status">
                {selectedChat.online ? "Online" : "Offline"}
              </span>
            </div>
          </div>
          <div className="chat-header-actions">
            <button className="icon-btn">📞</button>
            <button className="icon-btn">📹</button>
            <button className="icon-btn">⋮</button>
          </div>
        </div>

        <div className="chat-messages">
          {selectedChat.messages.map((message) => (
            <div
              key={message.id}
              className={`message ${
                message.isMine ? "message-mine" : "message-theirs"
              }`}
            >
              {!message.isMine && (
                <div className="message-avatar">{selectedChat.avatar}</div>
              )}
              <div className="message-content">
                <div className="message-bubble">
                  <p>{message.text}</p>
                </div>
                <span className="message-time">{message.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-input-container">
          <form onSubmit={handleSendMessage} className="chat-input-form">
            <button type="button" className="attachment-btn">
              📎
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="chat-input"
            />
            <button type="button" className="emoji-btn">
              😊
            </button>
            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
