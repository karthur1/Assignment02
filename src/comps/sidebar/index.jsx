import styles from '../../styles/Sidebar.module.css'
import { useEffect, useState } from 'react'

export default function Sidebar({
    setItem
}) {

    const genders = ['Male', 'Female', 'Unisex']
    const types = ['Hoodies', 'Jackets', 'Headgear']

    const handleClick = (gender, type) => {
        setItem({
            gender : gender,
            item : type
        })
    }



  return (
    <>
      <div>
        <h1>Filter By:</h1>
        <div className={styles.listCont}>
        {
            genders.map((gender, i) => {
                return (
                    <div key={i}
                        
                    >
                        <h3
                            onClick={() => handleClick(gender)}
                        >{gender}</h3>
                        <ul className={styles.list}>
                            {
                                types.map((type, i) => {
                                    return(
                                        <li 
                                            key={i}
                                            onClick={() => handleClick(gender, type)}
                                        >{type}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            })
        }

        </div>
      </div>
    </>
  )
}
