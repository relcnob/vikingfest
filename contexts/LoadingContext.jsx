import { createContext, useState } from "react";

export const LoadingContext = createContext(null);
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const value = {
    loading: [loading, setLoading],
    message: [message, setMessage],
  };

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};
