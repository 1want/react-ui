import { useState } from 'react'
import { Dialog } from 'votary'

export default () => {
  const [dialogVisible, setDialogVisible] = useState(false)
  return (
    <>
      <span onClick={() => setDialogVisible(true)}>点击打开Dialog</span>
      <Dialog
        onConfirm={() => {}}
        onCancel={() => {}}
        showButton
        title='把酒问月'
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}>
        <p>白兔捣药秋复春，嫦娥孤栖与谁邻。</p>
        <p>今人不见古时月，今月曾经照古人。</p>
      </Dialog>
    </>
  )
}
