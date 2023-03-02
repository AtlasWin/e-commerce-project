import { useEffect, useRef } from "react";

export const useObserver = (
  ref: any,
  canLoad: Boolean,
  isLoading: Boolean,
  callback: Function
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    let cb = function (entries: any) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
