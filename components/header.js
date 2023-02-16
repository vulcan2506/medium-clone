import React from 'react'
import { useContext } from 'react'
import { MediumContext } from '../context/MediumContext'
import ReactModal from 'react-modal'
import { useRouter } from 'next/router'
import Pm from './pm'
import Link from 'next/link'

ReactModal.setAppElement('#__next')
const styles ={
 wrapper: `flex justify-center gap-10 p-5 bg-[#FCC017]`,
 content:`max-w-7xl flex-1 flex justify-between gap-10`,
 bannerNav: ` flex cursor-pointer items-center space-x-5`,
 accentedButton:`bg-black text-white py-2 px-4 rounded-full`
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '0',
    border: 'none'

  },
  overlay: {
    backgroundColor: 'rgba(10,11,13,0.75)'
  }
}
const header = () => {
  const router = useRouter()
  const { currentUser, handleUserAuth } = useContext(MediumContext)
  return (
    <div className={styles.wrapper}>
          <div className={styles.content}>
        <img className=' p-2 h-20' src='/logo.png' />
       {currentUser ? 
       (<div className={styles.bannerNav}>
          <div> Our Story </div>
          <div> Membership</div>
          <Link href={'/?addnew=1'}>
          <div > Write </div></Link>
          <div className={styles.accentedButton}> Get Started </div>
        </div>)
        : (
          (<div className={styles.bannerNav}>
             <div> Our Story </div>
              <div> Membership</div>
              <div onClick={handleUserAuth}> Sign In </div>
              <div className={styles.accentedButton}> Get Started </div>
            </div>)
        )
       }  
      <ReactModal
        isOpen={Boolean(router.query.addnew)}
        onRequestClose={() => router.push('/')}
        style={customStyles}>
        <Pm />
      </ReactModal>
      </div>
      </div>

  )
}

export default header
