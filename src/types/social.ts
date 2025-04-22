import { IconName } from "@fortawesome/fontawesome-svg-core";

export type SocialItem = {
  id: string;
  iconName: IconName;
  href: string;
};

export type SocialListItems = SocialItem[];
