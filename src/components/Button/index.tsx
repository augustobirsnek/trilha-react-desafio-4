import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid }: IButtonProps) => {
  let button;
  
  if(!isValid){
     button = <ButtonContainer onClick={onClick} disabled>{title}</ButtonContainer>;
  }
  else{
    button = <ButtonContainer onClick={onClick} >{title}</ButtonContainer>;
  } 

  return button;
};

export default Button;
