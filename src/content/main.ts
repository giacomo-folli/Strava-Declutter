import "./styles.css";

const updateUI = (enabled: boolean) => {
  if (enabled) {
    document.body.classList.add('strava-declutter-active');
  } else {
    document.body.classList.remove('strava-declutter-active');
  }
};

// Add type for 'result'
chrome.storage.local.get(['extensionEnabled'], (result: { [key: string]: any }) => {
  updateUI(result.extensionEnabled !== false);
});

// Add type for 'changes'
chrome.storage.onChanged.addListener((changes: { [key: string]: chrome.storage.StorageChange }) => {
  if (changes.extensionEnabled) {
    updateUI(changes.extensionEnabled.newValue as boolean);
  }
});