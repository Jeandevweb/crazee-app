import { CSSTransition } from "react-transition-group"
import Ribbon from "@/components/reusable-ui/Ribbon"

export default function RibbonAnimated() {
  return (
    <CSSTransition in={true} timeout={500} appear={true} classNames="ribbon-animation">
      <Ribbon className="ribbon" label="nouveau" />
    </CSSTransition>
  )
}
