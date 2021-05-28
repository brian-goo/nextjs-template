import { makeStyles } from "@material-ui/core/styles"
import { Grid, IconButton } from "@material-ui/core"
import { Menu, GitHub, InvertColors } from "@material-ui/icons"
import {useStore, useDispatch} from "../Store"
import { LinkButton } from "../components"

const useStyles = makeStyles(theme => ({
  root: {
    width: `95%`,
    margin: `auto`,
  },
  header: {
    height: 90,
  },
}))

export default function Header() {
  const classes = useStyles()
  const {store: {themeColor}} = useStore()
  const {dispatch} = useDispatch()
  
  const toggleThemeColor = () => {
    const color = themeColor === `dark` ? `light` : `dark`
    dispatch({type: `THEME_COLOR`, themeColor: color})
  }

  return (
    <Grid container direction="row" justify="space-between" alignItems="center" className={classes.header} classes={{root: classes.root}}>
      <Grid>
        <IconButton>
          <Menu />
        </IconButton>
        <LinkButton href="/" name="Home" />
        <LinkButton href="/about" name="About" />
      </Grid>
      <Grid>
        <IconButton onClick={() => toggleThemeColor()}>
          <InvertColors />
        </IconButton>
        <IconButton>
          <GitHub />
        </IconButton>
      </Grid>
    </Grid>
  )
}