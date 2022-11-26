export default function Slider({val, setVal, lowerBound, upperBound}) {
    return (
        <div className="inline">
            <span className="small-font">{lowerBound}</span>
            <input type="range" min={lowerBound} max={upperBound} step={1} defaultValue={val} onChange={(event) => setVal(event.target.value)}/>
            <span className="small-font">{upperBound}</span>
        </div>
    )
}