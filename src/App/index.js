import React, { Component } from "react"

import SiteWrapper from "core/SiteWrapper"
import NestedContainer from "core/NestedContainer"
import PhyGi from "library/PhyGi"

class App extends Component {
  render() {
    return (
      <SiteWrapper>
        <NestedContainer innerClassName="pa4" className="ch">
          <PhyGi />
        </NestedContainer>
      </SiteWrapper>
    )
  }
}

export default App
