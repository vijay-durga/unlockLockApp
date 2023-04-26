import {useState} from 'react'

import {
  UnlockContainer,
  Container1,
  Image,
  Text,
  Button1,
} from './styledComponents'

const Unlock = () => {
  const [islocked, setLocker] = useState(false)

  const onClickButton = () => {
    setLocker(prevState => !prevState)
  }

  const imageUrl = islocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altText = islocked ? 'unlock' : 'lock'

  const text = islocked ? ' Your device is Unlocked' : 'Your device is Locked'

  const buttonText = islocked ? 'Lock' : 'Unlock'

  return (
    <UnlockContainer>
      <Container1>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
        <Button1 type="button" onClick={onClickButton}>
          {buttonText}
        </Button1>
      </Container1>
    </UnlockContainer>
  )
}

export default Unlock
