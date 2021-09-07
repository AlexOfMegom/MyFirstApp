// import Button from '@restart/ui/esm/Button';
import React from 'react';
import style from './Landing.module.css';
import { Button } from 'react-bootstrap';





const Landing = () => {
    return (

        <div className={style.landingInfo}    >
               
              <h1> This is my first Api</h1>
              <p>In this Application 
            you can see my level of knowledge and skills</p>

            <p >
            There will also be a link to my repository below
            </p>

            <Button  href="https://github.com/AlexOfMegom/ArrayGame.git" size="lg" className={style.btn} variant="danger">Link to the repository</Button>


        </div>
    );
};

export default Landing;