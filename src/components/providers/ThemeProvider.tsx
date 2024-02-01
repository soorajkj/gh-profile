import { HTMLAttributes } from "react";
import isValid from "@emotion/is-prop-valid";
import { ThemeProvider as PrimerThemePro, theme } from "@primer/react";
import { StyleSheetManager } from "styled-components";

interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <PrimerThemePro colorMode="dark" theme={theme}>
      <StyleSheetManager shouldForwardProp={(propName) => isValid(propName)}>
        {children}
      </StyleSheetManager>
    </PrimerThemePro>
  );
}
