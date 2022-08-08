import { useEffect } from "react";
import Typed from "typed.js";

export const Typewriter: React.FC = () => {
  useEffect(() => {
    new Typed("#typewriter", {
      strings: ["home.", "grid.", "solar and storage.", "smart home IoT."],
      typeSpeed: 150,
      backDelay: 2000,
      startDelay: 500,
      backSpeed: 100,
      smartBackspace: false,
      loop: true,
    });
  }, []);
  return <span id="typewriter"></span>;
};
