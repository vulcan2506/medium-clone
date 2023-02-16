import React from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Post = ({ post }) => {

  const [authorData, setAuthorData] = useState(null)

  useEffect(() => {
    const getAuthorData = async () => {
      console.log('post', post)
        setAuthorData(
          (await getDoc(doc(db, 'users', post.author.data))).data()
        )
        getAuthorData()
    }  
     
  }, [post])

  return (
    <div>
      <div className='bg-yellow-200 '>
        <Link href={`/post/${post.id}`}><a>
          <div className='space-x-20 p-2 my-10 shadow-xl'>
            <div>
                {authorData?.name}
              <div className='flex p-10 items-center mt-2 text-3xl space-x-10 font-bold font-serif'>
                {post.data.title}        </div>

              <div className=' px-10 items-center text-xl '>{post.data.breif} </div>
              <div className=' flex space-x-10 px-10 mt-10 items-center text-2xl  font-extralight'>
               {post.data.postLength} Min read ~  <div className='space-x-4 rounded-md p-2 bg-gray-200'>{post.data.category}</div> </div>
              <div className='flex justify-center  rounded-full border-gray-300 h-20 px-10 space-x-5'>
              </div>


            </div>
          </div>
        </a></Link>
      </div>

    </div>

  )
}
export default Post