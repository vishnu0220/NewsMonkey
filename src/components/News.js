import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    console.log("Hello Iam a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount(){
    // console.log("Iam second");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9f2493949b31434db9462e0d5a2b7bf6&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(data);
    // console.log(parsedData);
    this.setState( {articles: parsedData.articles, totalResults: parsedData.totalResults} ) // Setting state here will trigger re-rendering.
  }

  handlePrevClick = async ()=> {
    // console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9f2493949b31434db9462e0d5a2b7bf6&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async ()=> {
    // console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)) {
      // Do nothing
    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9f2493949b31434db9462e0d5a2b7bf6&page=${this.state.page+1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({
        page: this.state.page+1,
        articles: parsedData.articles
      })
    }
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
        <div className='container d-flex  justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}

export default News
