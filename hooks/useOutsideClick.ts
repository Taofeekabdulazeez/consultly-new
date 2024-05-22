import { useEffect, useRef } from "react";

export function useOustideClick(handler: any, listenCapturing = true) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(
    function () {
      // function handleClick(event: MouseEvent<HTMLElement>) {
      //   if (ref.current && !ref.current.contains(event.target as HTMLElement))
      //     handler();
      // }

      document.addEventListener(
        "click",
        (event) => {
          if (ref.current && !ref.current.contains(event.target as HTMLElement))
            handler();
        },
        listenCapturing
      );

      return () =>
        document.removeEventListener(
          "click",
          (event) => {
            if (
              ref.current &&
              // eslint-disable-next-line react-hooks/exhaustive-deps
              !ref.current.contains(event.target as HTMLElement)
            )
              handler();
          },
          listenCapturing
        );
    },
    [handler, listenCapturing]
  );

  return ref;
}
