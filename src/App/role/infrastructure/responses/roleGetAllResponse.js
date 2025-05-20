const data = (role) => {
    return {
        id: role.id,
        name: role.name,
        description: role.description
    }
}

const roleGetAllResponse = (role) => {
    return role.map(data);
}

export default roleGetAllResponse