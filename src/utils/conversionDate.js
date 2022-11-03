const conversionDate = (date) => {
  const day = ['일', '월', '화', '수', '목', '금', '토'];
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const dayOfMonth = newDate.getDate();
  const dayOfWeek = day[newDate.getDay()];

  return `${month}월 ${dayOfMonth}일 (${dayOfWeek}) 부터`;
};

export default conversionDate;
