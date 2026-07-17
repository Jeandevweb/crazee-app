import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "@/theme/theme"

export default function ErrorPage() {
  return (
    <ErrorPageStyled>
      <h1>404</h1>
      <p>Oups, cette page n&apos;existe pas.</p>
      <Link to="/">
        <button>Retourner à l&apos;accueil</button>
      </Link>
    </ErrorPageStyled>
  )
}

const ErrorPageStyled = styled.div`
  height: 100vh;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.md};
  font-family: "Amatic SC", cursive;

  h1 {
    font-size: ${theme.fonts.size.P5};
    margin: 0;
  }

  p {
    font-size: ${theme.fonts.size.P3};
  }

  button {
    cursor: pointer;
    border: none;
    padding: 12px 24px;
    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P1};
    font-weight: ${theme.fonts.weights.bold};
  }
`
