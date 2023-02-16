import React from 'react'
import { MediumContext } from '../context/MediumContext'
import { useContext } from 'react'
import { useState } from 'react'
import { collection ,addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
const styles ={
  wrapper:`w-[70rem] h-[50rem] flex flex-col justify-start items-center 
  gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll`,
  title:`my-[2rem] font-bold text-3xl`,
  sf:`w-full flex justify-between gap-[1rem]`,
  ft:`flex-1 text-end`,
  ic:`flex-[5] h-min border-2 border-[#787878]`
}

function pm() {
    const {currentUser} = useContext(MediumContext)
    const [title ,setTitle] = useState()
    const [brief , setBrief] = useState()
    const [category , setCategory]= useState()
    const [postLength , setPostLength] =useState()
    const [bannerImage , setBannerImage] =useState()
    const [body , setBody] = useState()

    const addPost = async event=> {
          event.preventDefault()

          await addDoc(collection(db,'articles') , {
            
            body: body,
            category: category,
            brief: brief,
            postLength: Number(postLength),
            postedOn: serverTimestamp(),
            title: title,
           // bannerImage: bannerImage,
             author: currentUser.email

          })
    }
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a new post
        <div className={styles.sf}>
           <span className={styles.ft}>Title</span>
           <span className={styles.ic}>
            <input className={styles.if} type='text' onChange={event=>setTitle(event.target.value)} value={title}/>
           </span>
           </div>
        </div>
        <div className={styles.sf}>
           <span className={styles.ft}>Body</span>
           <span className={styles.ic}>
            <input className={styles.if} type='text' onChange={event=>setBody(event.target.value)}value={body}/>
           </span>
           </div>
           <div className={styles.sf}>
           <span className={styles.ft}>Category</span>
           <span className={styles.ic}>
            <input className={styles.if} type='text' onChange={event=>setCategory(event.target.value)}value={category}/>
           </span>
           </div>
           <div className={styles.sf}>
           <span className={styles.ft}>Brief</span>
           <span className={styles.ic}>
            <input className={styles.if} type='text' onChange={event=>setBrief(event.target.value)}value={brief}/>
           </span>
           </div>
           
           <div className={styles.sf}>
           <span className={styles.ft}>Post Length</span>
           <span className={styles.ic}>
            <input className={styles.if} type='text' rows='12' onChange={event=>setPostLength(event.target.value)} value={postLength}/>
           </span>
           </div>
           <button onClick={addPost}>Submit</button>
    </div>
  )
}

export default pm
