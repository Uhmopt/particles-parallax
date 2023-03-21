import Container from "@mui/material/Container";
import icon1 from "assets/img/1.svg";
import icon2 from "assets/img/2.svg";
import icon3 from "assets/img/3.svg";
import CustomText from "components/typography/CustomText";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="bg-bgColor h-screen pt-[64px]">
      <div className="relative h-full">
        <Container className="h-full" maxWidth="xl">
          <div className="flex pt-5 md:pt-24 h-full">
            <div className="w-full md:w-2/5">
              <CustomText className="text-white text-5xl" bold={700}>
                <span className="text-secondary">Horem</span> ipsum dolor Borem
                ipsum
              </CustomText>
              <CustomText className="text-gray-400 py-4 text-2xl">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.
              </CustomText>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 right-0">
          <Particles
            id="tsparticles"
            className="h-full"
            init={particlesInit}
            loaded={particlesLoaded}
            width={1100}
            height={700}
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 100,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              fullScreen: false,
              particles: {
                color: {
                  value: "#2875ab",
                },
                links: {
                  color: "#2875ab",
                  distance: 200,
                  enable: true,
                  opacity: 0.5,
                  width: 0.8,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 5,
                  straight: true,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 150,
                },
                opacity: {
                  value: 1,
                },
                shape: {
                  type: ["image"],
                  image: [
                    {
                      src: icon1,
                      height: 80,
                      width: 80,
                    },
                    {
                      src: icon2,
                      height: 50,
                      width: 50,
                    },
                    {
                      src: icon3,
                      height: 30,
                      width: 30,
                    },
                  ],
                },
                size: {
                  value: 10,
                  random: false,
                  anim: {
                    enable: true,
                    speed: 4,
                    size_min: 3,
                    sync: false,
                  },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
