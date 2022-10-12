import { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <>
      <h1>お探しのページは見つかりませんでした。</h1>
      <div>
        <Link to={'/'}>ホームに戻る</Link>
      </div>
    </>
  )
}

export default NotFound
