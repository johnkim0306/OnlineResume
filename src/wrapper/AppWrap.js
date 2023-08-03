import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import Background from '../components/Background.tsx';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}__container`}>
      <Background />
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component /> 
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;