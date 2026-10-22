function Titler(props){
    let isItCrowded = () =>{
        if(props.count==props.limit){
            return(<h2>Full!</h2>)
        }
    }
    return (
        <header>
            <h1>The current count is {props.count}</h1>
            {isItCrowded()}
        </header>
    )
}
export default Titler