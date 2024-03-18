import stylex from '@stylexjs/stylex';

import { movie } from '../../types/movie';

import { Thumbnail } from '../../Components/Thumbnail/Thumbnail';

type videoGalleryProps = {
  movies: Array<movie>;
};

const VideoGallery = ({ movies }: videoGalleryProps) => {
  return (
    <div {...stylex.props(styles.gallery)}>
      {movies.map((movie) => (
        <Thumbnail
          movie={movie}
          key={`${movie.seriesTitle}:S${movie.season}E${movie.episode}`}
        />
      ))}
    </div>
  );
};

export { VideoGallery };

const styles = stylex.create({
  gallery: {
    display: 'grid',
    gridTemplateRows: 'repeat( auto-fit, minmax(250px, 1fr) );',
    gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) );',
    gridGap: '1em',
  },
});
