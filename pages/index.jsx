import { makeStyles } from "@material-ui/core/styles"
import Layout from "../src/layout/Layout"
import {useStore, useDispatch} from "../src/Store"

const useStyles = makeStyles(theme => ({
  root: {
    width: `99%`,
    margin: `auto`,
    backgroundColor: `rgb(217, 217, 217)`,
    textAlign: `center`,
    height: 250,
  },
}))

export default function Index() {
  const classes = useStyles()

  // const {store: {themeColor}} = useStore()
  
  return (
    <Layout>
      <div className={classes.root}>home</div>
      <div className={classes.root}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis eaque maxime quos ut optio harum, saepe placeat laudantium, quidem culpa ducimus laborum sunt corporis et, eligendi ipsa est voluptatum officiis!</div>
    </Layout>
  )
}
