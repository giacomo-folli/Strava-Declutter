import { useEffect, useState } from "react";

export default function Popup() {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);

  useEffect(() => {
    chrome.storage.local.get(
      ["extensionEnabled"],
      (result: { [key: string]: any }) => {
        setIsEnabled(result.extensionEnabled !== false);
      },
    );
  }, []);

  const toggleExtension = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    // Save the new state to storage
    chrome.storage.local.set({ extensionEnabled: newState });
  };

  return (
    <div style={{ padding: "1rem", textAlign: "center", minWidth: "150px" }}>
      <h3>Strava Cleaner</h3>
      <button
        onClick={toggleExtension}
        style={{
          padding: "8px 16px",
          backgroundColor: isEnabled ? "#FC5200" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isEnabled ? "ON" : "OFF"}
      </button>
    </div>
  );
}
