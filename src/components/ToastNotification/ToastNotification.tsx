// components/ToastNotification.tsx
import { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onHide: () => void; // Add a callback to reset the state in the parent
  notiClass: string;
}

const ToastNotification = ({
  message,
  type,
  onHide,
  notiClass,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onHide(); // Reset the toast state in the parent component
    }, 6000); // Automatically hide the toast after 3 seconds

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [message, onHide]);

  if (!isVisible) return null;
  // console.log('isVisible',isVisible)
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: type === "success" ? "green" : "red",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        zIndex: 9999,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      className={notiClass}
    >
      {message}
    </div>
  );
};

export default ToastNotification;
