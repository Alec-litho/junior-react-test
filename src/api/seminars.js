const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
}

const deleteUser = id => {
    setEditing(false)

    setUsers(users.filter(user => user.id !== id))
}

const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
}

const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
}