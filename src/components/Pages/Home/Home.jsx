import React from 'react';
import style from './Home.module.css';
import Landing from './Landing/Landing';
import MySkills from './MySkills/MySkills';

const Home = () => {
    return (
        <div className={style.homeContainer}>
                
            <Landing/>
            <MySkills/>
        </div>
    );
};

export default Home