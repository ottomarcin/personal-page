import { useEffect } from 'react';

export default function useMouseWheel(handleWheel) {
  useEffect(() => {
    // add listener on wheel on component mounting
    window.addEventListener('wheel', handleWheel);
    return () => {
      // remove listener on wheel on component unmounting
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
}
