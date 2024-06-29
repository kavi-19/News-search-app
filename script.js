const apikey=
'85705767f6554dcf9d598864adfb7af5';

const bolgContainer = document.getElementById("bolg-container");

// prefetched data
// it helps to use api  
function fetchRandomNews(){
  try{
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}'
    // fetching the url
    const response=await fetch(apiUrl) 


  } catch(error){
     console.error("Error fetching random news",error)
     return []

  }



}