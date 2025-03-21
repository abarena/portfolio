import { SVGIcon } from "../../types/SVGIcon";
import sprite from '/sprite.svg';

type SpriteIconProps = {
    icon: SVGIcon;
    color?: string;
};

export default function SpriteIcon({ icon }: SpriteIconProps) {
    return (
        <svg className="tech-list__item__icon">
            <use href={`${sprite}#${icon.name}`}/>
        </svg>
    );
};