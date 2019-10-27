const stringReplacer = ([...outputTemplate], [...inputString]) => inputString
  .map((_, i) => outputTemplate[i])
  .join('')

export default stringReplacer
