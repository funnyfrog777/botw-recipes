export default function Slider() {
    return (
        <div className="inline">
            <span className="small-font">0</span>
            <input type="range" min={0} max={120}/>
            <span className="small-font">120</span>
        </div>
    )
}