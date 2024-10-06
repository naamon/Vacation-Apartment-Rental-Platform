import { Rate } from 'rsuite';
import FrownIcon from '@rsuite/icons/legacy/FrownO';
import MehIcon from '@rsuite/icons/legacy/MehO';
import SmileIcon from '@rsuite/icons/legacy/SmileO';
import '../rate.css'


export const RateUs = () => {

  const renderCharacter = (value:any, index:any) => {
    // unselected character
    if (value < index + 1) {
      return <MehIcon />;
    }
    if (value < 3) {
      return <FrownIcon style={{ color: '#99A9BF' }} />;
    }
    if (value < 4) {
      return <MehIcon style={{ color: '#F4CA1D' }} />;
    }
    return <SmileIcon style={{ color: '#ff9800' }} />;
  };
  
  return (
    <>
      <div>
        <Rate defaultValue={5} renderCharacter={renderCharacter} />
      </div>

    </>
  )
}


