import styled from "styled-components";

const Widget = styled.div`
  /* margin: 2% 0; */
  /* margin-bottom: 24px; */
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  text-align: center;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p,
  button {
    font-size: 14px;
    font-weight: bolder;
    line-height: 1.15;
  }
  button {
     text-align: center;
  }
  
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.div`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}70`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    border: 2.5px dashed ${({ theme }) => theme.colors.buttonColor};
    opacity: 1;
  }
`;

Widget.Button = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;

  color: ${({ theme }) => theme.colors.contrastText};
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  cursor: pointer;
`;

export default Widget;
