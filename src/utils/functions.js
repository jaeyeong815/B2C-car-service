export const getDateDiff = (createAt) => {
  const now = new Date();
  const createTime = new Date(createAt);

  const diffDate = now.getTime() - createTime.getTime();

  // 86400000 ms -> 24시간
  return Math.abs(diffDate) < 86400000 ? true : false;
};

export const dateConverter = (startdate) => {
  const startDate = new Date(startdate);
  const weekday = ['일', '월', '화', '수', '목', '금', '토', '일'];
  const month = startDate.getMonth() + 1;
  const date = startDate.getDate();
  const day = weekday[startDate.getDay()];
  return `${month}월 ${date}일 (${day}) 부터`;
};

export const segmentConverter = (segment) => {
  switch (segment) {
    case 'C':
      return '소형';
    case 'D':
      return '중형';
    case 'E':
      return '대형';
    default:
      return 'SUV';
  }
};

export const fuelTypeConverter = (fuelType) => {
  switch (fuelType) {
    case 'gasoline':
      return '가솔린';
    case 'ev':
      return '전기';
    default:
      return '하이브리드';
  }
};
