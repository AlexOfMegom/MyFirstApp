import React,{useState,useEffect} from 'react';
import styles from './Articles.module.css'
const Articles = () => {

 
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    const fetchData  = async()=>{
      try{
      const response  = await fetch ('https://jsonplaceholder.typicode.com/posts');
      const data  =  await response.json();

      setPosts(data);

      } catch(error){
        console.log('error');
      }
      setLoading(false);
    };
    fetchData();
    console.log(posts)
  },[]);
  return (
    <div>
      <h1>Articles</h1>
      {loading&& "This is load"}

      <div className={styles.wrapper}>
      {posts.map(post =>
        <div className={styles.card}>
     
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        
        </div>
 
        
        )}
  </div>

      
    </div>
  );
};

export default Articles;