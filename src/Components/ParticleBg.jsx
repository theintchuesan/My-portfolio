import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      options={{
  background: {
    color: { value: "transparent" } // keep your bg-[#1A0B2E]
  },
  fpsLimit: 60,
  particles: {
    color: { value: "#c084fc" }, // soft purple
    links: {
      enable: true,
      color: "#c084fc",
      distance: 120,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8, // slower = more premium
    },
    number: {
      value: 50,
    },
    opacity: {
      value: 0.3,
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
  
}}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;