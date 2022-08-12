import { Box, Typography } from '@mui/material'
import React,{useContext} from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import Bodypart from './Bodypart'
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  console.log(data, 'dsadasdasdasdas', bodyPart)
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box key={item.id || item} m="0 40px">
          <Bodypart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
