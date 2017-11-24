import React from "react"
import PropTypes from "prop-types"

import Giphy from "./Giphy"

class DataProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: "",
      response: null,
    }

    this.giphy = new Giphy()
  }

  fetchAndStore(url) {
    fetch(url, { method: "get" })
      .then(response => response.json())
      .then(response => this.setState(s => ({ response })))
  }

  fetchTrending() {
    this.fetchAndStore(this.giphy.trending())
  }

  fetchSearch() {
    this.fetchAndStore(this.giphy.search(this.state.query))
  }

  gifs() {
    return this.state.response
  }

  render() {
    const { query } = this.state
    const { render } = this.props

    return render({
      gifs: this.gifs(),
      query,
      onChange: this.onChange,
      onSelect: this.onSelect,
    })
  }
}

export default DataProvider

DataProvider.propTypes = {
  query: PropTypes.string,
  rating: PropTypes.string,
  lang: PropTypes.string,
  offset: PropTypes.number,
  limit: PropTypes.number,
}

DataProvider.defaultProps = {
  query: "",
  rating: "G",
  lang: "en",
  offset: 0,
  limit: 6,
}
