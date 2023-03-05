import Image from "next/image";
import styles from '../../styles/Sidebar.module.css'

export default function Sidebar() {

    const genders = ['Male', 'Female', 'Unisex']
    const types = ['Hoodies', 'Jackets', 'Headgear']
    const liItems = types.map((type, i) => {
        return <li key={i}>{type}</li>
    })

  return (
    <>
      <div>
        <h1>Filter By:</h1>
        <div className={styles.listCont}>
        {
            genders.map((gender, i) => {
                return (
                    <>
                        <h3>{gender}</h3>
                        <ul className={styles.list}>
                            {liItems}
                        </ul>
                    </>
                )
            })
        }

        </div>
      </div>
    </>
  )
}
