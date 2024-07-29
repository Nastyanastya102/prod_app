import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article';
import { fetchArticlesNextPage } from './fetchArticlesNextPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchArticlesNextPage.test', () => {
    test('success fetchArticlesNextPage', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                view: ArticleView.BIG,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith();
    });

    test('fetchArticlesNextPage is not called', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                _inited: false,
                view: ArticleView.BIG,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
