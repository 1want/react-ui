import { Popconfirm } from 'votary'

const onCancel = () => {}
const onConfirm = () => {}

export default () => (
  <Popconfirm
    title='三分钟精通jvav的拼写'
    confirm-text='确认'
    cancel-text='取消'
    onCancel={onCancel}
    onConfirm={onConfirm}>
    点击打开气泡确认框
  </Popconfirm>
)
