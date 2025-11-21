type Scene = {
  id: string;
  title: string;
  description: string;
  image: string;
  animationClass: string;
};

import type { CSSProperties } from "react";

const scenes: Scene[] = [
  {
    id: "scene-1",
    title: "Daily Strain",
    description:
      "Close-up on weary eyes. Moody shadows capture the pressure of nonstop days and the dull sting of a tension headache.",
    image:
      "https://images.pexels.com/photos/3865713/pexels-photo-3865713.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1080",
    animationClass: "scene-one",
  },
  {
    id: "scene-2",
    title: "Sanctuary Arrival",
    description:
      "Transition into Bo Tree Ayurvedas. A glowing Kerala-inspired therapy room drenched in warm amber and gold highlights.",
    image:
      "https://images.pexels.com/photos/6621457/pexels-photo-6621457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1080",
    animationClass: "scene-two",
  },
  {
    id: "scene-3",
    title: "Shirodhara Calm",
    description:
      "Stream of warm herbal oil flows with hypnotic precision. The furrow softens, breathing slows, serenity dawns.",
    image:
      "https://images.pexels.com/photos/6621460/pexels-photo-6621460.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1080",
    animationClass: "scene-three",
  },
  {
    id: "scene-4",
    title: "Ayurvedic Touch",
    description:
      "Therapist’s rhythmic scalp massage balances energies. Fragrant botanicals and soft bells shape a restorative cocoon.",
    image:
      "https://images.pexels.com/photos/6621461/pexels-photo-6621461.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1080",
    animationClass: "scene-four",
  },
  {
    id: "scene-5",
    title: "Renewed Radiance",
    description:
      "Final close-up: skin luminous, expression light. Floating herbal motes glow in emerald and gold as peace settles in.",
    image:
      "https://images.pexels.com/photos/6621493/pexels-photo-6621493.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1080",
    animationClass: "scene-five",
  },
];

type ParticleSetting = { offset: string; x: string; scale: string };

const particleMap: ParticleSetting[] = [
  { offset: "0.0s", x: "10%", scale: "0.9" },
  { offset: "0.8s", x: "22%", scale: "0.75" },
  { offset: "1.6s", x: "35%", scale: "1.1" },
  { offset: "2.2s", x: "48%", scale: "0.95" },
  { offset: "3.0s", x: "62%", scale: "0.7" },
  { offset: "3.8s", x: "74%", scale: "1.05" },
  { offset: "4.6s", x: "88%", scale: "0.82" },
  { offset: "5.4s", x: "15%", scale: "0.68" },
  { offset: "6.1s", x: "28%", scale: "1.2" },
  { offset: "6.9s", x: "41%", scale: "0.96" },
  { offset: "7.6s", x: "56%", scale: "0.85" },
  { offset: "8.4s", x: "69%", scale: "1.15" },
  { offset: "9.2s", x: "82%", scale: "0.78" },
  { offset: "10.0s", x: "12%", scale: "0.92" },
  { offset: "10.7s", x: "24%", scale: "0.7" },
  { offset: "11.5s", x: "37%", scale: "1.08" },
  { offset: "12.3s", x: "51%", scale: "0.82" },
  { offset: "13.1s", x: "64%", scale: "0.94" },
  { offset: "13.8s", x: "77%", scale: "1.18" },
  { offset: "14.6s", x: "90%", scale: "0.88" },
  { offset: "15.4s", x: "18%", scale: "0.74" },
  { offset: "16.1s", x: "31%", scale: "1.05" },
  { offset: "16.9s", x: "45%", scale: "0.81" },
  { offset: "17.7s", x: "58%", scale: "1.12" },
];

export default function Home() {

  return (
    <div className="page">
      <div className="content">
        <header className="header">
          <h1>Bo Tree Ayurvedas</h1>
          <p className="subtitle">Shirodhara Instagram Reel — 20s cinematic flow</p>
        </header>

        <div className="reel-stage">
          <div className="reel-shell">
            <div className="reel-surface">
              <div className="light-vignette" />
              <div className="grain-overlay" />

              {scenes.map((scene) => (
                <figure
                  key={scene.id}
                  className={`scene ${scene.animationClass}`}
                  style={{ backgroundImage: `url(${scene.image})` }}
                >
                  <div className="scene-sheen" />
                  <figcaption>
                    <strong>{scene.title}</strong>
                    <span>{scene.description}</span>
                  </figcaption>
                </figure>
              ))}

              <div className="particles">
                {particleMap.map((particle, index) => {
                  const particleStyle = {
                    "--offset": particle.offset,
                    "--x": particle.x,
                    "--scale": particle.scale,
                  } as CSSProperties;

                  return (
                    <span
                      key={`particle-${index}`}
                      className="particle"
                      style={particleStyle}
                    />
                  );
                })}
              </div>
              <div className="glow-gradient" />
              <div className="timeline">
                <div className="timeline-progress" />
                <div className="tick-list">
                  <span>0s</span>
                  <span>3s</span>
                  <span>6s</span>
                  <span>12s</span>
                  <span>17s</span>
                  <span>20s</span>
                </div>
              </div>
            </div>
          </div>

          <aside className="scene-notes">
            <h2>Shot Breakdown</h2>
            <ol>
              {scenes.map((scene, index) => (
                <li key={`scene-note-${scene.id}`}>
                  <div className="timecode">
                    {index === 0
                      ? "0s – 3s"
                      : index === 1
                        ? "3s – 6s"
                        : index === 2
                          ? "6s – 12s"
                          : index === 3
                            ? "12s – 17s"
                            : "17s – 20s"}
                  </div>
                  <div className="note-body">
                    <strong>{scene.title}</strong>
                    <p>{scene.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="audio-block">
              <h3>Soundscape</h3>
              <p>
                Layer gentle tanpura drones with soft water percussion and low temple bells.
                Volume swells softly between transitions to underscore serenity.
              </p>
              <audio controls preload="auto" loop className="audio-player">
                <source
                  src="https://cdn.pixabay.com/audio/2022/10/18/audio_0b82daf1c5.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
