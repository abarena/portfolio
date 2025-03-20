import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TechItem } from '../../models/tech';
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

    if (tech.type === "text") {
        return (
            <div className="tech-list__item__icon" style={style}>
                {tech.icon}
            </div>
        );
    }

   return (
        <FontAwesomeIcon
            icon={['fab', tech.icon]} 
            className="tech-list__item__icon"
            style={{color: tech.color}}
        />
    );
}
