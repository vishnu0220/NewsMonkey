import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg?w=300" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> {title} </h5>
            <p className="card-text"> {description} </p>
            <a href="/newsdetail" className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
