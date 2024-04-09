import { Link } from "react-router-dom"
import * as S from "./user-list.styled"

export const UsersList = ({ userData}) => {
  return (
    <S.UsersListDiv>
      <S.UsersListBlock>
        {
          (userData?.items.length > 0 ? (
            userData.items.map((user) => {
              return (
                <S.UserData key={user.id}>
                  <Link to={`/userPage/${user.login}`}>
                    <S.UserAvatar src={user.avatar_url} alt="avatar" />
                    <S.UsersListItem>{user.login}</S.UsersListItem>
                  </Link>
                </S.UserData>
              )
            })
          ) : (
            <p>По Вашему запросу ничего не найдено</p>
          ))}
      </S.UsersListBlock>
    </S.UsersListDiv>
  )
}
