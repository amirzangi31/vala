const BASE_URL = "http://127.0.0.1:8000/";

const getAllDiet = async() => {
    const res = await fetch(`${BASE_URL}program/program/all/`)
    const data = await res.json()


    return data
}


const addProgram = async (data) => {

    const res = await fetch(`${BASE_URL}program/program/all/` , {
        method :"POST",
        body :JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })

    const dataF = await res.json()

    
    return dataF

};

export { addProgram ,getAllDiet};
