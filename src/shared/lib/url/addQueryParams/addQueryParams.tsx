export function getQueryParams(params: OptionalRecord<string, string>) {
    const url = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) url.set(key, value);
    });

    return `?${url.toString()}`;
}

/**
 * Add query params to the URL
 * @param params
 */

export function addQueryParams(params: OptionalRecord<string, string>) {
    const queryParams = getQueryParams(params);

    window.history.pushState({}, '', queryParams);
}
