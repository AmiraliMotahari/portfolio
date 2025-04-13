export const Date_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  weekday: "short",
});

export const formatDate = (date: Date) => {
  const inputDate = new Date(date);
  inputDate.setUTCHours(0, 0, 0, 0); // Set to midnight in UTC

  const today = new Date();
  today.setUTCHours(0, 0, 0, 0); // Set to midnight in UTC

  const tomorrow = new Date(today);
  tomorrow.setUTCDate(today.getUTCDate() + 1); // Set tomorrow

  const yesterday = new Date(today);
  yesterday.setUTCDate(today.getUTCDate() - 1); // Set yesterday

  // Compare the given date with today, tomorrow, and yesterday
  if (inputDate.getTime() === today.getTime()) {
    return "Today";
  } else if (inputDate.getTime() === tomorrow.getTime()) {
    return "Tomorrow";
  } else if (inputDate.getTime() === yesterday.getTime()) {
    return "Yesterday";
  } else {
    // If none of the conditions match, return the formatted date
    return Date_FORMATTER.format(date);
  }
};
