import { Link, NavLink, Outlet } from 'react-router';
import { NavItem } from '../types/navigation';
import { navListItems, routingPrefix } from '../constants';

type ListItemProps = {
    item: NavItem;
}

const ListItem = ({ item }: ListItemProps) => {
    return (
        <li key={item.name} className="nav-list__item">
            <NavLink
                className={({ isActive }) => isActive
                    ? 'active nav-list__item__link'
                    : 'nav-list__item__link'
                }
                to={`${item.href}`}
            >
            {item.name}
            </NavLink>
        </li>
    );
}

export default function NavBar() {
    return(
        <>
            <nav className="nav">
                <div className="nav-logo">
                    <Link to={routingPrefix} className="nav-logo__link">
                        <svg className="nav-logo__icon">
                            <defs>
                                <mask id="mask" x="0" y="0" width="100%" height="100%">
                                <rect id="overlay" x="0" y="0" width="100%" height="100%" />
                                <text id="text" x="50%" y="-2" dy="35">ab</text>
                                </mask>
                            </defs>
                            <rect id="r" x="0" y="0" width="100%" height="100%" />
                        </svg>
                    </Link>
                </div>
                <ul className="nav-list">
                    {navListItems.map(
                        item => <ListItem key={item.name} item={item}/>
                    )}
                </ul>           
            </nav>
            <Outlet/>
        </>
    );
}