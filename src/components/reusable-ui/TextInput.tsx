import React, { ComponentPropsWithRef } from "react"
import styled, { css } from "styled-components"
import { theme } from "@/theme/theme"

type TextInputVersion = "normal" | "minimalist"

type TextInputProps = {
  Icon: JSX.Element,
  version?: TextInputVersion,
} & ComponentPropsWithRef<"input">

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ onChange, Icon, className, version = "normal", ...extraProps }, ref) => {
    return (
      <TextInputStyled className={className} version={version}>
        <div className="icon">{Icon && Icon}</div>
        <input ref={ref} onChange={onChange} type="text" {...extraProps} />
      </TextInputStyled>
    )
  }
)
TextInput.displayName = "TextInput"

type TextInputStyledProps = {
  version: TextInputVersion
}

export default TextInput
const TextInputStyled = styled.div<TextInputStyledProps>`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${({ version }) => extraStyle[version]}
`

const extraStyleNormal = css`
  background-color: ${theme.colors.surface};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    background: ${theme.colors.surface};
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.surface};
    }
  }
`

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
}
