export const getMonthName = (month) => {
  month = month.split("/")[1];
  const d = new Date();
  d.setMonth(month - 1);
  const monthName = d.toLocaleString("default", { month: "long" });
  return monthName;
};

export const getDueMessage = (status) => {
  if (status === "OVERDUE") {
    return "Was due on";
  } else if (status === "ISSUED") {
    return "Due on";
  }
  return "Paid on";
};

export const getStartingDate = (date) => {
  const splitDate = date.split("/");
  return `${splitDate[0]}/${Number(splitDate[1]) - 1}/${splitDate[2]}`;
};
