import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { SidebarItemsType } from '../types/sideBar';

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemsType[] = [
        { path: RoutePath.main, Icon: MainIcon, text: 'Главная' },
        { path: RoutePath.about, Icon: AboutIcon, text: 'О сайте' },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData.id, Icon: ProfileIcon, text: 'Профіль', authOnly: true,
            },
            {
                path: RoutePath.articles, Icon: ArticleIcon, text: 'Пости', authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
