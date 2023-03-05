import styles from '../../styles/Cards.module.css'
import { useEffect, useState } from 'react'

export default function Cards({
  selected
}) {

  const [items, setItems] = useState()

  useEffect(() => {
    setItems(selected)
    console.log(items, 'from cards')
  }, [selected])

  return (
    <>
      <div className={styles.cardCont}>
        <div>
          {
            items && 
            items.map((item) => {
              return (
                <div>
                    <h1>{item.gender}</h1>
                    {
                      item.items.hoodies && 
                      item.items.hoodies.map((hoodie, i) => {
                        return (
                        <>
                          <h1>{hoodie.name}</h1>
                        </>

                        )
                      })
                    }
                    {
                      item.items.jackets && 
                      item.items.jackets.map((jacket, i) => {
                        return (
                        <>
                          <h1>{jacket.name}</h1>
                        </>

                        )
                      })
                    }
                    {
                      item.items.headgears && 
                      item.items.headgears.map((headgear, i) => {
                        return (
                        <>
                          <h1>{headgear.name}</h1>
                        </>

                        )
                      })
                    }
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}