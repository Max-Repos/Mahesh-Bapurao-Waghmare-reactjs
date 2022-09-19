import React from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { delFavorite } from '../redux/action';
import handleFav from '../redux/reducer/handleFav';
import { NavLink } from 'react-router-dom';

const Favorites = () => {
    const state = useSelector((state)=> state.handleFav)
    const dispatch = useDispatch()

    const handleClose = (item)=>{
        // console.log(item);
        dispatch(delFavorite(item))
    }
    
    const favItems = (favItem)=>{
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={favItem._id}>
            <div className="container py-4">
                <button onClick={()=>handleClose(favItem)} className="btn-close float-end" aria-label="Close"></button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={favItem.avatar} alt={favItem.name} height="200px" width="180px"/>
                    </div>
                    <div className="col-md-4">
                        <h3>{favItem.name}</h3>
                        <p className='lead fw-bold'>Rs :{favItem.price}</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }

    const emptyCart =()=>{
        return(
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>YOUR FAVORITE LIST IS EMPTY</h3>
                    </div>
                </div>
            </div>
        )
    }

    const button =()=>{
        return(
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <NavLink to="/products" className="btn btn-outline-primary mb-5 w-25">Proceed to products</NavLink>
                </div>
            </div>
        )
    }
  return (
    <>  
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(favItems)}
        {state.length !== 0 && button()}
    </>
  )
}

export default Favorites