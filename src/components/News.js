import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Time stood still, Trump says at site of assassination attempt",
      "description": "Donald Trump invited tech billionaire Elon Musk to the stage to join him attacking his Democratic opponent.",
      "url": "https://www.bbc.co.uk/news/articles/c70w909znl6o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0c93/live/766afcb0-8375-11ef-ad45-893aa022fcbc.jpg",
      "publishedAt": "2024-10-06T01:37:18.2940822Z",
      "content": "With just 31 days to go until Americans vote, polls show Trump and Kamala Harris in a tight race in Pennsylvania - a hotly contested battleground state.\r\nData from the New York Times and Siena, for e… [+1076 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Andrea Margolis",
      "title": "Musk energizes Trump supporters at Butler rally, 3 months after assassination attempt on former president",
      "description": "Tesla CEO Elon Musk appeared at former President Trump's rally in Butler, Pennsylvania, on Saturday, nearly three months after Trump was shot at the same venue.",
      "url": "https://www.foxnews.com/us/musk-energizes-trump-supporters-butler-rally-3-months-after-assassination-attempt-former-president",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/10/musk-trump-2.jpg",
      "publishedAt": "2024-10-06T01:10:31Z",
      "content": "Tesla CEO Elon Musk made a memorable appearance at former President Trump's campaign rally in Butler, Pennsylvania, on Saturday a rare appearance for the tech entrepreneur. \r\nWearing a black \"Make Am… [+3710 chars]"
    },
    {
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "author": "ABC News",
      "title": "Donald Trump returns to site of Pennsylvania assassination attempt for Butler rally, with Elon Musk joining him on stage",
      "description": "Donald Trump returns to Pennsylvania, where he was nearly assassinated in July, holding a rally with heightened security and guest Elon Musk.",
      "url": "https://www.abc.net.au/news/2024-10-06/donald-trump-returns-to-assassination-attempt-rally/104438024",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/bc92fa1f64854fa9192eb5a9d91d957a?impolicy=wcms_watermark_news&cropH=1774&cropW=3153&xPos=0&yPos=214&width=862&height=485&imformat=generic",
      "publishedAt": "2024-10-06T01:03:58Z",
      "content": "Donald Trump has returned to the Pennsylvania fairgrounds where he was nearly assassinated in July, holding a sprawling rally with a massive crowd of supporters in a critical swing state he hopes to … [+2844 chars]"
    },
    {
      "source": {
        "id": "new-york-magazine",
        "name": "New York Magazine"
      },
      "author": "Chas Danner",
      "title": "Elon Musk Jumped for Trump at Butler Rally",
      "description": "Billionaire X owner Elon Musk joined Donald Trump on stage at his big rally in Butler, Pennsylvania — and it was weird.",
      "url": "https://nymag.com/intelligencer/article/elon-musk-jumped-for-trump-at-butler-rally.html",
      "urlToImage": "https://pyxis.nymag.com/v1/imgs/6de/69b/29632cdf51e740894bbf635e9d25551dc7-musk-trump-rally.1x.rsocial.w1200.jpg",
      "publishedAt": "2024-10-06T01:01:16Z",
      "content": "Elon Musk joined the MAGA circus in person on Saturday night, literally jumping on stage with Donald Trump during the former presidents big rally return to the same Butler, Pennsylvania fairgrounds w… [+2855 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "CBS News",
      "title": "Trump returns to Butler months after assassination attempt",
      "description": "Former President Donald Trump held a rally in Butler, Pennsylvania, on Saturday, returning to the same stage that was the site of the July 13 assassination attempt on his life. Joining Trump at the rally was his running mate, Sen. JD Vance of Ohio, and billio…",
      "url": "https://www.cbsnews.com/video/trump-returns-to-butler-months-after-assassination-attempt/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/10/06/c7b5ddfb-9336-40bd-9602-995525c6bd5c/thumbnail/1200x630/ff777d542fc40796cf62be13443e6804/chburns.jpg?v=0736ad3ef1e9ddfe1218648fe91d6c9b",
      "publishedAt": "2024-10-06T00:48:56+00:00",
      "content": "Watch CBS News\r\nCopyright ©2024 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
    }
  ]

  constructor(){
    super();
    console.log("Hello Iam a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false
    }
    
  }

  render() {
    return (
      <div className='container'>
        <h2>NewsMonkey - Top Headlines </h2>
        <div className="row">

        {this.state.articles.map((element)=> {
          return(
            <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0, 44)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
          )
         })}

        </div>
      </div>
    )
  }
}

export default News
