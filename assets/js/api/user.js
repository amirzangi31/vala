const BASE_URL = "http://127.0.0.1:8000/";



const getAllUsers = async () => {
    const res = await fetch(`${BASE_URL}user/all`)
    const data = await res.json()


    return data
}

const getUserWithId = async(id) => {
    const res = await axios(`${BASE_URL}user/GetId/${id}`)

    

    return res.data

}


export {getUserWithId , getAllUsers}