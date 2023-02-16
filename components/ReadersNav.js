import React from 'react'
import {HiOutlineHome} from 'react-icons/hi'    
import {FiBell} from 'react-icons/fi'
import {BiBookmarks} from 'react-icons/bi'
import {RiArticleLine} from 'react-icons/ri'
import {BsPencilSquare} from 'react-icons/bs'
import Link from 'next/link'
const styles ={
    logoContainer: 'cursor-pointer',
    wrapper: 'w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem] ',
    iconsContainer: 'flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-gray-900'
}
function ReadersNav() {
    
  return (
    <div>
            <div className={styles.wrapper}>
                <div className={styles.logoContainer}>
                  <Link href='/'>
                <img src ='/logo2.png' /></Link>
                    </div>
                
                <div className={styles.iconsContainer}>
            <HiOutlineHome/>
            <FiBell/>
            <BiBookmarks/>
            <RiArticleLine/>
            <div className={styles.divider}>
            <BsPencilSquare/></div>
            </div>
    </div></div>
  )
}

export default ReadersNav