import React, { useEffect, useState } from 'react';
import PageHeader from './../components/layout/PageHeader';
import NewsCard from './NewsCard';
import Alert from '@material-ui/lab/Alert';

const LatestNews = () => {
    
    const [news,setNews] = useState([]);
    const [isLoading , setIsLoading ] = useState(true);
    const [connectionError ,setConnectionError] = useState(false);
    // const { id } = useParams()
    const [APIParams,setAPIParams] = useState({
        APIKey      : '3b54875dae4b44999ae09e5eee0f098c',
        APICountry  : 'us',
        APICategory : 'general',
        APISearch   : 'video games',
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
            setNews(data.articles);
            console.log(data)
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
            {news.map(article => 
                <NewsCard newsCardProps={article}/>
            )}
        </div>
         
        return(
            <div className='news pt-5 pb-5'>
                <div className='container'>
                    <PageHeader title='Latest News' />
                    {connectionError && <div><Alert severity='info'>Unable to connect to the server !! Check your internet connection</Alert></div>}
                    {isLoading && <div className='text-center'>Loading....</div> }
                    {articlesTemplate}
                </div>
            </div>
        )
    }
 
export default LatestNews;