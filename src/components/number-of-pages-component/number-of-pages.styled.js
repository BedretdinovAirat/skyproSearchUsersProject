import styled from "styled-components"

export const PagesCountDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
`
export const PagesCountText = styled.p``
export const PagesCountNumberBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`
export const PagesCountNumber = styled.span`
  border: ${(props) =>
    props.isCurrentPage ? "2px solid grey" : "1px solid lightgray"};
  background-color: ${(props) =>
    props.isCurrentPage ? "lightgray" : "inherit"};
  border-radius: 100%;
  padding: 5px 10px;
  cursor: pointer;
`
