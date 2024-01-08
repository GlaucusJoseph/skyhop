const bytesToMB = (bytes: number) => {
  const sizeInMB = bytes / 1048576;
  return sizeInMB.toFixed(2);
};

export default bytesToMB;
