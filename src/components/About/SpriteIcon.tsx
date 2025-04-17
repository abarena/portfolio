import { SpriteName } from "../../types/icon";

type SpriteIconProps = {
    spriteName: SpriteName;
    color?: string;
};

const viewBoxMap: Record<SpriteName, string> = {
    bootstrap4: "0 0 256 256",
    express: "0 0 128 128",
    photoshop: "0 0 24 24",
    socketio: "0 0 256 256",
    webpack: "0 0 256 290",
    tailwind: "0 0 128 128",
    nextjs: "0 0 128 128",
    mobx: "0 0 128 128",
    typescript: "0 0 128 128",
    redux: "0 0 128 128",
    nestjs: "0 0 128 128",
    vite: "0 0 128 128",
    babel: "0 0 128 128",
    eslint: "0 0 128 128",
    postgres: "0 0 128 128",
    mongodb: "0 0 128 128",
    jest: "0 0 128 128",
    githubactions: "0 0 128 128",
    git: "0 0 128 128",
    github: "0 0 128 128",
    gitlab: "0 0 128 128",
    bitbucket: "0 0 128 128",
    graphql: "0 0 128 128",
    aws: "0 0 128 128",
    docker: "0 0 128 128",
}

export default function SpriteIcon({ spriteName }: SpriteIconProps) {
    return (
        <svg viewBox={viewBoxMap[ spriteName ]} className="tech-list__item__icon">
            <use href={`/__spritemap#sprite-${spriteName}`} />
        </svg>
    );
};