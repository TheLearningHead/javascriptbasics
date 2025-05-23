// fetch API

const url = "https://jsonplaceholder.typicode.com/users"

async function getAllUsers() {
    try {
        const response = await fetch(url) // fetch returns a promise in the form of a response object         
        const data = await response.json() // response.json() also returns a promise in the form of a JSON object
        // await is used here to make sure that the response it converted to JSON before proceeding as this process takes time
        // without await, the data would be undefined
        console.log(data)
    } catch (error) {
        console.error("ERROR", error)
    }
}
getAllUsers()