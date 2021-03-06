const baseUrl = process.env.NODE_ENV === 'development' ?
  "http://localhost:3000/api" :
  'https://be-prod.redrock.cqupt.edu.cn/aboutus';


const $ = async (url, options) => {
  const data = await fetch(baseUrl + url, options);
  const p = await data.json()
  return p.data;
};

export const getEasyInfo = async () => {
  const p = await $("/essayInfo");
  return p;
};

export const getBannar = async () => {
  const p = await $("/figure");
  return p;
};

export const getCard = async () => {
  const p = await $("/card");
  return p;
};

export const getArticleInfo = async (id) => {
  let form = new FormData();
  form.append("id", id);
  const p = await $("/essay", { method: "post", body: form });
  return p;
};

export const setIslike = async (id, like) => {
  // let form = new FormData()
  // form.append('id', id)
  // form.append('like', like)
  console.log(id,like);
  const p = await fetch(`${baseUrl}/essay/likes`, {
    method: 'post',
    body: JSON.stringify({
      "id": id,
      "like": like
    }),
    headers: { 'Content-Type': 'application/json' }
  })
  const data = p.json();
  return data;
}

export const getQAndA = async () => {
  const p = await $('/qAndA')
  return p
}

export const submit = async (content) => {
  let form = new FormData()
  form.append('content', content)
  const p = await fetch(`${baseUrl}/feedback`, {
    method: 'put',
    body: form
  })
  const data = await p.json();
  return data;
}

export const search = async (content) => {
  let p = await $('/article?key=' + content)
  return p
}