export const elementReveal = (elementReference) => {
  window.requestAnimationFrame(() => {
    elementReference.style.clipPath = 'inset(0% 0% 0% 0%)'
  })
}

export const elementHide = (elementReference) => {
  window.requestAnimationFrame(() => {
    elementReference.style.clipPath = 'inset(100% 0% 8% 100%)'
  })
}
