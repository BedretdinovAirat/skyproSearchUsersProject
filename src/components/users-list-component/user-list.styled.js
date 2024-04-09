import styled from "styled-components"

export const UsersListDiv = styled.div`
  margin: 30px 0px;
`
export const UsersListBlock = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
`
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`
export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
`
export const UsersListItem = styled.li`
  background-color: lightgray;
  cursor: pointer;
  line-height: 32px;
  text-align: center;
`
