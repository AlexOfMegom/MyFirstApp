import React,{useState} from 'react';

const NewArticles = (props) => {
    
        	const [value1, setValue1] = useState();
        	const [value2, setValue2] = useState();
        	const [result, setResult] = useState();
            
        	return <div>
        		<input value={value1} onChange={event => setValue1(event.target.value)} />
        		<input value={value2} onChange={event => setValue2(event.target.value)} />
                
        		<button onClick={() => setResult(Number(value1) + Number(value2))}>btn</button>
        		<p>result: {result}</p>
        	</div>;
};

export default NewArticles;





// import React,{useState} from 'react';
// import styles from './Articles.module.css';
// import NewArticles from './NewArticles';
// const Articles = () => {
//     const [value1, setValue1] = useState();
//     const [result, setResult] = useState();

//     const [city,setCity] = useState('');
//     console.log(city);

//      const handleSubmit = (e) =>{
//          e.preventDefault();


//          if (city>0){
//          setResult(city);
//          }
//          else {
//            alert ('wrong')
//          }
//         // if(city != 3){
//         //     alert("asjkfhkajshfkjfh");
//         // }
//         // else if(city == 3){
//         //     alert("this is 3");
//         // }
            
        
       
//      };
//      return (
//         <div>
//             <form onSubmit={handleSubmit}>
//             <input 
//             type="text"
             
//               placeholder='City'
//               value={city}
//               onChange={(e)=>setCity(e.target.value)}
//                />


//              <input type="submit" value="Отправить" />
//                </form>

//                <input value={value1} onChange={event => setValue1(event.target.value)} />
        	
                
//         		<button onClick={() => setResult(value1)}>btn</button>
//         		<p>result: {result}</p>
              
            
//             <h1>Articles</h1>

//             <div className={styles.card}>
//                 <img src="" alt="" />
//                 <h4></h4>
//                 <a href="">Read now</a>
//             </div>
           
//         </div>
//     );
// };

// export default Articles;