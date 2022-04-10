// import original module declarations
import "styled-components";
import { StyledThemeTypes } from "../configs/styled-components/configuration";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends StyledThemeTypes {}
}
