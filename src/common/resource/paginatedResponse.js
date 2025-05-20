export function PaginatedResponse({ current, perPage, total, data }, mapperFn) {
    return {
        current,
        perPage,
        total,
        data: data.map(mapperFn)
    };
}
