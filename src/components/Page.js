import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './main.css'

export default class Page extends Component{
    yearClick = (e) => {
        this.props.getPhotos(+e.target.innerText);
    }

    render (){
        const {year, photos, fetching} = this.props;
        return (
            <div>
                <h5>In {year} year you have a {photos.length} photos!</h5>
                <button onClick={ this.yearClick }>2016</button>
                <button onClick={ this.yearClick }>2017</button>
                <button onClick={ this.yearClick }>2018</button>
                <hr/>
                <div className='photo-container'>
                    {
                        fetching ? <h4>Загрузка </h4> : photos.map( (photo, index) => {
                            if(photo === 'error'){
                                return <div  key={index} className='danger'> {photo} </div>
                            }else{
                                return <button className='pic' key={index} >{photo}</button>
                            }
                        }) 
                    }
                </div>
                
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired,
    getPhotos: PropTypes.func.isRequired,
}