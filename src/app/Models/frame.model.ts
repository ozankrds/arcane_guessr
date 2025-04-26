export interface Frame {
  imageSrc: string;
  season: number;
  episode: number;
}

export const framesService: Frame[] = generateFrames();

function generateFrames(): Frame[] {
  const framesPerEpisode = {
    1: [5, 14, 12, 14, 7, 10, 12, 13, 12], // Season 1: E1 has 5 images, E2 has 14, etc.
    2: [9, 11, 11, 7, 9, 11, 7, 7, 7], // Season 2: E1 has 9 images, etc.
    // Add more seasons as needed
  };

  const frames: Frame[] = [];

  // Outer loop for going through seasons
  for (let [seasonStr, episodes] of Object.entries(framesPerEpisode)) {
    const season = +seasonStr;

    // Mid loop for going through episodes for each season
    for (let i = 0; i < episodes.length; i++) {
      const numOfFrame = episodes[i];
      const episode = i + 1;

      // Inner loop for going through frames for each episodes
      for (let frameNum = 1; frameNum < numOfFrame; frameNum++) {
        frames.push({
          imageSrc: `S${season}/E${episode}/${frameNum}.jpg`,
          season,
          episode,
        });
      }
    }
  }

  return frames;
}
