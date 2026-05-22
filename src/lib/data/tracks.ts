export interface Track {
  id: number;
  title: string;
  artist: string;
  src: string;
  cover: string;
  visual: string;
}

export const tracks: Track[] = [
  {
    id: 1,
    title: "Falling Out of Love",
    artist: "The Strokes",
    src: "/music/out-of-love.mp3",
    cover: "/visuals/cover-icon.jpg",
    visual: "/visuals/cowboy-bg.jpg"
  },
  {
    id: 2,
    title: "Going Shopping",
    artist: "The Strokes",
    src: "/music/shopping.mp3",
    cover: "/visuals/cover-icon.jpg",
    visual: "/visuals/cowboy-bg.jpg"
  }
];
