const BASE = `https://strangers-things.herokuapp.com/api/`
const COHORT = `2209-FTB-MT-WEB-PT/`
const URL = `${BASE}${COHORT}`

export async function registerPerson(event){
    console.log(event.target[0], event)
    console.log(`${BASE}${COHORT}`)
    const registerUsername = await event.target[0].value
    const registerPassword = await event.target[1].value
    console.log(registerPassword, registerUsername)
    
    const response = await fetch(`${BASE}${COHORT}users/register`,
    
    
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: registerUsername,
                password: registerPassword,
            }
        })
    }
    )
    const result =  response.json
    console.log(response, result)
    return result
    
}

export async function loginUser(username, password){
  console.log(username, password)

  const response = await fetch(`${BASE}${COHORT}users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password

        }
      })
    })
    const result =  await response.json()
    const token = await result.data.token
    console.log( result.data.token , 'result',  response, 'response', result.data, 'result.data')
    localStorage.setItem('token', token)
    const tokenFromStorage= localStorage.getItem('token')
    return tokenFromStorage
}

export async function getPosts(){
  try{
    const response = await fetch(`${URL}/posts`)
    const result = await response.json()
    console.log(result.data.posts)
    let postsObj = result.data.posts
    return postsObj
  }catch(err){
    console.error('error', err)

}
}
 export const getProfile = async(token) =>{
    const response = await fetch(`${URL}users/me`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }},)
    const result = await response.json()
    const data = result.data
    console.log(data)
    return data
  }
  export const getMess = async (token) => {
    const response = await fetch(`${URL}posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    const data = result.data;
    console.log(data, result,'result','result.data');
    return data;
  };


  export const modifyPost = async(tokens, post, postsId)=>{
    const response = fetch(`${URL}${COHORT}posts/${postsId}`,
    {
      method:"PATCH",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokens}`

      } ,
      body: JSON.stringify({
        post: post
    })
      })
      const result = await response.json
      const token = result.data.token
      console.log(token)
      return token
    }

    export const deletePost= async(token, postID)=>{
      const response = fetch(`${URL}${COHORT}posts/${postID}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
    }

    export const newPost = async (token, post) => {
      const response = await fetch(`${URL}/posts`,
          {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                  post: post
              })
          })
      const result = await response.json()
      const newPost = result.data.post
      return newPost
  }
  
  export const sendMessage = async (token, postID, contents) => {
      const response = await fetch(`${URL}/posts/${postID}/messages`,
          {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                  message: {
                      content: `${contents}`
                  }
              })
          }
  
      )
      const result = await response.json()
      console.log(result, "posted message after API")
      return result
        }