import Link from "next/link"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  link: {
    // fontSize: `1rem`,
    textTransform: `none`,
  },
}))

export default function LinkButton({ href, name }) {
  const classes = useStyles()
  
  return (
    <Link href={href} passHref>
      <Button component="a" className={classes.link}>{name}</Button>
    </Link>
  )
}