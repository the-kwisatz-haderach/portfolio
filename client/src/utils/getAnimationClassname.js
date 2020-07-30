const getAnimationClassname = (
  animationName,
  condition = true,
  options = { delay: 0 }
) =>
  condition
    ? `show animate__animated animate__${animationName}${
        options.delay ? ` animate__delay-${options.delay}s` : ''
      }`
    : 'hide'

export default getAnimationClassname
