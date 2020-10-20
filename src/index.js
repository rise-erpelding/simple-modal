import React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'


export const SimpleModal = (props) => {
  const modalClass = classnames({
    [styles.show]: props.show,
    [styles.hide]: !props.show,
  }, styles.modal)

  return (
    <div className={modalClass}>
      <div className={styles.main}>
        {props.children}
      </div>
    </div>)
}
