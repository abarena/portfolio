import { IconName } from "@fortawesome/fontawesome-svg-core";
import { SpriteName } from "../types/SVG";

export type Skill = {
    id: number;
    lvl: string;
    name: string;
};

export type SkillList = Skill[];

export type TechItem = {
    name: string;
    type: 'fa' | 'text' | 'sprite';
    color?: string;
    iconName?: IconName;
    sprite?: SpriteName;
    text?: string;
};

export type TechCategory = {
    name: string;
    list: TechItem[];
};

export type TechCategoryList = TechCategory[];

