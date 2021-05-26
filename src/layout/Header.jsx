import { LinkButton } from "../components"

export default function Header() {
  return (
    <>
      <LinkButton href="/" name="Home" />
      <LinkButton href="/about" name="About" />
    </>
  )
}