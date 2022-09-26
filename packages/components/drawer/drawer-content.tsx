import { createNamespace } from '../../utils/createNamespace'
import classNames from 'classnames'
import { Header, Content } from '../common'

import { DrawerProps } from './types'

const bem = createNamespace('drawer')

const Drawer = (props: DrawerProps) => {
  const { direction = 'right', title, onClose, children } = props

  const classes = bem(classNames([direction]))

  return (
    <div
      className={classes}
      onClick={e => {
        e.stopPropagation()
      }}>
      <Header title={title} onClose={onClose} />
      <Content children={children} />
    </div>
  )
}

export { Drawer }
