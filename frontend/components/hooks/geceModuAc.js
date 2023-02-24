import React, { useState } from "react";
import localStorageKullan from "./useLocalStorageKullan";

const { setItem, getItem } = localStorageKullan();

export default function NightMode() {
  const [NightMode, setNightMode] = useState(getItem("NightMode"));

  const toggleMode = () => {
    setItem("NightMode", !NightMode);
    setNightMode(getItem("NightMode"));
  };
  return { NightMode, toggleMode };
}
