const BASE_URL = "http://127.0.0.1:8000/";


const getAllCartex = async() => {
    const res = await fetch(`${BASE_URL}cortex/all/`)
    const data = await res.json()
console.log(data)
    return data
}


const addCartex = async (data) => {
  const res = await fetch(`${BASE_URL}cortex/all/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const dataF = await res.json();
  console.log(dataF)
  return dataF;
};


export {addCartex , getAllCartex}