import React from 'react';

import { Select, Title, Card, Fullscreen } from './components';

import getThemeOptions from './utils/getThemePropertyOptions'; 
import { inputHandler } from './utils/effects';

const colorOptions = getThemeOptions('colors');
const effectOptions = getThemeOptions('effects');
const textStyleOptions = getThemeOptions('fonts', true);
const sizeOptions = getThemeOptions('spacing', true);

export default function App(props) {
  
  const bgHandler = inputHandler(colorOptions[0].value);
  const effectHandler = inputHandler(effectOptions[0].value);
  const textStyleHandler = inputHandler(textStyleOptions[0].value);
  const sizeHandler = inputHandler(sizeOptions[0].value);

  return (
    <Fullscreen color={bgHandler.value}>
      <Title color="white" fontStyle={textStyleHandler.value}>Background color</Title>
      <Select options={colorOptions} {...bgHandler} mb={3}/>

      <Title color="white" fontStyle={textStyleHandler.value}>Dropshadow</Title>
      <Select options={effectOptions} {...effectHandler} />
      <Card shadow={effectHandler.value} size="x-large" my={4} />

      <Title color="white" fontStyle={textStyleHandler.value}>Text Style</Title>
      <Select options={textStyleOptions} {...textStyleHandler} />

      <Title color="white" fontStyle={textStyleHandler.value}>Size</Title>
      <Select options={sizeOptions} {...sizeHandler} />
      <Card size={sizeHandler.value} my={3} />

      <a style={{color: '#fff', position: 'absolute', left: '20px', bottom: '20px'}} href="https://github.com/PabloAlexandre/react-figma-demo" target="blank">Github Repository</a>
    </Fullscreen>
  );
}