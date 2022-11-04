import { Link } from 'react-router-dom';
import { menu } from '../../data/menuData';
import { useAuth } from '../../hooks/useAuth';

const Menu = () => {
  const auth = useAuth();
  return(
    <nav>
      <ul>
        {menu.map( item => {
          if(item?.privateOnly && auth?.user) return null
          if(item.private && !auth?.user) return null
          return (
            <li key={item.name}>
              <Link to={item.to}>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { Menu };