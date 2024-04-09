import styled from "styled-components"

export const UserPageTitle = styled.h1`
  margin: 20px 0px;
`
export const UserPageBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 30px;
`
export const UserPageImage = styled.div`
  width: 350px;
  height: 350px;
`

export const UserPagePic = styled.img`
  width: 100%;
`

export const UserPageButton = styled.button`
  margin-left: 10px;
  width: 158px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &:hover {
    background-color: #0080c1;
  }
`

export const UserDataDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const UserDataText = styled.p`
font-weight: 700;
`
export const UserDataLink = styled.a`
font-weight: 400;
cursor: pointer;

&:hover {
    text-decoration: underline;
}
`

export const UserDataSpan = styled.span`
font-weight: 400;
`