import React from "react"
import styled from "styled-components"

const gutter = 0.232

const Ref = styled.div.attrs({
  className: "pointer",
})`
  margin-right: ${gutter}rem;
  margin-bottom: ${gutter}rem;
  width: 100%;
  height: 4.8rem;
  background: url(${p => p.url});
  background-size: cover;
  background-repeat: no-repeat;
`

const Container = styled.div.attrs({
  className: "pointer",
})`
  margin-right: ${gutter}rem;
  margin-bottom: ${gutter}rem;
  width: 100%;
`

export function Gif({ url }) {
  return (
    <Container>
      <img width="300rem" src={url} alt="Gif" />
    </Container>
  )
}
