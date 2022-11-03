export const getDateDiff = (createAt) => {
  const now = new Date();
  const createTime = new Date(createAt);

  const diffDate = now.getTime() - createTime.getTime();

  // 86400000 ms -> 24시간
  return Math.abs(diffDate) < 86400000 ? true : false;
};
