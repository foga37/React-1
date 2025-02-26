import { useEffect, useState } from "react";

export function Footer() {
    const [footer, setFooter] = useState('footer');
    useEffect(() => {
        console.log('Footer changed');
    }, [footer]);

    return(
        <div>
            <h1> {footer} </h1>
            <button onClick={() => setFooter('Update Footer')}> Update Footer </button>
        </div>
    )
}