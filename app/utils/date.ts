export const dateToMonthYear = (timeStamp: string) => {
  const date = new Date(timeStamp);
  const dateString = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return dateString;
};

export const reverseAndRemoveDateMinutes = (timeStamp: string) => {
  const date = new Date(timeStamp);
  const dateString = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return dateString;
};
