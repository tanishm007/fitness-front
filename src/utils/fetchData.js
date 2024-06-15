export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '117f847f4bmsh8eada71d14e9c77p13e012jsn78ba107187d3',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '117f847f4bmsh8eada71d14e9c77p13e012jsn78ba107187d3',
    },
  };
 

export const fetchData = async (url,options) => {

    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}
