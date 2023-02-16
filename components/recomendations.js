import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
//import {MdMarkEmailUnread} from 'react-icons/mi'
const styles ={
  wrapper:`h-screen min-w-[10rem] max-w-[30rem] flex[1.2] p-[2rem]`,
  accentedButton: `flex items-center justify-center text-sm bg-black 
  text-white my-[2rem] py-[.6rem] rounded-full`, 
  searchBar:`flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem]
  rounded-full`,
  searchInput:`border-none outline-none bg-none w-full`,
  authorContainer:`my-[2rem]`,
  authorProfileContainer:`h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: `font-semibold mb-[.2rem] mt[1rem]`,
  authorFollowing:`text-gray-900`,
  actions:`flex gap-[.6rem] my-[1rem]`,
  ab:`bg-green-500 text-white rounded-full px-[.6rem] py-[.4rem]
  text-sm`,
  recomendationsAuthorProfileContainer:`
  rounded-full overflow-hidden h-[1.4rem]
  w-[1.4rem]`,
  recomendationsAuthorName:`
  text-sm`,
  recomendationsAuthorContainer:`
  fles items-center gap-[.6rem]`,
  recomendationsThumbnailContainer:`flex flex-1 items-center justify-center
  h-[4rem] w-[4rem]`,
  recomendationsThumbnail:`object-cover`,
  articleContentWrapper:`flex items-center justify-between cursor-pointer
  my-[1rem]`,
  articleContent:`flex-[4]`
}
function recomendations({post , author}) {
  return (
    
      <div className={styles.wrapper}>
      <div className={styles.accentedButton}> Get Unlimited Access</div>
      <div className={styles.searchBar}><AiOutlineSearch/>
      <input className={styles.searchInput}
      placeholder='Search'
      type='text'/>
        </div>
        <div className={styles.authorContainer}>
          <div className={styles.authorProfileContainer}>
            <img className='h-100 w-100' src ='/logo.png'/>
            </div>
            <div className={styles.authorName}>The author</div>
            <div className={styles.authorFollowing}>1m Followers</div>
            <div className={styles.actions}>
              <button className={styles.ab}>Follow</button>
              <button className={styles.ab}>--||:_:||--</button>
              </div>
            </div>
              <div className={styles.recomendationsAuthorContainer}>
              <div className={styles.title}>More From Medium</div>
             <div className={styles.articleContent}><div>
             <div className={styles.articleContentWrapper}></div>
               <div className={styles.articleContent}></div>
           <div className={styles.recomendationsAuthorProfileContainer}>
           <img className='h-20 w-20' src='/logo.png'/>
            </div>


 <div className={styles.recomendationsAuthorName}>  </div>
  <div className='font-bold'>Jon overnson</div>
  <div className={styles.recomendationsThumbnailContainer}>
 <img className='h-100 w-100' src='/logo.png'/>
 </div>
 </div>
  </div>
  </div>
      </div>  
      
  )
}

export default recomendations
