import { Dispatch, SetStateAction, useCallback, useState } from "react";

interface ReturnType {
  valBoolean: boolean;
  setValBoolean: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

function useBoolean(defaultValue?: boolean): ReturnType {
  const [valBoolean, setValBoolean] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValBoolean(true), []);
  const setFalse = useCallback(() => setValBoolean(false), []);
  const toggle = useCallback(() => setValBoolean((x) => !x), []);

  return { valBoolean, setValBoolean, setTrue, setFalse, toggle };
}

export default useBoolean;
