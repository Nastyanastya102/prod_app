import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from './ArticleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducers = combineReducers<ArticleDetailsPageSchema>(
    {
        comments: articleDetailsCommentsReducer,
        recommendations: articleDetailsRecommendationsReducer,
    },
);
