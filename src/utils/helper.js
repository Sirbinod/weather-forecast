export function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);

  // Get hours, minutes, and seconds
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Form the time string
  const timeString = `${hours}:${minutes}:${seconds}`;

  return timeString;
}
