export const shouldScroll = (e: React.UIEvent<HTMLElement>) => {
  const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

  return scrollHeight - scrollTop === clientHeight;
};
