import { Dialog } from '../../../packages/components/dialog'
import { useState } from 'react'

export default () => {
  const [dialogVisible, setDialogVisible] = useState(false)
  return (
    <div>
      <span onClick={() => setDialogVisible(true)}>点击打开Dialog</span>
      <Dialog
        title='剑神-卓凌昭'
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        昆仑剑出血汪洋，千里直驱黄河黄。
      </Dialog>
    </div>
  )
}
