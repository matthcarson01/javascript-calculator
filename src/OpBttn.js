import { ACTIONS } from "./App"

export default function OpBttn({ id, op,dispatch}) {
    return ( 
        <div 
            id={id} 
            className="btn bkg-gry"
            onClick={ () => dispatch({ type: ACTIONS.PICK_OP, payload:{op} }) }
        >{op}</div> 
    )
}
