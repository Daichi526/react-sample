import React, { memo, useState } from 'react'

type FizzProps = {
  isFizz: boolean
}

// Fizzは通常の関数コンポーネント
// isFizzがtrueの場合はFizzと表示し、それ以外は何も表示しない
// isFizzの変化に関わらず、親が再描画されるとFizzも再描画される
const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizzが再描画されました, isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

// 先のコード例のtype BuzzProps以降を編集
type BuzzProps = {
  isBuzz: boolean
  // propsにonClickを追加
  onClick: () => void
}

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props
  console.log(`Buzzが再描画されました, izBuzz=${isBuzz}`)
  return <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>
})

export const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  // この関数はParentの再描画の度に作成される
  const onBuzzClick = () => {
    console.log(`Buzzがクリックされました isBuzz=${isBuzz}`)
  }
  console.log(`Parentが再描画されました, count=${count}`)

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
      </p>
    </div>
  )
}
