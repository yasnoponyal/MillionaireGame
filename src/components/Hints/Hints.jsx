import PercentIcon from '@mui/icons-material/Percent';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import PhoneIcon from '@mui/icons-material/Phone';
import './style.css'

function Hints({ 
  isSecondChanceUsed, 
  isFiftyFiftyUsed, 
  isPhoneUsed, 
  onFiftyFiftyActivate, 
  onPhoneActivate 
}) {
  return (
    <div className="question__hints">
      <button 
        className={`question__hint ${isFiftyFiftyUsed ? 'question__hint--used' : ''}`}
        disabled={isFiftyFiftyUsed}
        onClick={onFiftyFiftyActivate}
      >
        <PercentIcon sx={{ fontSize: 28 }} />
      </button>
      
      <button 
        className={`question__hint ${isSecondChanceUsed ? 'question__hint--used' : ''}`}
        disabled={isSecondChanceUsed}
      >
        <LooksTwoIcon sx={{ fontSize: 28 }} />
      </button>
      
      <button 
        className={`question__hint ${isPhoneUsed ? 'question__hint--used' : ''}`}
        onClick={onPhoneActivate}
        disabled={isPhoneUsed}
      >
        <PhoneIcon sx={{ fontSize: 28 }} />
      </button>
    </div>
  )
}

export default Hints