export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': 'cf99df816dmshcf55f1a4f003440p195e95jsne87155ae5ccd',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'cf99df816dmshcf55f1a4f003440p195e95jsne87155ae5ccd',
    },
  };
 

export const fetchData = async (url,options) => {

    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}