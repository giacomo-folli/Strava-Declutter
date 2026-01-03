import "./styles.css";
import browser from "webextension-polyfill";

const updateUI = (enabled: boolean): void => {
  if (enabled) {
    document.body.classList.add('strava-declutter-active');
  } else {
    document.body.classList.remove('strava-declutter-active');
  }
};

// Initial check on page load using Promises
const initializeExtension = async () => {
  try {
    const result = await browser.storage.local.get(['extensionEnabled']);
    updateUI(result.extensionEnabled !== false);
  } catch (error) {
    console.error("Error accessing storage:", error);
  }
};

initializeExtension();

// Listen for changes using the polyfilled listener
browser.storage.onChanged.addListener((changes) => {
  if (changes.extensionEnabled) {
    updateUI(changes.extensionEnabled.newValue as boolean);
  }
});