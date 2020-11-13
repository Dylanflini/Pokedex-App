export function toFirstUpperCase( value: string ) {
  const firstLetter = getFirsLetter( value )
  const firstLetterMayus = firstLetter.toUpperCase()
  const valueWithoutfirstLetter = value.replace( firstLetter, '' )

  return firstLetterMayus + valueWithoutfirstLetter
}

const getFirsLetter = ( value: string ) => value[0]