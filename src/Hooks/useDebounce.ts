import debounce from "lodash.debounce";
import { useMemo, useCallback } from "react";

type SomeFunction = (...args: any[]) => void;

function useDebounce<Function extends SomeFunction>(
  cb: Function,
  delay: number
) {
  let timer;
  return useCallback(
    (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    },
    [cb, delay]
  );
}

export default useDebounce;
