import { Op } from "sequelize";

/**
 * Utilidad para generar una consulta paginada con búsqueda opcional por campo.
 *
 * @param {Object} options
 * @param {Object} options.repository
 * @param {String} options.searchTe
 * @param {Number} options.page
 * @param {Number} options.paginate 
 * @param {String} options.searchField
 */
export async function paginateAndSearch({
    repository,
    searchText = "",
    page = 1,
    paginate = 15,
    searchField = "name"
}) {
    const offset = (page - 1) * paginate;

    const where = searchText
        ? { [searchField]: { [Op.like]: `%${searchText}%` } }
        : undefined;

    const result = await repository.getAll({ where, limit: paginate, offset });

    return {
        current: page,
        perPage: paginate,
        total: result.count,
        data: result.rows
    };
}
