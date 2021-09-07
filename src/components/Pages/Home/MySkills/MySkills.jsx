import React, { useState }  from 'react';
import s from './MySkills.module.css';
const MySkills = () => {

    const[skills,setTodo] = useState([
        {
            id:1,
            title: 'Html',
            src :'https://nuotraukos.mediakatalogas.lt/thumbs/logo-2582748_1280.png',
            info:"I know the main tags, and I know how to apply them"
        },   
        {
            id:2,
            title: 'Css',
            src :"https://world-it.ro/images/logo_CSS.png",
            info:"I know how to style components. I use Flex, so far without using preprocessors"
    
        },  
        {
            id:3,
            title: 'Java Script',
            src :"https://инквизиция-в.рф/pluginfile.php/860/course/overviewfiles/js.png",
            info:"I'm improving the native js . I study React js from open sources"
          
        }  
    
        ]);


    return (
        <div className={s.rowContent} >
                {
                    skills.map(skill=>{
                        return (
                            <div  key={skill.id} className={s.contentMass} >
                            <p className={s.titleP}>{skill.title}</p>
                            <img src={skill.src} alt=" Pic not load" className={s.pic}/>
                            <p className={s.titlePP}>{skill.info}</p>
                            </div>
                            )
                        
                    })
                }
        </div>
    );
};

export default MySkills;