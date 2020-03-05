import { Controller } from "stimulus"
import Aos from "aos"

export default class extends Controller {
  // static targets = ["output"]

  connect() {
    this.animation = Aos.init();
  }
}