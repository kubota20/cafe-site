import {
  Container,
  Wrapper,
  InfoH,
  InfoB,
  Contact,
  PhoneButton,
  InquiryButton,
  Inquiry,
} from './style'
import { employmentData } from '../../data/data'

const Employment = () => {
  return (
    <Container>
      {employmentData.map((info) => (
        <Wrapper key={info.id}>
          <InfoH>{info.dataHead}</InfoH>
          <InfoB>{info.data}</InfoB>
        </Wrapper>
      ))}

      <Contact>
        <PhoneButton>
          <a href="tel:00000000">電話: 000-000-000</a>
        </PhoneButton>
        <InquiryButton>
          <Inquiry>お問い合せフォーム</Inquiry>
        </InquiryButton>
      </Contact>
    </Container>
  )
}

export default Employment
