// import React, { useState } from "react";
// import "./Chatbot.css";

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [problem, setProblem] = useState("");
//   const [messages, setMessages] = useState([
//     { from: "bot", text: "Hello! Please enter your Email-Id." }
//   ]);

//   const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   const isPhoneValid = phone.replace(/\D/g, "").length === 10;

//   const handleUserInput = (value) => {
//     let newMessages = [...messages, { from: "user", text: value }];

//     if (step === 1) {
//       setEmail(value);
//       if (isEmailValid) {
//         newMessages.push({ from: "bot", text: "Great! Now please enter your 10-digit phone number." });
//         setStep(2);
//       } else {
//         newMessages.push({ from: "bot", text: "Invalid email. Please try again." });
//       }
//     } 
//     else if (step === 2) {
//       setPhone(value);
//       if (isPhoneValid) {
//         newMessages.push({ from: "bot", text: "Thanks! Now tell me your problem." });
//         setStep(3);
//       } else {
//         newMessages.push({ from: "bot", text: "Phone must be exactly 10 digits." });
//       }
//     } 
//     else if (step === 3) {
//       setProblem(value);
//       newMessages.push({ from: "bot", text: "Got it! We will get back to you soon. ✅" });
//       setStep(4);
//     }

//     setMessages(newMessages);
//   };

//   const [inputValue, setInputValue] = useState("");

//   const handleSend = () => {
//     if (inputValue.trim() !== "") {
//       handleUserInput(inputValue.trim());
//       setInputValue("");
//     }
//   };

//   return (
//     <>
//       <div className="chatbot-button" onClick={() => setIsOpen(true)}>
//            Chat With Us  
//       </div>

//       <div className={`chatbot-window ${isOpen ? "open" : ""}`}>
//         <div className="chatbot-header">
//           <span>Chatbot</span>
//           <button onClick={() => setIsOpen(false)}>✖</button>
//         </div>
//         <div className="chatbot-body">
//           {messages.map((msg, index) => (
//             <p
//               key={index}
//               className={msg.from === "bot" ? "bot-message" : "user-message"}
//             >
//               {msg.text}
//             </p>
//           ))}
//         </div>
//         {step !== 4 && (
//           <div className="chatbot-input">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             />
//             <button onClick={handleSend}>Send</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! Please enter your Email-Id." }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleUserInput = (value) => {
    let newMessages = [...messages, { from: "user", text: value }];

    if (step === 1) {
      setEmail(value);
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (isEmailValid) {
        newMessages.push({ from: "bot", text: "Great! Now please enter your 10-digit phone number." });
        setStep(2);
      } else {
        newMessages.push({ from: "bot", text: "❌ Invalid email format. Please try again." });
      }
    } 
    else if (step === 2) {
      setPhone(value);
      const isPhoneValid = value.replace(/\D/g, "").length === 10;
      if (isPhoneValid) {
        newMessages.push({ from: "bot", text: "Thanks! Now tell me your problem." });
        setStep(3);
      } else {
        newMessages.push({ from: "bot", text: "📞 Phone must be exactly 10 digits." });
      }
    } 
    else if (step === 3) {
      setProblem(value);
      newMessages.push({ from: "bot", text: "✅ Got it! We will get back to you soon." });
      setStep(4);
    }

    setMessages(newMessages);
  };

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      handleUserInput(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <>
      {/* Side Tab */}
      <div className="chatbot-side-tab" onClick={() => setIsOpen(true)}>
        Chat With Us
      </div>

      {/* Floating Button */}
      <div className="chatbot-button " onClick={() => setIsOpen(true)}>
        💬
      </div>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <span>Chatbot</span>
          <button onClick={() => setIsOpen(false)}>✖</button>
        </div>

        <div className="chatbot-body">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={msg.from === "bot" ? "bot-message" : "user-message"}
            >
              {msg.text}
            </p>
          ))}
        </div>

        {step !== 4 && (
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        )}
      </div>
    </>
  );
}
