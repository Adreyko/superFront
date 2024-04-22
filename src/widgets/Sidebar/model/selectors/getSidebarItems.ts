import AboutIcon from 'shared/assets/icons/outline-list.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/articles.svg';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/User';
import { SidebarItemType } from '../types/sidebarItems';

export const getSidebarItems = createSelector(getAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
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
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: `${RouterPath.profile}${userData.id}`,
        text: 'profile',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RouterPath.articles,
        text: 'Articles',
        Icon: ArticleIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
