import React from 'react';
import classes from './Home.module.css';

const Home = () => (
  <div className={classes['home-content']}>
    <h3 className={classes['home-title']}>Welcome to the home page</h3>
    <p className={classes['home-text']}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
      modi ratione in? Nobis explicabo cupiditate doloremque pariatur maxime
      ad, facere accusantium quam fuga tempore! Sequi, autem minima
      perferendis nulla labore expedita accusamus molestias?
    </p>
    <p className={classes['homepage-text']}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
      modi ratione in? Nobis explicabo cupiditate doloremque pariatur maxime
      ad, facere accusantium quam fuga tempore! Sequi.
    </p>
  </div>
);

export default Home;
