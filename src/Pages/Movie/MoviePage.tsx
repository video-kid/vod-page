import { useParams } from 'react-router-dom';
import { moviesMockup } from '../Gallery/moviesMockup';
import { Video } from '../../Components/Video/Video';

const getMovieDetails = (
  episodeId?: string,
  serieId?: string,
  seasonId?: string
) => {
  if (!episodeId || !serieId || !seasonId) {
    return undefined;
  }

  const movieDetails = moviesMockup.find(
    (movie) =>
      movie.serieId === serieId &&
      movie.season === seasonId &&
      movie.episode === episodeId
  );
  return movieDetails;
};

const MoviePage = () => {
  const { episodeId, serieId, seasonId } = useParams();
  const movieDetails = getMovieDetails(episodeId, serieId, seasonId);

  if (!movieDetails) {
    return <>...Loading</>;
  }
  return (
    <div>
      <h2>
        {movieDetails.seriesTitle}: {movieDetails.episodeTitle}
      </h2>
      <Video
        videoLink={movieDetails.movie}
        cover={movieDetails.cover}
        nextEpisodeLink={
          movieDetails.nextEpisodeId
            ? `/movie/${movieDetails.serieId}/${movieDetails.season}/${movieDetails.nextEpisodeId}`
            : undefined
        }
      />
    </div>
  );
};

export { MoviePage };
