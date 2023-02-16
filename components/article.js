import React from 'react'
import { AiFillAlipayCircle } from 'react-icons/ai'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const styles= {
    wrapper:`flex items-center justify-center flex-[3] border-l border-r`
   ,content: `h-screen w-full overflow-scroll p-[2rem]`,
   phc:`flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`
   ,ac:` flex gap-[1rem]`
   ,apic: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
   image:'h-44 w-screen object-cover',
   coloumn:` flex flex-1 flex-col justify-center`
   ,postDetails:`flex gap-[.2rem] text-gray-500`,
   ListenButton:`flex items-center
   gap-[.2rem] text-green-400`,
   socials:`flex gap-[1rem]
   cursor-pointer text-gray-400`,
   space:`w-[.5rem]`,
   bannerContainer:`h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
   amc:`flex flex-col gap-[1rem]`,
   
}
function article({post,author}) {
  console.log(post , author)
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
      <div className={styles.phc}>
        <div className={styles.ac}>
        <div className={styles.apic}>
       <img className='flex h-44 w-44' src={author?.data.image}/>
        </div>
        <div className={styles.coloumn}>
               <div>{author?.data?.name}</div> 
               <div className={styles.postDetails}>
                <span>{post?.data?.postLength} min read <span className={styles.ListenButton}><AiFillAlipayCircle/>Listen</span></span>
               </div>
        </div>
      <div>
       <WhatsAppIcon/>
       <TelegramIcon/>
       <InstagramIcon/>
       <FacebookIcon/>
      </div>
    </div>
      </div>
      <div className={styles.article}>
      <div className={styles.bannerContainer}>
        <img className={styles.image} src='/logo2.png'/>
        </div>
        <div className=' space-x-2 font-bold text-3xl'>
             {post?.data?.title} </div>
             <div className=' space-x-2  font-serif text-[1.4rem]'> 
            
             <div>
              {post?.data?.breif}
             </div></div>
             <div className='mt-5 font-extralight text-xl p-8'>
             {post?.data?.body}
             </div>
        </div>
        </div>
      </div>
    
  )
}

export default article
