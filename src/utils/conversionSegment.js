const conversionSegment = (segment) => {
  switch (segment) {
    case 'C':
      return '소형';
    case 'D':
      return '중형';
    case 'E':
      return '대형';
    case 'SUV':
      return 'SUV';
    default:
      return segment;
  }
};

export default conversionSegment;
