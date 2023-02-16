import {  createContext , useEffect } from "react";
import { collection ,getDocs ,setDoc ,doc , query , documentId } from "firebase/firestore";
//import { doc } from "firebase/firestore";
import { auth , provider  } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { db } from "../firebase";
import { useState } from "react";

 export const MediumContext = createContext()

 export const MediumProvider = ({children})=>{
    const[users , setUsers] = useState([])
    const [posts , setPosts] = useState([])
    const [currentUser ,  setCurrentUser] = useState()
    
    useEffect(()=>{
        const getUsers = async()=>{
            const querySnapshot = await getDocs(collection(db,'users'))
            setUsers(querySnapshot.docs.map(doc=> {
                return{
                id: doc.id,
                data:{
                   ...doc.data()
                } } }
                ))
          }  
          getUsers()
        
    })
        useEffect(() => {
            const getPosts = async() => {
                const querySnapshot = await getDocs(collection(db,'articles'))
                setPosts(querySnapshot.docs.map(doc => {

                    return{
                        id: doc.id,
                        data:{
                           body: doc.data().body,
                            breif: doc.data().brief,
                            category: doc.data().category,
                            postLength: doc.data().postLength,
                            bannerImage: doc.data().bannerImage,
                            title: doc.data().title,
                            comments: doc.data().comments,
                            //postedOn: doc.data().postedOn.toDate(),
                            author: doc.data().author,
                        } } 
                 }))
                }
            getPosts() 
           },[])

           const addUserToFirebase = async user => {
            await setDoc(doc(db, 'users', user.email),{
            email: user.email,
            name: user.displayName,
            followerCount: 0
            })
         }
        
        const handleUserAuth = async ()=>{
           const userData = await signInWithPopup(auth , provider)
           const user = userData.user
           console.log(user)
           setCurrentUser(user)
           addUserToFirebase(user)
        }
        
 
 return(
    <MediumContext.Provider value={{posts, users , handleUserAuth ,currentUser}}>
        {children}
    </MediumContext.Provider>
 )
 }
 