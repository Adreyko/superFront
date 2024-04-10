import AboutIcon from 'shared/assets/icons/outline-list.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: RouterPath.main,
    text: 'main',
    Icon: HomeIcon,
  },
  {
    path: RouterPath.about,
    text: 'about',
    Icon: AboutIcon,
  },
  {
    path: RouterPath.profile,
    text: 'profile',
    Icon: AboutIcon,
  },
];
