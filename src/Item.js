import React, { useEffect, useState } from 'react'

const Item = (item, key, bg) => {

    const [number, setNumber] = useState(0)
    const [summary, setSummary] = useState(0)

    useEffect(() => {
        console.log(item)
        getNumber()
        summaryText()
    }, [item])

    const getNumber = () => {
        setNumber((Math.floor(Math.random() * 1000)) % 2)
        console.log(number)
    }

    const summaryText = () => {
        if ((item.item.summary).length > 35) {
            item.item.summary = (item.item.summary).substring(0, 34) + "...";
          }

    }

    return (
        <div className={`banner ${number ? "item bg2" : "item bg1"}`} key={item.id} >
            <a href={item.item.url} target='_blank'>
                <div className="text">
                    <h2>{item.item.title}</h2>
                    <p>- {item.item.news_site} - </p>
                    <p>{item.item.summary}</p>
                    <button>Read more</button>
                </div>
            </a>
        </div>
    )
}

export default Item
