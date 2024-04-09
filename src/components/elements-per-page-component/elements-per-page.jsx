import { useState } from "react"
import * as S from "./elements-per-page.styled"

export const ElementsPerPage = ({ setPerPage, setCurrentPage }) => {
  const [chosenButton, setChosenButton] = useState(10)
  
  const handleButtonClick = (perPageValue) => {
    setPerPage(perPageValue)
    setChosenButton(perPageValue)
    setCurrentPage(1)
  }
  return (
    <S.PerPageDiv>
      <S.PerPageText>Количество элементов на странице:</S.PerPageText>
      <S.PerPageNumberBox>
        <S.PerPageNumber
          onClick={() => handleButtonClick(10)}
          chosen={chosenButton === 10}
        >
          10
        </S.PerPageNumber>
        <S.PerPageNumber
          onClick={() => handleButtonClick(20)}
          chosen={chosenButton === 20}
        >
          20
        </S.PerPageNumber>
        <S.PerPageNumber
          onClick={() => handleButtonClick(30)}
          chosen={chosenButton === 30}
        >
          30
        </S.PerPageNumber>
      </S.PerPageNumberBox>
    </S.PerPageDiv>
  )
}
