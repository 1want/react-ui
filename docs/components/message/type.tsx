import { Button, Message } from 'votary'

const msg1 = () => {
  Message({
    title: '有些梦想虽然遥不可及，但不是不可能实现。'
  })
}

const msg2 = () => {
  Message({
    title: '人们总是被命运安排，而我安排命运。',
    type: 'success'
  })
}

const msg3 = () => {
  Message({
    title: '或许就是这样为了生存，而一点点忘记了最初的本意。',
    type: 'warning'
  })
}

const msg4 = () => {
  Message({
    title: '得到了不该得到的，就会失去不该失去的。',
    type: 'error'
  })
}

export default () => (
  <>
    <Button onClick={msg1}>消息</Button>
    <Button onClick={msg2}>成功</Button>
    <Button onClick={msg3}>警告</Button>
    <Button onClick={msg4}>失败</Button>
  </>
)
