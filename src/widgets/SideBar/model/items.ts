import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemsType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemsType[] = [
    { path: RoutePath.main, Icon: MainIcon, text: 'Главная' },
    { path: RoutePath.about, Icon: AboutIcon, text: 'О сайте' },
    { path: RoutePath.profile, Icon: ProfileIcon, text: 'Профіль', authOnly: true },
];
