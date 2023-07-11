import { InputHTMLAttributes, forwardRef } from "react";
import { RegularText } from "../Typography";
import { InputStyleContainer, InputStyled, InputWrapper, RightText } from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    rightText?: string;
  };

  export const Input = forwardRef<HTMLInputElement, Props>(
    ({ error, rightText, className, ...props }, ref) => {
      return (      
        <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
        
    )
}
)