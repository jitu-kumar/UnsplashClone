import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useGetAllImageQuery } from '../../services/get';




// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//     title: 'Bed',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//     title: 'Books',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//     title: 'Sink',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//     title: 'Kitchen',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//     title: 'Blinds',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//     title: 'Chairs',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//     title: 'Laptop',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//     title: 'Doors',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//     title: 'Storage',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//     title: 'Candle',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//   },  {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//   },  {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//   },  {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//   },
// ];


const ImageSection = ({ paramsdata }) => {
  console.log("PARAMS", paramsdata)
  const [curentData, setCurentData] = useState([])

  // useEffect(()=>{
  //   setCurentData(useGetAllImageQuery(paramsdata))
  // }, [paramsdata])

  const responseInfo = useGetAllImageQuery(paramsdata)
  //  const {data, isError, isLoading, isSuccess} = useGetAllImageQuery()
  console.log("ResponseI", responseInfo)
  return (
    <>
      <Box sx={{ width: "95%", marginLeft: "25px", marginTop: "30px", height: 450 }}>
        <ImageList variant="masonry" cols={3} gap={15}>
      {paramsdata? <>
        {!responseInfo.isLoading ? responseInfo?.currentData?.results?.map((item) => (
          <>
            <ImageListItem key={item?.urls?.small}>
              <img
                src={`${item?.urls?.small}?w=248&fit=crop&auto=format`}
                srcSet={`${item?.urls?.small}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem></>
            )) : <><h5>Loading...</h5></>}
      </> : <>
      {!responseInfo.isLoading ? responseInfo?.currentData?.map((item) => (
          <>
            <ImageListItem key={item?.urls?.small}>
              <img
                src={`${item?.urls?.small}?w=248&fit=crop&auto=format`}
                srcSet={`${item?.urls?.small}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem></>
            )) : <><h5>Loading...</h5></>}
      </>}
        
        </ImageList>
      </Box>
    </>
  )
}

export default ImageSection

