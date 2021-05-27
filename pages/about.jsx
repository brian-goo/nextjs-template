import { makeStyles } from "@material-ui/core/styles"
import Layout from "../src/layout/Layout"

const useStyles = makeStyles(theme => ({
  root: {
    width: `99%`,
    margin: `auto`,
    backgroundColor: `rgb(217, 217, 217)`,
    textAlign: `center`,
    height: 250,
  },
}))

export default function About() {
  const classes = useStyles()
  
  return (
    <Layout>
      <div className={classes.root}>about</div>
      <div className={classes.root}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis eaque maxime quos ut optio harum, saepe placeat laudantium, quidem culpa ducimus laborum sunt corporis et, eligendi ipsa est voluptatum officiis!</div>
    </Layout>
  )
}
