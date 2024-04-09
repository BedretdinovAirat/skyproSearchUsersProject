import styled from "styled-components"

export const PerPageDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
`
export const PerPageText = styled.p``
export const PerPageNumberBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`
export const PerPageNumber = styled.button`
  border: ${(props) =>
    props.chosen ? "2px solid grey" : "1px solid lightgray"};
  background-color: ${(props) =>
    props.chosen ? "lightgray" : "inherit"};
  border-radius: 50%;
  padding: 10px 10px;
  cursor: pointer;
`
