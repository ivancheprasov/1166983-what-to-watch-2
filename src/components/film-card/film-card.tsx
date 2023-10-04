import type { FilmPreview } from '../../types/film.ts';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../types/routes.ts';

interface FilmCardProps extends FilmPreview {
  onHover: (id: string) => void;
}

export default function FilmCard({ id, name, previewImage, onHover }: FilmCardProps) {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => onHover(id)}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoutes.Film.replace(':id', id)}>
          {name}
        </Link>
      </h3>
    </article>
  );
}
