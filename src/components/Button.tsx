import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
  .custom-btn {
    height: 45px;
    border-radius: 30px;
    padding: 15px 30px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .primary-btn {
    background: #2d2d2d;
    color: #fff;
  }
  .secondary-btn {
    background: #c4c4c4;
    color: #2d2d2d;
  }
`;

type Props = {
  variant: "primary" | "secondary";
  onClick: () => void;
  children: string;
};

const Button = ({ variant, onClick, children }: Props) => {
  return (
    <ButtonStyled>
      <div className={`custom-btn ${variant}-btn`} onClick={onClick}>
        {children}
      </div>
    </ButtonStyled>
  );
};

export default Button;
