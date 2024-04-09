import { useEffect } from "react"
import * as S from "./search.styled"

export const Search = ({ searchText, setSearchText, setStartSearch }) => {
  const handleStartSearch = (e) => {
    e.preventDefault()
    setStartSearch(true)
  }

  useEffect(() => {
    if(searchText === "") {
      setStartSearch(false)
    }
  }, [searchText])
  return (
    <S.SearchContainer>
      <S.SearchImage src="./img/search-icon.png" alt="search" />
      <S.SearchForm onSubmit={handleStartSearch}>
        <S.SearchInput
          type="search"
          placeholder="Введите логин пользователя"
          value={searchText}
          onChange={(e) =>{ 
            setSearchText(e.target.value);
            // setStartSearch(false);
          }}
        />
        <S.SearchButton type="submit">Найти</S.SearchButton>
      </S.SearchForm>
    </S.SearchContainer>
  )
}
