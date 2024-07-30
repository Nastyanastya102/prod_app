import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('should add one query params to the URL', () => {
        const params = getQueryParams({ search: 'apple' });
        expect(params).toBe('?search=apple');
    });

    test('should add two query params to the URL', () => {
        const params = getQueryParams({ search: 'apple', order: 'asc' });
        expect(params).toBe('?search=apple&order=asc');
    });

    test('should not add undefined query params to the URL', () => {
        const params = getQueryParams({ search: 'apple', order: 'asc', sort: undefined });
        expect(params).toBe('?search=apple&order=asc');
    });
});
