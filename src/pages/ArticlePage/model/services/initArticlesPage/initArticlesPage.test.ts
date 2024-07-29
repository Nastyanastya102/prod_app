import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article';
import { initArticlePage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlePage.test', () => {
    test('success initArticlePage', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                view: ArticleView.BIG,
                _inited: false,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith();
    });

    test('initArticlePage is not called', async () => {
        const thunk = new TestAsyncThunk(initArticlePage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                _inited: true,
                view: ArticleView.BIG,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
