const URI = "https://api.giphy.com/v1/gifs/"

const ENDPOINTS = {
  search: "search",
  trending: "trending",
}

const DEFAULT_CONFIG = {
  apiKey: "DwqHQOlTsRcoyeEJOGEwbtZ7uV9myb85",
  limit: 12,
  lang: "en",
  offset: 0,
  rating: "G",
}

class Giphy {
  constructor(config) {
    this.config = Object.assign({}, DEFAULT_CONFIG, config)
  }

  trending() {
    const { apiKey, rating, limit } = this.config

    const parameters = [
      "?",
      `api_key=${apiKey}`,
      `limit=${limit}`,
      `rating=${rating}`,
    ].join("&")

    return [URI, ENDPOINTS.trending, parameters].join("")
  }

  search(query) {
    const { apiKey, rating, limit, offset, lang } = this.config

    const parameters = [
      "?",
      `api_key=${apiKey}`,
      `limit=${limit}`,
      `rating=${rating}`,
      `offset=${offset}`,
      `q=${query}`,
      `lang=${lang}`,
    ].join("&")

    return [URI, ENDPOINTS.search, parameters].join("")
  }
}

export default Giphy
