import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0px 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  margin-top: 20px;
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ItemLink = styled.span`
  text-decoration: none;
  color: rgb(63, 63, 63);
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: black;
    transition: 0.3s;
  }
`;

export const ItemAnchor = styled.a`
  text-decoration: none;
  color: rgb(63, 63, 63);
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: black;
    transition: 0.3s;
  }
`;

export const Brand = styled.span`
  color: #000;
  font-size: 28px;
  margin-top: 8px;
`;

export const Actions = styled.div`
  display: center;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  margin-left: 10px;
  font-size: 12px;
`;

export const ActionAnchor = styled.a`
  text-decoration: none;
  color: black;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 14px;
  cursor: pointer;
`;
