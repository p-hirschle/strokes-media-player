import { writable, derived, type Writable } from 'svelte/store';
import { Howl, type HowlCallback } from 'howler';
import { tracks, type Track } from '$lib/data/tracks';

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
}

const createPlayerStore = () => {
  const { subscribe, set, update }: Writable<PlayerState> = writable({
    currentTrack: null,
    isPlaying: false,
    volume: 0.7,
    progress: 0,
    duration: 0
  });

  let howl: Howl | null = null;
  let currentIndex = 0;

  const loadTrack = (index: number) => {
    currentIndex = index;
    const track = tracks[index];

    if (howl) {
      howl.unload();
    }

    update(state => ({
      ...state,
      currentTrack: track,
      progress: 0,
      duration: 0
    }));

    howl = new Howl({
      src: [track.src],
      html5: true,
      volume: 0.7,
      onload: function() {
        update(state => ({
          ...state,
          duration: howl?.duration() || 0
        }));
      },
      onplay: function() {
        update(state => ({ ...state, isPlaying: true }));
      },
      onpause: function() {
        update(state => ({ ...state, isPlaying: false }));
      },
      onstop: function() {
        update(state => ({ ...state, isPlaying: false, progress: 0 }));
      },
      onend: function() {
        next();
      },
      onseek: function() {
        update(state => ({
          ...state,
          progress: howl?.seek() || 0
        }));
      }
    });

    setInterval(() => {
      if (howl && howl.playing()) {
        update(state => ({
          ...state,
          progress: howl.seek() || 0
        }));
      }
    }, 100);
  };

  const play = () => {
    if (!howl) {
      loadTrack(0);
    }
    howl?.play();
  };

  const pause = () => {
    howl?.pause();
  };

  const togglePlay = () => {
    if (!howl) {
      loadTrack(0);
    } else {
      if (howl.playing()) {
        pause();
      } else {
        play();
      }
    }
  };

  const next = () => {
    const nextIndex = (currentIndex + 1) % tracks.length;
    loadTrack(nextIndex);
    play();
  };

  const previous = () => {
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    loadTrack(prevIndex);
    play();
  };

  const setVolume = (vol: number) => {
    update(state => ({ ...state, volume: vol }));
    howl?.volume(vol);
  };

  const seek = (time: number) => {
    howl?.seek(time);
  };

  const selectTrack = (index: number) => {
    loadTrack(index);
    play();
  };

  return {
    subscribe,
    play,
    pause,
    togglePlay,
    next,
    previous,
    setVolume,
    seek,
    selectTrack
  };
};

export const player = createPlayerStore();
