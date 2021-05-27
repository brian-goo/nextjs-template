import { useMemo } from "react"
import { createMuiTheme } from "@material-ui/core/styles"

export default function useTheme(colorMode = `light`) {
  return useMemo(() => 
    createMuiTheme({
      palette: {
        type: colorMode,  
      },  
      typography: {
        fontSize: 16,
      },
    }), [colorMode])
}  