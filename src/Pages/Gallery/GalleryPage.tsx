import { VideoGallery } from '../../Modules/VideoGallery/VideoGallery';
import { moviesMockup } from './moviesMockup';

const GalleryPage = () => {
  return (
    <div>
      <header>
        <h1>Gallery</h1>
      </header>
      <VideoGallery movies={moviesMockup} />
    </div>
  );
};

export { GalleryPage };
