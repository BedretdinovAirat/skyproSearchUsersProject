import { ElementsPerPage } from "../../components/elements-per-page-component/elements-per-page"
import { NumberOfPages } from "../../components/number-of-pages-component/number-of-pages"
import { Search } from "../../components/search/search"
import { UsersList } from "../../components/users-list-component/users-list"
import { useGetUserQuery } from "../../services/api-services"
import { useEffect, useState } from "react"
import * as S from "./main-page.styled"
import { ReposOrderComponent } from "../../components/repos-order-component/repos-order-component"

export const MainPage = () => {
  const [searchText, setSearchText] = useState("")
  const [startSearch, setStartSearch] = useState(false)
  const [perPage, setPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [errorText, setErrorText] = useState(null)
  const [reposOrder, setReposOrder] = useState("desc")
  const [chosenButton, setChosenButton] = useState("по убыванию")

  const {
    data: userData,
    error: userDataError,
    isLoading,
  } = useGetUserQuery({
    userLogin: searchText,
    per_page: perPage,
    page: currentPage,
    order: reposOrder,
  })

  useEffect(() => {
    if (userDataError?.status === 422) {
      setErrorText("Для начала работы введите Ваш запрос в строку поиска")
    } else if (userDataError?.status === 403) {
      setErrorText("Произошла ошибка, попробуйте еще раз")
    } else if (userDataError?.status === "FETCH_ERROR") {
      setErrorText("Произошла ошибка сети, попробуйте еще раз")
    } else {
      setErrorText(null)
    }

    setPerPage(10)
    setChosenButton("по убыванию")
  }, [userDataError, setPerPage, setChosenButton])

  return (
    <>
      <S.MainTitle>Поиск пользователей GitHub</S.MainTitle>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        setStartSearch={setStartSearch}
      />

      {startSearch && !errorText ? (
        isLoading ? (
          <p>Подождите, ищем совпадения...</p>
        ) : (
          <>
            <UsersList userData={userData} />
            <ReposOrderComponent
              setReposOrder={setReposOrder}
              setChosenButton={setChosenButton}
              chosenButton={chosenButton}
            />
            <ElementsPerPage
              setPerPage={setPerPage}
              setCurrentPage={setCurrentPage}
            />
            <NumberOfPages
              userData={userData}
              perPage={perPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </>
        )
      ) : (
        <p>{errorText}</p>
      )}
    </>
  )
}
