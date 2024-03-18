import { createBrowserRouter } from 'react-router-dom';
import { GalleryPage } from './Pages/Gallery/GalleryPage';
import { ErrorPage } from './error-page';
import { MoviePage } from './Pages/Movie/MoviePage';
import { HomePage } from './Pages/Home/HomePage';

export const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <HomePage />,
  },
  {
    path: 'list',
    element: <GalleryPage />,
  },
  {
    path: 'movie/:serieId/:seasonId/:episodeId',
    element: <MoviePage />,
  },
]);
