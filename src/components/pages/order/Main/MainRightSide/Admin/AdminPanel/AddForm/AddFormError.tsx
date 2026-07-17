import styled from "styled-components"
import { FiAlertCircle } from "react-icons/fi"
import { theme } from "@/theme/theme"

type AddFormErrorProps = {
  message: string
}

export default function AddFormError({ message }: AddFormErrorProps) {
  return (
    <AddFormErrorStyled role="alert">
      <FiAlertCircle className="icon" />
      <span className="message">{message}</span>
    </AddFormErrorStyled>
  )
}

const AddFormErrorStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  .icon {
    color: ${theme.colors.red};
    width: 1em;
    height: 1em;
    vertical-align: middle;
  }
  .message {
    margin-left: 5px;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.red};
  }
`
