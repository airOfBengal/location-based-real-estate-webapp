import React, { useState } from 'react'

function AppleComponent() {
    const [n, setN] = useState(0)
    function AppleDisplay(n) {
        if (n == 0 || n == 1) {
            return `Atiq has ${n} apple`;
        } else if (n > 1) {
            return `Atiq has ${n} apples`;
        } else {
            return `Atiq owes us ${Math.abs(n)} apples`;
        }
    }

    return (
        <>
            <div>
                <h1>{AppleDisplay(n)}</h1>
            </div>
            <button onClick={() => setN((currentValue) => currentValue + 1)} className="inc-btn">Increase</button>
            <button onClick={() => setN((currentValue) => currentValue - 1)} className="dec-btn">Decrease</button>
            {n > 10 ? <h1>Atiq has too many Apples</h1> : ""}
        </>
    )
}

export default AppleComponent