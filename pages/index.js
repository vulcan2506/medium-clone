import Head from 'next/head'
import Image from 'next/image'
import Header from '../../m2/components/header'
import { MediumContext } from '../context/MediumContext'
import { useContext } from 'react'
import Post from '../components/Post'
const Home = () => {
  const{ users }= useContext(MediumContext)
  console.log(users, 'users')
  const{ posts }= useContext(MediumContext)
  console.log(posts, 'users')
  return (
     
           
      <div className='max-w-7-xl mx-auto'>
       <Header/>
           <div className='flex justify-between items-center  bg-yellow-300 border-y
           border-black py-10 lg:py-0 shadow-xl'>
            <div className=' px-10 space-y-5'>
              <h1 className='text-6xl max-w-xl font-serif'>
                 <span className='underline decoration-black decoration-4'>
                 Medium
                 </span>{' '}
                 Is a place to read and write , and connect
              </h1>
                <h2 className='text-2xl max-w-xl font-serif'>
                  It's easy andf free to connect to post your thinking on topic and connect
                  with million of readers.
                </h2>
            </div>
                 </div>
                  {posts.map(post => (
                  <Post post={post} key={post.id}/>
                  ))}
                  </div>
  )
}


export default Home