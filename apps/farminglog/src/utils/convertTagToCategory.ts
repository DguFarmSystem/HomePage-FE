export const convertTagToCategory = (tag: string) => {
  switch (tag) {
    case 'PRAISE':
      return { name: '칭찬해요!', bgColor: '#FFF9A5', fontColor: '#A49900' };
    case 'THANK':
      return { name: '감사해요!', bgColor: '#8FB7F2', fontColor: '#1D5AB2' };
    case 'SUPPORT':
      return { name: '응원해요!', bgColor: '#FFC0CB', fontColor: '#E5435F' };
    default:
      return { name: tag, bgColor: '#eeeeee', fontColor: '#333' };
  }
};
