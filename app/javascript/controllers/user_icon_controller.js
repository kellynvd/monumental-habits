import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["icon"]

  toggleActive() {
    this.iconTarget.classList.remove("text-eclipse")
    this.iconTarget.classList.add("text-sunset")
    this.element.querySelector("input").classList.add("border-sunset", "text-sunset")
  }

  toggleInactive() {
    this.checkInput()
  }

  checkInput() {
    const input = this.element.querySelector("input")
    if (input.value === "") {
      this.iconTarget.classList.add("text-eclipse")
      this.iconTarget.classList.remove("text-sunset")
      input.classList.remove("border-sunset", "text-sunset")
    } else {
      this.iconTarget.classList.remove("text-eclipse")
      this.iconTarget.classList.add("text-sunset")
      input.classList.add("border-sunset", "text-sunset")
    }
  }
}
