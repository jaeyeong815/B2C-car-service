const conversionDate = (date) => {
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const dayOfMonth = newDate.getDate();
  const dayOfWeek = getDayOfWeek(newDate.getDay());

  return `${month}월 ${dayOfMonth}일 (${dayOfWeek}) 부터`;
};

const getDayOfWeek = (dayOfWeek) => {
  switch (dayOfWeek) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
    default:
      return null;
  }
};

export default conversionDate;
