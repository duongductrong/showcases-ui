function useStyle() {
  const setProperty = (key: string, value: string) => {
    document.documentElement.style.setProperty(key, value);
  };

  const getProperty = () => {};

  return { setProperty, getProperty };
}

export default useStyle;
