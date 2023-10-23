import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  font-weight: 500;
  align-items: flex-end;
  font-weight: 600;
  text-transform: none;
`;

export const ItemName = styled.p`
  margin-right: 10px;
  display: flex;
  align-items: flex-end;
`;



export const DeleteButton = styled.button`
{
  appearance: none;
  background-color: #ff90e8;
  border-radius: 40em;
  border-style: none;
  box-shadow: #ff90e8 0 -12px 6px inset;
  box-sizing: border-box;
  color: #111111;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -.24px;
  margin: 10;
  outline: none;
  padding: 1rem 1.3rem;
  quotes: auto;
  text-align: center;
  text-decoration: none;
  transition: all .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

&:hover {
  background-color: #ff90e8;
  box-shadow: #ff90e8 0 -6px 8px inset;
  transform: scale(1.125);
}

&:active {
  transform: scale(1.025);
}

@media (min-width: 768px) {
   {
    font-size: 1.5rem;
    padding: .75rem 2rem;
  }


`;
