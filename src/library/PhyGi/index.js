import React from "react"
import util from "lodash/util"

import ScrollArea from "core/ScrollArea"
import DataProvider from "./DataProvider"

export default class PhyGi extends React.Component {
  render() {
    return (
      <div className="bg-white w5 br3 ba b--black-20 popout1">
        <div className="pa1 pb0">
          <input
            type="text"
            placeholder="Search"
            className="w-100 sans-serif black-80 outline-0 br4 ba b--black-30 pa1 ph2"
          />
        </div>
        <ScrollArea
          height={30}
          width={15.8}
          horizontalPadding={0.4}
          showScrollBar
          className="sb-reset sb_thumb-black-20 sb-very-thin mt1"
        >
          {util.times(12, i =>
            <div key={i} className="bg-green w-100 h3 mb1" />
          )}
        </ScrollArea>
      </div>
    )
  }
}
