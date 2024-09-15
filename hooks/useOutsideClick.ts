import { useEffect, useRef, MutableRefObject } from 'react';

interface RegisteredComponent<T> {
  ref: MutableRefObject<T | null>;
  callback: () => void;
}

const registeredComponents = new Set<RegisteredComponent<HTMLElement>>();

function handleGlobalClick(event: MouseEvent) {
  registeredComponents.forEach(({ ref, callback }) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  });
}

function useOutsideClick<T extends HTMLElement>(callback: () => void): MutableRefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const component = { ref, callback };
    registeredComponents.add(component);

    if (registeredComponents.size === 1) {
      document.addEventListener('mousedown', handleGlobalClick);
    }

    return () => {
      registeredComponents.delete(component);

      if (registeredComponents.size === 0) {
        document.removeEventListener('mousedown', handleGlobalClick);
      }
    };
  }, [callback]);

  return ref;
}

export default useOutsideClick;
