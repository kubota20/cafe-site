import { Container, Left, ImgLeft, Image, P } from './style'
import { introductionImg } from '../../data/data'
import Information from './information'

const Introduction = () => {
  return (
    <>
      <Container>
        <Left>
          {introductionImg.map((imgdata) => (
            <ImgLeft>
              <Image src={imgdata.img} />
              <P>
                こちらサンプル用のサイトです。実際のお店はありません。
                <br />
                サンプルサイトサンプルサイトサンプルサイトサンプルサイト
                サンプルサイトサンプルサイトサンプルサイトサンプルサイト
                サンプルサイトサンプルサイトサンプルサイトサンプルサイト
                サンプルサイトサンプルサイトサンプルサイトサンプルサイト
                サンプルサイトサンプルサイトサンプルサイトサンプルサイト
              </P>
            </ImgLeft>
          ))}
        </Left>
        <Information />
      </Container>
    </>
  )
}

export default Introduction
