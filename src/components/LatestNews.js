import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

const LatestNews = () => {
    
    const [articles,setArticles] = useState([]);
    const [isLoading , setIsLoading ] = useState(true);
    const [connectionError ,setConnectionError] = useState(false);
    // const { id } = useParams()
    const [APIParams,setAPIParams] = useState({
        APIKey      : '3b54875dae4b44999ae09e5eee0f098c',
        APICountry  : 'us',
        APICategory : 'general',
        APISearch   : 'syria',
        APISortBy   : 'popularity',
    })
    
    const url = `https://newsapi.org/v2/everything?`+
                `q=${APIParams.APISearch}`+
                `&sortBy=${APIParams.APISortBy}`+
                `&apiKey=${APIParams.APIKey}`

    useEffect(() => {
        const abortCont = new AbortController()
        fetch(
            url,
            {signal: abortCont.signal})
        .then(response => {
            console.log(response)
            if(response.ok) { 
                setIsLoading(false)
                return response.json()
            } else {
                throw Error('Error fetching data from server')
            }
        })
        .then(data => {
            setArticles(data.articles);
        })
        .catch(error => { 
            console.log('here:',error);
            setConnectionError(true);
            setIsLoading(false) ;
        })
        
        return () => abortCont.abort()
    },[])

    let articlesTemplate =
        <div className='row'>
            {articles.map(article => 
                <ArticleCard articleCardProps={article}/>
            )}
        </div>
         
        return(
            <div className='articles'>
                <div className='container'>
                    {connectionError && <div><span className='alert alert-warning'>Unable to connect to the server !! Check your internet connection</span></div>}
                    {isLoading && <div className='text-center'>Loading....</div> }
                    {articlesTemplate}
                </div>
            </div>
        )
    }
 
export default LatestNews;