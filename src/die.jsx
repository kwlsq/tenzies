
export default function Die(props) {
    const dieStyle = {
        backgroundColor: props.isHeld ? '#59E391' : '#fff'
    }

    return (
        <div className="die" style={dieStyle} onClick={props.hold}>
            <h2 className="die-num" >{props.value}</h2>
        </div>
    )
}