import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TechItem } from '../../types/tech';
import SpriteIcon from './SpriteIcon';
import { useMemo } from 'react';

type IconProps = {
    tech: TechItem;
};

export default function Icon({ tech }: IconProps) {
    const style = useMemo(() => ({
        color: tech.color,
        fontSize: "3rem",
        lineHeight: "3.6rem",
        fontWeight: "bold",
    }), [tech.color]);

    if (tech.type === "text" && tech.text) {
        return (
            <div className="tech-list__item__icon" style={style}>
                {tech.text}
            </div>
        );
    }

    if (tech.type === "sprite" && tech.sprite) {
        return <SpriteIcon spriteName={tech.sprite}/>;
    }
    

    if (tech.type === "fa" && tech.iconName) {
        return (
          <FontAwesomeIcon
            icon={['fab', tech.iconName]}
            className="tech-list__item__icon"
            style={{ color: tech.color }}
          />
        );
      }
    
    return null;
}
