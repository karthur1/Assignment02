import Head from 'next/head'
import Sidebar from '@/comps/sidebar'
import styles from '../styles/Home.module.css'
import Cards from '@/comps/cards'
import { useState, useEffect } from 'react'

export default function Home() {

  const [item, setItem] = useState()


  const items = [
    {
      gender : 'Male',
      items : {
        Hoodies : [
          {
            name: 'Aerospace',
            path: '/products/hoodies/hood_aerospace_black.png',
            price: '59.99'
          },
          {
            name: 'Foresty',
            path: '/products/hoodies/hoodie_forestry_green.png',
            price: '59.99'
          },
        ],
        Jackets : [
          {
            name: 'Waterproof Jacket',
            path: '/products/jackets/waterproof_jacket_black.png',
            price: '79.99'
          }
        ],
      }
    },
    {
      gender : 'Female',
      items : {
        Hoodies : [
          {
            name: 'Russel Athletic Hood',
            path: '/products/hoodies/russell_athletic_hood_black.png',
            price: '69.99'
          },
          {
            name: 'Classic Avalon Fleece Hoodie',
            path: '/products/hoodies/classic_avalon_fleece_hoodie_black.png',
            price: '57.99'
          }
        ],
        Jackets : [
          {
            name: 'Soft Shell Hooded Jacket',
            path: '/products/jackets/soft_shell_hooded_jacket_black.png',
            price: '82.99'
          }
          
        ],
      }
    },
    {
      gender : 'Unisex',
      items: {
        Hoodies : [
          {
            name: 'Champion Full-Zip Hoodie',
            path: '/products/hoodies/champion_full_zip_hoodie_black.png',
            price: '79.99'
          }
        ],
        Headgear : [
          {
            name: 'Legacy Adjustable Hat',
            path: '/products/headgear/legacy_adjustable_hat_navy.png',
            price: '29.99'
          },
          {
            name: 'Legacy Hat Trucker',
            path: '/products/headgear/legacy_hat_trucker_black_orange.png',
            price: '36.99'
          },
          {
            name: 'Legacy Toque',
            path: '/products/headgear/legacy_toque_black.png',
            price: '34.99'
          }
        ]
      }
    },
  ]

  const selected = () => {
    if (item) {
      const filtered = items.filter(i => i.gender == item.gender)
      const filteredItems = filtered.map((o, i) => {
        return o.items
      })
      if (item.item) {
       const newFilter = filtered.map((o, i) => {
        return {
          [item.item] : o.items[item.item]
        }
       })
       console.log(newFilter, 'newfilter')
       return newFilter
      }
      console.log(filteredItems, 'all')
      return filteredItems
    }
    return 
  }

  useEffect(() => {
    console.log(item)
  }, [item])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Sidebar setItem={setItem} />
        <Cards selected={selected} />
      </main>
    </>
  )
}
