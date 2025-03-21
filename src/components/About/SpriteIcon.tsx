import { SpriteName } from "../../types/icon";

type SpriteIconProps = {
    spriteName: SpriteName;
    color?: string;
};

export default function SpriteIcon({ spriteName }: SpriteIconProps) {
    return (
        <svg className="tech-list__item__icon">
            <use href={`/__spritemap#sprite-${spriteName}`}/>
        </svg>
    );
};