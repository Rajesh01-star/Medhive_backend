const newsApiKey = "8f3532ad8cbb4a5ba928b437ce5d303d";
const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${newsApiKey}`;

const fetchNews = async() =>{
    try{
        const response = await fetch(newsApiUrl);
        const news = await response.json();
        return news;
    }catch(err){
        return err;
    }
}

export {fetchNews}