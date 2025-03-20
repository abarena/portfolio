import { IconName } from "@fortawesome/fontawesome-svg-core";

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
    sprite?: string;
};

export type TechCategory = {
    name: string;
    list: TechItem[];
};

export type TechCategoryList = TechCategory[];

