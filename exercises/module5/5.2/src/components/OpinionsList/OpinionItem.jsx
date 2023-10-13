import { useContext } from 'react'
import opinionsContext from "../../contexts/OpinionContext.jsx"


const OpinionItem = ({opinion}) => {

    const {voteForOpinion} = useContext(opinionsContext);

    const handleClick = () => { voteForOpinion(opinion.id) }

    return (
        <div>
      <span className="label">
        {opinion.label}
      </span>
            &nbsp;:&nbsp;
            <span className="score">
        {opinion.score}
      </span>
            &nbsp;
            <button onClick={handleClick}>
                Vote
            </button>
        </div>
    );
}

export default OpinionItem;