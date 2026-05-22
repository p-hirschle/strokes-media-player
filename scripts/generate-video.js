import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import ffprobePath from 'ffprobe-static';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

const inputImage = join(__dirname, '..', 'static', 'visuals', 'cowboy-bg.jpg');
const outputVideo = join(__dirname, '..', 'static', 'visuals', 'cowboy-riding.mp4');

console.log('Generating video...');

ffmpeg(inputImage)
  .inputOptions(['-loop 1', '-t 7'])
  .videoFilters([
    'zoompan=z=\'min(zoom+0.0015,1.1)\':d=210:x=\'iw/2-(iw/zoom/2)\':y=\'ih/2-(ih/zoom/2)\':s=1920x1080'
  ])
  .outputOptions([
    '-c:v libx264',
    '-tune stillimage',
    '-pix_fmt yuv420p',
    '-r 30',
    '-t 7'
  ])
  .on('end', () => {
    console.log('Video generated successfully at:', outputVideo);
  })
  .on('error', (err) => {
    console.error('Error generating video:', err);
  })
  .save(outputVideo);
