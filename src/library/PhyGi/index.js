import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import ScrollArea from "core/ScrollArea"
import GiphyProvider, { extract } from "./GiphyProvider"

export default class PhyGi extends React.Component {
  render() {
    const { onSelect } = this.props

    return (
      <GiphyProvider
        render={({ query, gifs, onChange, onKeyDown }) => {
          return (
            <div className="bg-white w5 br3 ba b--black-20 popout1">
              <div className="pa1 pb0">
                <input
                  type="text"
                  value={query}
                  placeholder="Search"
                  onChange={onChange}
                  onKeyDown={onKeyDown}
                  className="w-100 sans-serif black-80 outline-0 br4 ba b--black-30 pa1 ph2"
                />
              </div>
              <ScrollArea
                height={20}
                width={15.9}
                horizontalPadding={0.4}
                showScrollBar
                className="sb-reset sb_thumb-black-20 sb-very-thin mt1"
              >
                <Gifs>
                  {gifs &&
                    extract(gifs, "fixed_height_small").map((gif, i) =>
                      <Gif url={gif.url} onClick={onSelect(gif.id)} key={i} />
                    )}
                </Gifs>
              </ScrollArea>
            </div>
          )
        }}
      />
    )
  }
}

PhyGi.defaultProps = {
  onSelect: id => () => console.log("Giphy Id:", id),
}

PhyGi.propTypes = {
  onSelect: PropTypes.func,
}

const gutter = 0.232

const Gif = styled.div.attrs({
  className: "pointer grow",
})`
  margin-right: ${gutter}rem;
  margin-bottom: ${gutter}rem;
  width: 4.8rem;
  height: 4.8rem;
  background: url(${p => p.url});
  background-size: cover;
  background-repeat: no-repeat;
`

const Gifs = styled.div.attrs({
  className: "flex flex-wrap",
})`
`
