import React from "react"

import ScrollArea from "core/ScrollArea"
import GiphyAPI, { extract } from "./GiphyAPI"

export default class PhyGi extends React.Component {
  render() {
    return (
      <GiphyAPI
        render={({ query, gifs, onChange, onSelect }) => {
          return (
            <div className="bg-white w5 br3 ba b--black-20 popout1">
              <div className="pa1 pb0">
                <input
                  type="text"
                  value={query}
                  placeholder="Search"
                  onChange={onChange}
                  className="w-100 sans-serif black-80 outline-0 br4 ba b--black-30 pa1 ph2"
                />
              </div>
              <ScrollArea
                height={20}
                width={15.8}
                horizontalPadding={0.4}
                showScrollBar
                className="sb-reset sb_thumb-black-20 sb-very-thin mt1"
              >
                {gifs &&
                  extract(gifs, "fixed_width_small").map((gif, i) => (
                    <div className="flex" key={i}>
                      <img src={gif.url} alt="Gif" />
                    </div>
                  ))}
              </ScrollArea>
            </div>
          )
        }}
      />
    )
  }
}
