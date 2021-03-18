import React, { useEffect, useState } from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
// import { getGifs } from '../helpers/getGifts'
import { GifGridItem } from './GifGridItem'

export const GiftGrid = ({category}) => {
    

    const {data: images, loading} = useFetchGifts(category)

    return (
        <>
        <h3 className="card animate__animated animate__bounce">{ category }</h3>
        {loading && <p className="card animate__animated animate__flash">Cargando...</p>  }
        <div className="card-grid">
            {images.map(img =>  (
                <GifGridItem 
                    key={img.id}
                    {...img}
                />
            ))}
        </div>
        </>
    )
}
