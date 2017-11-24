import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

function ScrollArea(props) {
  return (
    <Wrapper {...props}>
      <Container width={props.width - props.horizontalPadding}>
        <Content leftOffset={props.horizontalPadding}>
          {props.children}
        </Content>
      </Container>
    </Wrapper>
  )
}

export default ScrollArea

ScrollArea.defaultProps = {
  width: 10,
  height: 10,
  horizontalPadding: 1,
}

ScrollArea.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  horizontalPadding: PropTypes.number,
}

const Wrapper = styled.div.attrs({
  className: "",
})`
  width: ${p => p.width}rem;
  height: ${p => p.height}rem;

  overflow: hidden;
  ${p => p.showScrollBar && "overflow-y: scroll"};

  &:hover {
    overflow-y: scroll;
  }
`

const Container = styled.div.attrs({
  className: "",
})`
  width: ${p => p.width}rem;
`

const Content = styled.div.attrs({
  className: "",
})`
  padding-left: ${p => p.leftOffset}rem;
`
