import stylex from '@stylexjs/stylex';

import { useState } from 'react';

import useStopWatch from '../../hooks/useStopWatch/useStopWatch';

type videoProps = {
  videoLink: string;
  cover: string;
  nextEpisodeLink?: string;
  showCTAAt?: number;
};

const Video = ({
  videoLink,
  cover,
  showCTAAt,
  nextEpisodeLink,
}: videoProps) => {
  const [duration, setDuration] = useState<number | null>(null);
  const showNextEpisodeCTAAt = showCTAAt ?? Math.round((duration ?? 0) * 0.8);

  const { currentTimerTime, startTimer, stopTimer, setTimer } = useStopWatch();

  const setTime = (selectedTime: number) => setTimer(Math.round(selectedTime));

  const shouldCTAShow: boolean =
    !!nextEpisodeLink && currentTimerTime > showNextEpisodeCTAAt;

  return (
    <div {...stylex.props(styles.videoWrapper)}>
      {shouldCTAShow ? (
        <button {...stylex.props(styles.videoCTA)}>Next episode</button>
      ) : null}
      <video
        controls
        disablePictureInPicture
        muted
        poster={cover}
        onLoadedMetadata={(e) =>
          setDuration((e.target as HTMLVideoElement).duration)
        }
        onEnded={stopTimer}
        onPlaying={startTimer}
        onPause={stopTimer}
        onSeeked={(e) => setTime((e.target as HTMLVideoElement).currentTime)}
        {...stylex.props(styles.video)}>
        <source
          src={videoLink}
          type='video/mp4'
        />
        Video cant be displayed :C
      </video>
    </div>
  );
};

export default Video;

const styles = stylex.create({
  videoWrapper: {
    width: '400px',
    position: 'relative',
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
  },
  videoCTA: {
    position: 'absolute',
    top: '0',
    right: '0',
  },
  video: {
    width: '100%',
  },
});
