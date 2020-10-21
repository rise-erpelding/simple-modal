import React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'


const SimpleModal = (props) => {
  const modalClass = classnames({
    [styles.show]: props.show,
    [styles.hide]: !props.show,
  }, styles.modal)

  return (
    <div className={modalClass}>
      {props.children}
    </div>)
}

export default SimpleModal