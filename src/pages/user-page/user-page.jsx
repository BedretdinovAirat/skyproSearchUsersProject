import { Link, useParams } from "react-router-dom"
import { useGetCurrentUserQuery } from "../../services/api-services"
import * as S from "./user-page.styled"

export const UserPage = () => {
  const { userId } = useParams()

  const {
    data: currentUserData,
    isLoading,
    error,
  } = useGetCurrentUserQuery({
    userLogin: userId,
  })

  return (
    <>
      {error === undefined ? (
        <>
          <S.UserPageTitle>Данные о {userId} </S.UserPageTitle>
          {isLoading ? (
            "Подождите, данные загружаются..."
          ) : (
            <S.UserPageBox>
              <S.UserPageImage>
                <S.UserPagePic src={currentUserData?.avatar_url} />
              </S.UserPageImage>
              <S.UserDataDiv>
                <S.UserDataText>
                  Ссылка на профиль GitHub:{" "}
                  <S.UserDataLink href={currentUserData?.html_url}>
                    {currentUserData?.html_url}
                  </S.UserDataLink>
                </S.UserDataText>
                <S.UserDataText>
                  Имя пользователя:{" "}
                  <S.UserDataSpan>
                    {currentUserData?.name !== null
                      ? currentUserData?.name
                      : "Не найдено"}
                  </S.UserDataSpan>
                </S.UserDataText>
                <S.UserDataText>
                  Количество подписчиков:{" "}
                  <S.UserDataSpan>
                    {currentUserData?.followers !== null
                      ? currentUserData?.followers
                      : "Не найдено"}
                  </S.UserDataSpan>
                </S.UserDataText>
                <S.UserDataText>
                  Количество репозиториев:{" "}
                  <S.UserDataSpan>
                    {currentUserData?.public_repos !== null
                      ? currentUserData.public_repos
                      : "Не найдено"}
                  </S.UserDataSpan>
                </S.UserDataText>
                <S.UserDataText>
                  Email:{" "}
                  <S.UserDataSpan>
                    {currentUserData.email !== null
                      ? currentUserData.email
                      : "Не найдено"}
                  </S.UserDataSpan>
                </S.UserDataText>
              </S.UserDataDiv>
            </S.UserPageBox>
          )}
        </>
      ) : (
        <p>Произошла ошибка, попробуйте еще раз</p>
      )}

      <Link to="/">
        <S.UserPageButton>Вернуться на главную</S.UserPageButton>
      </Link>
    </>
  )
}
