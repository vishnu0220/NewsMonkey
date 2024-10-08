import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    console.log("Hello Iam a constructor from News component");
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    // console.log("Iam second");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9f2493949b31434db9462e0d5a2b7bf6";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(data);
    console.log(parsedData);
    this.setState( {articles: parsedData.articles} ) // Setting state here will trigger re-rendering.
  }

  render() {
      // console.log("Iam first")
    return (
      <div className='container'>
        <h1>NewsMonkey - Top Headlines </h1>
        <div className="row">

        {this.state.articles.map((element)=> {
          return(
            <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0, 45) : ""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage? element.urlToImage : "https://media.cnn.com/api/v1/images/stellar/prod/ap24274635930569.jpg?c=16x9&q=w_800,c_fill"} newsUrl={element.url} />
          </div>
          )
         })}

        </div>
      </div>
    )
  }
}

export default News
