import * as actionsTypes from '../actions/actionsTypes' 

const articles = [
    {
        id: 1,
        title: 'How To learn a new Skills to Keep Up With the century',
        urlToImage: '',
        author: 'Hassan Alhalabi',
        content: 
            `You may have owned an iPhone for years and regard yourself as an experienced user.
        
            At the same time, you keep removing unwanted characters one at a time while typing by
            pressing delete. However, one day you find out that a quick shake allows you to delete the
            whole message in one tap.
            
            Then you wonder why on earth you didn’t know this earlier.
            The same thing happens with programming.

            At the same time, you keep removing unwanted characters one at a time while typing by
            pressing delete. However, one day you find out that a quick shake allows you to delete the
            whole message in one tap.
            
            Then you wonder why on earth you didn’t know this earlier.
            The same thing happens with programming.

            At the same time, you keep removing unwanted characters one at a time while typing by
            pressing delete. However, one day you find out that a quick shake allows you to delete the
            whole message in one tap.
            
            Then you wonder why on earth you didn’t know this earlier.
            The same thing happens with programming.

            At the same time, you keep removing unwanted characters one at a time while typing by
            pressing delete. However, one day you find out that a quick shake allows you to delete the
            whole message in one tap.
            
            Then you wonder why on earth you didn’t know this earlier.
            The same thing happens with programming.
            
            We can be quite satisfied with our coding until, all of sudden, we run into a trick or a lesser-known language feature that makes us
            reconsider the entire work done over the years.
    
            It turns out that we could do this in a cleaner, more readable, more testable, and more maintainable way.
            So it’s presumed that you already have experience with JavaScript; however, this chapter equips you with the
            best practices to improve your code.`,
        date: '2/12/2020',
        categories: ['uncategorized','sport'],
        tags: ['learning','skills'],
        isPublished: true,
    },
    {
        id: 2,
        title: 'Travrling to Japan, The Dark Side of the Samurai Land',
        urlToImage: '',
        author: 'Temothy Craig',
        content: `
        You may have owned an iPhone for years and regard yourself as an experienced user.
        
        At the same time, you keep removing unwanted characters one at a time while typing by
        pressing delete. However, one day you find out that a quick shake allows you to delete the
        whole message in one tap.
        
        Then you wonder why on earth you didn’t know this earlier.
        The same thing happens with programming.
        
        We can be quite satisfied with our coding until, all of sudden, we run into a trick or a lesser-known language feature that makes us
        reconsider the entire work done over the years.

        It turns out that we could do this in a cleaner, more readable, more testable, and more maintainable way.
        So it’s presumed that you already have experience with JavaScript; however, this chapter equips you with the
        best practices to improve your code.
        
        We will cover the following topics:
            - Making your code readable and expressive.
            - Mastering multiline strings in JavaScript.
            - Manipulating arrays in the ES5 way.
            - Traversing an object in an elegant, reliable, safe, and fast way.
            - The most effective way of declaring objects.
            - How to magic methods in JavaScript.`,
        date: '12/12/2020',
        categories: ['uncategorized'],
        tags: ['Japan','Travelling','visiting new places'],
        isPublished: true,
    },
    {
        id: 3,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 
        `
        You may have owned an iPhone for years and regard yourself as an experienced user.
        
        At the same time, you keep removing unwanted characters one at a time while typing by
        pressing delete. However, one day you find out that a quick shake allows you to delete the
        whole message in one tap.
        
        Then you wonder why on earth you didn’t know this earlier.
        The same thing happens with programming.
        
        We can be quite satisfied with our coding until, all of sudden, we run into a trick or a lesser-known language feature that makes us
        reconsider the entire work done over the years.

        It turns out that we could do this in a cleaner, more readable, more testable, and more maintainable way.
        So it’s presumed that you already have experience with JavaScript; however, this chapter equips you with the
        best practices to improve your code.
        
        We will cover the following topics:
            - Making your code readable and expressive.
            - Mastering multiline strings in JavaScript.
            - Manipulating arrays in the ES5 way.
            - Traversing an object in an elegant, reliable, safe, and fast way.
            - The most effective way of declaring objects.
            - How to magic methods in JavaScript.`,
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 4,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 5,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 6,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 7,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 8,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 345,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 34555,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 33333,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 32345,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 5223,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 55345,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 22222,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 5435,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 11111,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 2356,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 235555556,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 353453452356,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 234353456,
        title: 'Living Inside a Caravan and Travelling the World With Jim Brandon',
        urlToImage: '',
        author: 'Belal Masuud',
        content: 'lorem ipsum dolor sit amet',
        date: '1/2/2021',
        categories: ['uncategorized'],
        tags: ['tag1','tag2'],
        isPublished: false,
    },
    {
        id: 4123,
        title: 'Mstering a Few Things in JavaScript for Pros',
        urlToImage: '',
        author: 'Dmeitry Sheiko',
        content: `
        You may have owned an iPhone for years and regard yourself as an experienced user.
        
        At the same time, you keep removing unwanted characters one at a time while typing by
        pressing delete. However, one day you find out that a quick shake allows you to delete the
        whole message in one tap.
        
        Then you wonder why on earth you didn’t know this earlier.
        The same thing happens with programming.
        
        We can be quite satisfied with our coding until, all of sudden, we run into a trick or a lesser-known language feature that makes us
        reconsider the entire work done over the years.

        It turns out that we could do this in a cleaner, more readable, more testable, and more maintainable way.
        So it’s presumed that you already have experience with JavaScript; however, this chapter equips you with the
        best practices to improve your code.
        
        We will cover the following topics:
            - Making your code readable and expressive.
            - Mastering multiline strings in JavaScript.
            - Manipulating arrays in the ES5 way.
            - Traversing an object in an elegant, reliable, safe, and fast way.
            - The most effective way of declaring objects.
            - How to magic methods in JavaScript.`,
        date: '4/27/2021',
        categories: ['Technology'],
        tags: ['JavaScript','Programming'],
        isPublished: true,
    }
]

export const articlesReducer = (state = articles, action) => {

    switch (action.type) {
        // Add New Article
        case actionsTypes.ADD_ARTICLE:
            console.log('New Article Added');
            return [
                ...state,
               action.article
            ] 
        // Delete Article Permenantly    
        case actionsTypes.DELETE_ARTICLE:
            console.log('Article Removed')
            return state.filter(article => article.id !== action.id)
        // Publish or UnPublish an Article    
        case actionsTypes.PUBLISH_UPDATE:
            console.log('article publish updated')
            return state.map(article => {
                if(article.id === action.id){
                    article.isPublished = !article.isPublished
                } 
                return article
            });
        // Update an Article    
        case actionsTypes.UPDATE_ARTICLE:
            console.log('Article Updated')
            return state.map(article => article.id !== action.id)
        default:
            return state
        }

}