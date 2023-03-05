import styles from '../../styles/Cards.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Cards({
  selected
}) {

  const [items, setItems] = useState()

  useEffect(() => {
    setItems(selected)
    // console.log(items, 'from cards')
  }, [selected])

  return (
    <>
      <div className={styles.cardCont}>
        <div>
          {
            items && 
            items.map((item, i) => {
              return (
                <div key={i}>
                    <p>{item.gender}</p>
                    <div className={styles.cardGrid}>
                      {
                        item.Hoodies && 
                        item.Hoodies.map((hoodie, i) => {
                          return (
                          <div className={styles.card}>
                            <p key={i}>{hoodie.name}</p>
                            <Image src={hoodie.path} width={150} height={150}/>
                          </div>

                          )
                        })
                      }
                      {
                        item.Jackets && 
                        item.Jackets.map((jacket, i) => {
                          return (
                          <div className={styles.card}>
                            <p key={i}>{jacket.name}</p>
                            <Image src={jacket.path} width={150} height={150}/>
                          </div>

                          )
                        })
                      }
                      {
                        item.Headgear && 
                        item.Headgear.map((headgear, i) => {
                          return (
                          <div className={styles.card}>
                            <p key={i}>{headgear.name}</p>
                            <Image src={headgear.path} width={150} height={150}/>
                          </div>

                          )
                        })
                      }

                    </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}