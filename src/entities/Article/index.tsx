export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/acticle';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export { acrticleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { getArticleDetailsData } from './model/selectors/getArticleDetailsData';
