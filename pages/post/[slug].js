import React from 'react'
import ReadersNav from '../../components/ReadersNav'
import Recomendations from '../../components/recomendations'
import Article from '../../components/article'
import Router, { useRouter } from 'next/router'
import { useContext } from 'react'
import { useEffect ,useState} from 'react'
import { MediumContext } from '../../context/MediumContext'
const styles ={

  content: `flex`,
}
const post = () => {
  const {posts , users} = useContext(MediumContext)
  const router = useRouter()
  const [post, setPost] = useState()
  const [author, setAuthor] = useState()
  useEffect(() => {
    if(posts.length === 0){
      return
    }
    setPost(posts.find(post => post.id === router.query.slug))
    
    setAuthor(users.find(users => users.id === post?.data?.author ))
  }, [post]);
  return (
    <div className={styles.content}>
      
        < ReadersNav />
        <Article post={post} author={author}/>
        <Recomendations/>
    
        </div>
  )
}

export default post