import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../types/routes.ts';

export default function UserBlock() {
  const navigate = useNavigate();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar" onClick={() => navigate(AppRoutes.MyList)}>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link to={AppRoutes.Main} className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}
