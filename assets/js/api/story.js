const BASE_URL = "http://127.0.0.1:8000/";

const getAllStory = async () => {
  const res = await fetch(`${BASE_URL}story/all`);
  const data = await res.json();

  return data;
};

const addStory = async (id , text) => {

  const element = document.querySelector(`#${id}`)
  var formdata = new FormData();
console.log(element);
  formdata.append("file", element.files[0], element.value);
  formdata.append("title", text);



  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const res = await fetch(`${BASE_URL}story/all/`, requestOptions);
  const dataF = await res.json();

  console.log(dataF);

  return dataF;
};

export { getAllStory ,addStory};
