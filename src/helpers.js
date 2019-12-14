export function getRating(number) {
  switch (Math.round(number)) {
    case 0:
      return 'Very Easy';
    case 1:
      return 'Easy';
    case 2:
      return 'Medium';
    case 3:
      return 'Hard';
    case 4:
      return 'Very Hard';
    case 5:
      return 'Deadly';
    default:
      return null;
  }
}

export function formatTime(time) {
  return `${Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)}:${
    time % 60 < 10 ? `0${time % 60}` : time % 60
  }`;
}
