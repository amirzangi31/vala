const BASE_URL = "http://127.0.0.1:8000/";

const getAllPost = async () => {
  const res = await axios(`${BASE_URL}/post/all`);
  return res.data;
};


const addPost = async(data) => {
    const res = await axios.post(`${BASE_URL}post/all/` , data)
    return res.data
}





export {getAllPost , addPost}