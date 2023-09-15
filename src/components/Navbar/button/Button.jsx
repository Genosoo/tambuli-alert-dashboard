import { BsQuestionCircleFill, BsChatLeftDotsFill, BsFillBellFill } from 'react-icons/bs'

export default function Button() {
  return (
    <div className='navbarButtonContainer'>
        <div className="buttonCircle">
            <BsQuestionCircleFill />
        </div>
        <div className="buttonCircle">
            <BsChatLeftDotsFill />
        </div>
        <div className="buttonCircle">
            <BsFillBellFill />
        </div>
    </div>
  )
}
