import React, { useState, useEffect, useRef, useCallback } from "react";
import "./chat.css";
import { axiosInstance } from "../../../api/axiosInstance/axiosInstance";
import io from "socket.io-client";
import {
  ChevronLeft,
  Send,
  Paperclip,
  Smile,
  Plus,
  Search,
} from "lucide-react";

const SOCKET_URL = import.meta.env.VITE_BASE_ROUTE_JOBSTORM;

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const employeeId = localStorage.getItem("userId");
  const employeeName = localStorage.getItem("userName") || "Candidate";
  const employeeImage = localStorage.getItem("userProfilePic") || "";

  const socketRef = useRef();
  const chatMessagesRef = useRef(null);
  const selectedChatRef = useRef(null);

  // Auto scroll to bottom without moving the page window
  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    selectedChatRef.current = selectedChat;
  }, [selectedChat]);

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat?.messages]);

  useEffect(() => {
    // Connect to Socket.IO
    socketRef.current = io(SOCKET_URL);

    socketRef.current.on("receive_chat_message", (data) => {
      // data contains { room: chatId, messageData: {...} }
      setChats((prevChats) => {
        return prevChats.map((chat) => {
          if (chat._id === data.room) {
            const isSelected = selectedChatRef.current?._id === data.room;
            const newMessages = [...(chat.messages || []), data.messageData];

            if (isSelected) {
              axiosInstance
                .post("/employer/chat/mark-read", {
                  employeeId,
                  employerId: chat.employerId,
                  jobId: chat.jobId || null,
                  viewerType: "employee",
                })
                .catch(console.error);
            }

            return {
              ...chat,
              messages: newMessages,
              lastMessage: data.messageData.message,
              lastMessageTime: new Date().toISOString(),
              unreadCountEmployee: isSelected
                ? 0
                : (chat.unreadCountEmployee || 0) + 1,
            };
          }
          return chat;
        });
      });

      setSelectedChat((prev) => {
        if (prev && prev._id === data.room) {
          return {
            ...prev,
            messages: [...(prev.messages || []), data.messageData],
          };
        }
        return prev;
      });
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [employeeId]); // Added employeeId as we use it inside the socket listener for mark-read

  const fetchChats = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(
        `/employer/chat/employeedata/${employeeId}`,
      );
      if (res.data.success) {
        setChats(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching chats:", error);
    } finally {
      setLoading(false);
    }
  }, [employeeId]);

  useEffect(() => {
    if (employeeId) {
      fetchChats();
    }
  }, [employeeId, fetchChats]);

  const selectChat = (chat) => {
    setSelectedChat(chat);
    setIsMobileChatOpen(true);
    socketRef.current.emit("join_chat_room", chat._id);

    setChats((prev) =>
      prev.map((c) =>
        c._id === chat._id ? { ...c, unreadCountEmployee: 0 } : c,
      ),
    );

    axiosInstance
      .post("/employer/chat/mark-read", {
        employeeId,
        employerId: chat.employerId,
        jobId: chat.jobId || null,
        viewerType: "employee",
      })
      .catch(console.error);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!messageInput.trim() || !selectedChat) return;

    const messageData = {
      employeeId,
      employerId: selectedChat.employerId,
      jobId: selectedChat.jobId || null,
      message: messageInput.trim(),
      sender: "employee",
      employeeName,
      employeeImage,
      employerName: selectedChat.employerName,
      employerImage: selectedChat.employerImage,
    };

    try {
      const resp = await axiosInstance.post("/employer/sendchats", messageData);

      if (resp.data.success) {
        const newMessage = resp.data.data.message;

        // Update local state instantly
        const updatedMessages = [...(selectedChat.messages || []), newMessage];
        const updatedChat = {
          ...selectedChat,
          messages: updatedMessages,
          lastMessage: newMessage.message,
          lastMessageTime: new Date().toISOString(),
        };

        setSelectedChat(updatedChat);
        setChats((prev) =>
          prev.map((c) => (c._id === selectedChat._id ? updatedChat : c)),
        );

        // Let socket know
        socketRef.current.emit("send_chat_message", {
          room: selectedChat._id,
          messageData: newMessage,
        });

        setMessageInput("");
      }
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  const filteredChats = chats.filter((chat) =>
    (chat.employerName || "").toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const formatTime = (time) => {
    if (!time) return "";
    const date = new Date(time);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div
      className={`chat-container ${isMobileChatOpen ? "mobile-chat-open" : ""}`}
      style={{
        marginTop: "20px",
        height: "calc(100vh - 140px)",
        width: "calc(100% - 60px)",
      }}
    >
      <div className="chat-sidebar">
        <div className="chat-sidebar-header">
          <h2>Messages</h2>
          <button className="new-chat-btn">
            <Plus size={20} />
          </button>
        </div>

        <div className="chat-search">
          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="chat-list">
          {loading ? (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Loading chats...
            </p>
          ) : filteredChats.length === 0 ? (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              No conversations found
            </p>
          ) : (
            filteredChats.map((chat) => (
              <div
                key={chat._id}
                className={`chat-item ${selectedChat?._id === chat._id ? "active" : ""}`}
                onClick={() => selectChat(chat)}
              >
                <div className="chat-item-avatar">
                  <div className="avatar">
                    {chat.employerImage ? (
                      <img
                        src={chat.employerImage}
                        alt="E"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      chat.employerName?.charAt(0) || "C"
                    )}
                  </div>
                </div>
                <div className="chat-item-content">
                  <div className="chat-item-header">
                    <h4>{chat.employerName || "Company"}</h4>
                    <span className="chat-time">
                      {formatTime(chat.lastMessageTime)}
                    </span>
                  </div>
                  <div className="chat-item-footer">
                    <p className="last-message">{chat.lastMessage}</p>
                    {chat.unreadCountEmployee > 0 && (
                      <span className="unread-badge">
                        {chat.unreadCountEmployee}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="chat-main">
        {selectedChat ? (
          <>
            <div className="chat-header">
              <div className="chat-header-info">
                <button
                  className="back-btn d-md-none"
                  onClick={() => setIsMobileChatOpen(false)}
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="chat-header-avatar">
                  <div className="avatar">
                    {selectedChat.employerImage ? (
                      <img
                        src={selectedChat.employerImage}
                        alt="E"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      selectedChat.employerName?.charAt(0) || "C"
                    )}
                  </div>
                </div>
                <div>
                  <h3>{selectedChat.employerName || "Company"}</h3>
                  <span className="status">Online</span>
                </div>
              </div>
            </div>

            <div className="chat-messages" ref={chatMessagesRef}>
              {(selectedChat.messages || []).map((message, i) => {
                const isMine = message.sender === "employee";
                return (
                  <div
                    key={message._id || i}
                    className={`message ${isMine ? "message-mine" : "message-theirs"}`}
                  >
                    {!isMine && (
                      <div className="message-avatar">
                        {selectedChat.employerImage ? (
                          <img
                            src={selectedChat.employerImage}
                            alt="E"
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          selectedChat.employerName?.charAt(0) || "C"
                        )}
                      </div>
                    )}
                    <div className="message-content">
                      <div className="message-bubble">
                        <p>{message.message}</p>
                      </div>
                      <span className="message-time">
                        {formatTime(message.createdAt)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="chat-input-container">
              <form onSubmit={handleSendMessage} className="chat-input-form">
                <button type="button" className="attachment-btn">
                  <Paperclip size={20} />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="chat-input"
                />
                <button type="button" className="emoji-btn">
                  <Smile size={20} />
                </button>
                <button
                  type="submit"
                  className="send-btn"
                  disabled={!messageInput.trim()}
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              color: "#666",
            }}
          >
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
