import React, { useCallback, useRef } from 'react'

export function useObserver(
  action: ( any?) => any,
  isWaiting: boolean = false,
  hasMore: boolean = true,
  dependencies: any[] ) {

  const observer = useRef( null )

  const ref = useCallback( node => {
    if ( isWaiting ) return
    if ( observer.current ) observer.current.disconnect()
    observer.current = new IntersectionObserver( entries => {
      if ( entries[0].isIntersecting && hasMore ) {
        action()
      }
    } )
    if ( node ) observer.current.observe( node )
  }, [dependencies] )

  return [ref]
}