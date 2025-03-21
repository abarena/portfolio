import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TechItem } from "../../models/tech";
import SpriteIcon from "./SpriteIcon";
import { iconsArr } from "./constants";

type IconTypeProps = {
  tech: TechItem;
};

export default function IconType({ tech }: IconTypeProps) {
  const style = useMemo(() => ({
      color: tech.color,
      fontSize: "3rem",
      lineHeight: "3.6rem",
      fontWeight: "bold",
  }), [tech.color]);
  
  if (tech.type === "text") {
    return (
      <div className="tech-list__item__icon" style={style}>
        {tech.sprite}
      </div>
    );
  }

  if (tech.type === "sprite") {
    return (
      <SpriteIcon
        svgIcon={iconsArr.find(sprite => sprite.id === `${tech.sprite}-usage`)}
      />
    );
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
