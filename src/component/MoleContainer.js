import Mole from './Mole'
import { useState } from 'react'
import EmptySlot from './EmptySlot'

function MoleContainer(props) {
    let [theMole, setTheMole] = useState(false)

    const handleClick = () => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }
    let displayMole = theMole ? <Mole toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />
    
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer
