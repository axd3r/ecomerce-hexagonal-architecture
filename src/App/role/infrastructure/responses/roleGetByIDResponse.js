const roleGetByIdResponse = (role) => {
    return {
        id: role.id,
        name: role.name,
        description: role.description
    }
}

export default roleGetByIdResponse;