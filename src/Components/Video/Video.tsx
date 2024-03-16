import { useState } from 'react';
import clip from '../../assets/pigeon.mp4';
import cover from '../../assets/pigeon.png';

const Video = () => {
  const [duration, setDuration] = useState<string | number | null>(null);
  console.log('dur:', duration);

  return (
    <video
      controls
      disablePictureInPicture
      muted
      poster={cover}
      onLoadedMetadata={(e) =>
        setDuration((e.target as HTMLVideoElement).duration)
      }
      onEnded={() => {
        console.log('onEnded');
      }}
      onPlaying={(e) => {
        console.log(
          'run timer at, start inc',
          (e.target as HTMLVideoElement).currentTime
        );
      }}
      onPause={(e) => {
        console.log(
          'set timer value to, stop inc',
          (e.target as HTMLVideoElement).currentTime
        );
      }}
      onSeeked={(e) => console.log('seeking event end', e)}>
      <source
        src={clip}
        type='video/mp4'
      />
      <source
        src={clip}
        type='video/mp4'
      />
      Video cant be displayed :C
    </video>
  );
};

export default Video;
