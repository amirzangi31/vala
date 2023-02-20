const BASE_URL = "http://127.0.0.1:8000/";

const getAllComments = async () => {
  const res = await axios(`${BASE_URL}comment/all/`);

  return res.data;
};

const getCommentWithID = async (id) => {
  const res = await fetch(`${BASE_URL}comment/GetId/${id}`);

  const data = await res.json();

  return data;
};

const sendComment = async (data) => {
  const res = await fetch(`${BASE_URL}comment/all/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const dataF = await res.json();

  return dataF;
};


const confirmComments = async(data , id) => {
  const res = await fetch(`${BASE_URL}comment/GetId/${id}/` , {
    method :"PATCH",
    body : JSON.stringify(data),
    headers : {
      "Content-Type" : "application/json"
    }
  })
const dataF = await res.json()

return dataF


}


const deleteComment = async(id) => {
  var raw = "";

  var requestOptions = {
    method: 'DELETE',
    body: raw,
    redirect: 'follow'
  };

fetch(`${BASE_URL}comment/GetId/${id}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}



export { getAllComments, sendComment, getCommentWithID,confirmComments,deleteComment};
