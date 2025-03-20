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
  
  switch (tech.type) {
    case "text":
      return <div className="tech-list__item__icon"style={style}>
        {tech.icon}
      </div>;
    case "sprite":
      return <SpriteIcon svgIcon={
        iconsArr.find(sprite => sprite.id==`${tech.icon}-usage`)
      }/>;

    default:
      return <FontAwesomeIcon icon={['fab', tech.icon]} 
        className="tech-list__item__icon"
        style={{color: tech.color}}/>;
  }
}
