import stylex from '@stylexjs/stylex';

import Thumbnail from '../../Components/Thumbnail/Thumbnail';

const moviesMockup = [
  { title: 'pigeon', description: 'pigeon golomp cute baby' },
  { title: 'pigeon', description: 'pigeon golomp cute baby' },
  { title: 'pigeon', description: 'pigeon golomp cute baby' },
  { title: 'pigeon', description: 'pigeon golomp cute baby' },
  { title: 'pigeon', description: 'pigeon golomp cute baby' },
  { title: 'pigeon', description: 'pigeon golomp cute baby' },
  { title: 'pigeon', description: 'pigeon golomp cute baby' },
  { title: 'pigeon', description: 'pigeon golomp cute baby' },
];

const VideoGallery = () => {
  return (
    <div {...stylex.props(styles.gallery)}>
      {moviesMockup.map((movie) => (
        <Thumbnail
          title={movie.title}
          description={movie.description}
        />
      ))}
    </div>
  );
};

export default VideoGallery;

const styles = stylex.create({
  gallery: {
    display: 'grid',
    gridTemplateRows: 'repeat( auto-fit, minmax(250px, 1fr) );',
    gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) );',
    gridGap: '1em',
  },
});
