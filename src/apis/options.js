export const options = {
  eternal: {
    cacheTime: Infinity,
    staleTime: Infinity,
    select: (data) => data.data.payload,
  },
};
