import { SVGIcon } from "../../models/icon";

type SpriteIconProps = {
    svgIcon?: SVGIcon;
    color?: string;
};

export default function SpriteIcon({ svgIcon }: SpriteIconProps) {
    return (
        svgIcon && <svg viewBox={svgIcon.viewBox} className="tech-list__item__icon">
            <use xlinkHref={svgIcon.xlinkHref}/>
        </svg>
    );
};