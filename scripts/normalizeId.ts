
export default function normalizeId(id){
  
  function addZeroLeft( string: string ) {
    if ( string.length < 3 ) {
      string = "0".concat( string )
      return addZeroLeft( string )
    } else {
      return string
    }
  }

  if ( id < 100 ) {
    const x: string = id.toString()
    return addZeroLeft( x )
  }else{
    return id
  }

}
