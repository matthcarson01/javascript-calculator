import { ACTIONS } from "./App"

export default function NumBttn({id,num,dispatch}) {
    return ( 
        <div 
            id={id} 
            className="btn bkg-ltgry" 
            onClick={ () => dispatch({ type: ACTIONS.ADD_NUMBER, payload:{num} }) }
        >{num}</div> 
    )
}
