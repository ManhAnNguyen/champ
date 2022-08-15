import { RefObject, useEffect } from "react";

function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: Event) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (
        !ref ||
        !ref.current ||
        ref?.current?.contains(event.target as HTMLElement)
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
