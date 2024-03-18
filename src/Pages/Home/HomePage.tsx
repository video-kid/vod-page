import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Movies</h1>
      <Link to='list'>My List</Link>
    </div>
  );
};

export { HomePage };
