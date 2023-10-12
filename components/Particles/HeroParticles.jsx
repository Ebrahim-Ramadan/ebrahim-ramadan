import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";
import TerminalSearch from '../TerminalSearch'
import Header from '../Header'

export const HeroParticles = () => {
  return (
    <div className="HeroParticles relative min-w-full min-h-screen z-0 fixed top-0 left-0 bg-black">

      <ParticlesComponent
        id="hero-particles"
        className="w-full  min-h-screen h-full z-[-555656565] fixed top-0 left-0 bg-black"
        particlesOptions={heroOptions}
      />
      <TerminalSearch classes="absolute top-0 left-0 z-10" />
      <Header classes="fixed top-0 right-0 z-10"/>

    </div>
  );
};
