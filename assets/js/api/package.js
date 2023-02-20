const BASE_URL = "http://127.0.0.1:8000/";




const createPackage = async() => {

    const res = await fetch(`${BASE_URL}package/all/`)


}


export {createPackage}