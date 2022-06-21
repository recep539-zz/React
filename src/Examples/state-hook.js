import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(props.text);
    //componentdidmount ve update komutlarını kullanmış oluyoruz.(useEffect)
    //componentdidmount sadece bir kere çalışsın istiyorsak [] parametresi yollarız.
    //count
    useEffect(() => {
        console.log("componentdidmount")
        const countData = localStorage.getItem("count");
        if (countData) {
            setCount(Number(countData))
        }
    }, [])


    useEffect(() => {
        console.log("count")
        localStorage.setItem("count", count)
    }, [count])

    useEffect(() => {
        console.log("componentdidmount,update");
    })

    return (
        <div>
            <p>Butona {count} kez tikladiniz.</p>
            <p>Girilen text: {text}</p>
            <button className='btn btn-success' onClick={() => setCount(count + 1)}>Arttır(+)</button>
            <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Azalt(-)</button>
            <button className='btn btn-secondary' onClick={() => setCount(props.count)}>Reset</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}
App.defaultProps = {
    count: 0,
    text: ""
}

ReactDOM.render(<App />, document.getElementById("root"));
