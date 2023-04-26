const users = [
    {
        id: 1,
        name: "alice",
        role: "admin"
    },
    {
        id: 2,
        name: "bob",
        role: "sales"
    },
    {
        id: 3,
        name: "jim",
        role: "user"
    }
]


const authenticate = (name) => {
    //convert users array to Map(), with name as key
    const usersArray = users.map( (u) => [u.name, u])
    const usersMap = new Map(usersArray)
    console.log(usersMap)

    if (!usersMap.has(name)) return false

    const userInfo = usersMap.get(name)
    console.log("userInfo: ", userInfo)
    return userInfo
}

export default authenticate