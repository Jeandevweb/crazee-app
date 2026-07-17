import styled from "styled-components"
import { FiSun, FiMoon } from "react-icons/fi"
import { theme } from "@/theme/theme"
import { useThemeMode } from "@/hooks/useThemeMode"

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode()
  const isDark = mode === "dark"

  return (
    <ThemeToggleStyled
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      title={isDark ? "Mode clair" : "Mode sombre"}
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </ThemeToggleStyled>
  )
}

const ThemeToggleStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.circle};
  background: ${theme.colors.surface};
  color: ${theme.colors.primary};
  cursor: pointer;
  font-size: ${theme.fonts.size.P1};
  transition: all 200ms ease;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`
