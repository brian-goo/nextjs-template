import { LinkButton } from "../components"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, IconButton } from "@material-ui/core"
import { Menu, GitHub, InvertColors } from "@material-ui/icons"

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
        <IconButton>
          <InvertColors />
        </IconButton>
        <IconButton>
          <GitHub />
        </IconButton>
      </Grid>
    </Grid>
  )
}