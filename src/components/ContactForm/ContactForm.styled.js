import styled from 'styled-components';


export const Main = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 30px;
  border: 2px solid #ff55aa;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const PhonebookForm = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-weight: 600;
  justify-content: center; 
  align-items: center; 
  margin-bottom: 15px;
  font-size: 18px; /
  text-align: center;
`;

export const PhonebookInput = styled.input`
  margin: 15px 15px 15px 15px;
  padding: 10px;
  width: 90%;
  border: 2px solid #ff55aa;
  border-radius: 5px;
  font-size: 16px;
  transition: border 0.2s;
  &:focus {
    outline: none;
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228, 121, 17, 50%);
  }
`;

export const Button = styled.button`

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


export const Error = styled.p`
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
`;