import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialItem } from '../models/social';
import { socialListItems } from '../constants';

type SocialItemProps = {
    item: SocialItem;
}

const SocialListItem = ({ item }: SocialItemProps) => {
    return (
        <li key={item.id} className="social-list__item">
            <a className="social-list__item__link" href={item.href} target="_blank">
                <FontAwesomeIcon icon={['fab', item.iconName]}/>
            </a>
        </li>
    );
}


export default function Home() {

    return(
            <main className="home">
                <section className="headline">
                    <h1 className="headline__title">I'm Angel Barena</h1>
                    <h3 className="headline__subtitle">I make websites and applications</h3>
                </section>
                <section className="social">
                    <h2 className="social-title">find me in</h2>
                    <ul className="social-list">
                        {socialListItems.map((item) => <SocialListItem key={item.id} item={item} />)}
                    </ul>
                </section>
            </main> 
    );
}