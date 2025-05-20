const roleUpdateResponse = (role) => {
    return {
        id: role.id,
        name: role.name,
        description: role.description
    }
}

export default roleUpdateResponse