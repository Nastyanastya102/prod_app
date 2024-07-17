export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article, ArticleView } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { acrticleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { getArticleDetailsData } from './model/selectors/getArticleDetailsData';
export { ArticleList } from './ui/ArticleList/ArticleList';
