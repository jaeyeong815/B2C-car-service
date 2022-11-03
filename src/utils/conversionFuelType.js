const conversionFuelType = (fuelType) => {
  switch (fuelType) {
    case 'gasoline':
      return '가솔린';
    case 'ev':
      return '전기';
    case 'hybrid':
      return '하이브리드';
    default:
      return null;
  }
};

export default conversionFuelType;
