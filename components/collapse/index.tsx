import React from 'react'
import PropTypes from 'prop-types'
import { ModalStyle, Overlay } from './styles'

function Modal( { isOpen, closeModal, children } ) {

  return isOpen
    ?
    <>
      <Overlay onClick={ closeModal } />
      <ModalStyle>{ children }</ModalStyle>
    </>
    : null
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal

/*
pensé usar React Portal aquí, pero parece que al usar styled components el position fixed funciona correctamente
*/