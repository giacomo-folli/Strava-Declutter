import "./styles.css";

console.log("Strava declutter script active.");

const cleanFeed = () => {
  // Select all entries in the feed
  const feedEntries = document.querySelectorAll(".feed-entry");

  feedEntries.forEach((entry) => {
    const entryText = entry.textContent?.toLowerCase() || "";

    // Remove "Suggested" or "Promoted" content
    if (entryText.includes("suggerito") || entryText.includes("promosso")) {
      (entry as HTMLElement).remove();
    }
  });
};

// Create an observer to watch for new activities loading as you scroll
const feedObserver = new MutationObserver(() => {
  cleanFeed();
});

// Start observing the Dashboard Micro-Frontend container
const dashboardContainer = document.querySelector(".dashboard-mfe");
if (dashboardContainer) {
  feedObserver.observe(dashboardContainer, { childList: true, subtree: true });
}
