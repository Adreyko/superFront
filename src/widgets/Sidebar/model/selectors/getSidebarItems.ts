import AboutIcon from '@/shared/assets/icons/outline-list.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/articles.svg';

import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebarItems';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(getAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'main',
      Icon: HomeIcon,
    },
    {
      path: getRouteAbout(),
      text: 'about',
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        text: 'profile',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        text: 'Articles',
        Icon: ArticleIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
