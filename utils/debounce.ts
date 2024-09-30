type Timer = ReturnType<typeof setTimeout>;

const debounce = <T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void => {
  let timeout: Timer;
  return (...args: Parameters<T>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default debounce;
