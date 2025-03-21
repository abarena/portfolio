import { NavListItems } from "../types/navigation";
import { SocialListItems } from "../types/social";

export const navListItems : NavListItems = [
  {
    name: 'about',
    href: '/about'
  },
  {
      name: 'projects',
      href: '/projects'
  },
  {
      name: 'contact',
      href: '/contact'
  }
]

export const socialListItems: SocialListItems = [
  {
      id:'linkedin',
      iconName: 'linkedin',
      href: 'https://www.linkedin.com/in/angel-barena/'
  },
  {
      id:'github',
      iconName: 'github',
      href: 'https://github.com/Angel-Barena'
  },
  {
      id:'codepen',
      iconName: 'codepen',
      href: 'https://codepen.io/angel_barena'
  }
]
