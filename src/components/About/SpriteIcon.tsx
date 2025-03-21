import { SpriteName } from "../../types/icon";

type SpriteIconProps = {
    spriteName: SpriteName;
    color?: string;
};

const viewBoxMap: Record<SpriteName, string> = {
    babel: "0 0 512 200",
    bootstrap4: "0 0 256 256",
    express: "0 0 512 149",
    photoshop: "0 0 24 24",
    socketio: "0 0 256 256",
    webpack: "0 0 256 290"
}

export default function SpriteIcon({ spriteName }: SpriteIconProps) {
    return (
        <svg viewBox={viewBoxMap[spriteName]} className="tech-list__item__icon">
            <use href={`/__spritemap#sprite-${spriteName}`}/>
        </svg>
    );
};