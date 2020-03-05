// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//

import { Controller } from "stimulus"
import M from "materialize-css"

export default class extends Controller {
  // static targets = ["output"]

  connect() {
    this.collapsible = M.Collapsible.init(this.element, {});
    console.log("connected")
    console.log("connected")
    console.log("connected")
  }

  disconnect() {
    this.collapsible.close()
    this.collapsible.destroy()
  }
}
