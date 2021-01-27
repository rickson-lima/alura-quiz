import styled from 'styled-components';

const Widget = styled.div`
  
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  text-align: center;

  h1,
  h2,
  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p, button {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.15;
    text-align: left;
  }

  input {
     background-color: transparent;
     color: ${({ theme }) => theme.colors.contrastText};

     border: .2rem ${({ theme }) => theme.colors.primary} solid;
     border-radius: .4rem;

     outline: none;

     padding: .8rem;
     width: 100%;

     margin-bottom: 1rem;

  }

  button {
   width: 100%;
   padding: 1rem 1.5rem;

   color: ${({ theme }) => theme.colors.contrastText};
   font-weight: bold;
   text-align: center;
   text-transform: uppercase;

   border-radius: .4rem;
   background-color: ${({ theme }) => theme.colors.buttonColor};
   cursor: pointer;
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

export default Widget;
