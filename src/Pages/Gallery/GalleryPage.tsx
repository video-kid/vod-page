import Thumbnail from '../../Components/Thumbnail/Thumbnail';

const GalleryPage = () => {
  return (
    <div>
      <header>
        <h1>Gallery</h1>
      </header>
      <main>
        <Thumbnail
          title='pigeon'
          description='pigeon golomp cute baby'
        />
      </main>
    </div>
  );
};

export { GalleryPage };
