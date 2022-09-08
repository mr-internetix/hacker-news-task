import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const newStoriesUrl = `${baseUrl}/topstories.json`;
export const itemUrl = `${baseUrl}/item/`;

export const getStories = async () => {
  try {
    const res = await axios.get(newStoriesUrl).then(({ data }) => data);

    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getStory = async (storyId) => {
  try {
    const res = await axios
      .get(`${itemUrl + storyId}.json`)
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }
};



export const  postFavourite =  async (data) => {
  try{ 
    const options = {
      method : 'POST',
      url : 'https://bookmark-app-10.herokuapp.com/addBookmark',
      headers : { 'Content-Type' : 'application/json'},
      data : {"title" : data.title , "id" : '001' , 'url' : data.link ,'by': data.author }
    }

    axios.request(options).then( function (response){
      console.log(response.data)
    }).catch( err => console.error(err))
  }catch( err ){
    console.log(err)
  }
}


export const  removeFavourite =  async (data) => {
  try{ 
    const options = {
      method : 'POST',
      url : 'https://bookmark-app-10.herokuapp.com/deleteBookmark',
      headers : { 'Content-Type' : 'application/json'},
      data : {"title" : data.title , "id" : '001' , 'url' : data.link ,'by': data.author }
    }

    axios.request(options).then( function (response){
      console.log(response.data)
    }).catch( err => console.error(err))
  }catch( err ){
    console.log(err)
  }


}


 export const getBoomarks = async ()=>{

  try {
    const res = await axios
      .get('https://bookmark-app-10.herokuapp.com/getBookmark')
      .then(({ data }) => data);
    return res;
  } catch (err) {
    console.error(err);
  }


}







