import React from 'react'
import { Row, Col, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import "./Song.css"
import { addToPlayerWithThunk } from '../redux/actions'


const Song = ({ songData }) => {
    const dispatch = useDispatch()

    const addToLike = (e, title) => {
        console.log("like");
        e.target.classList.toggle("like-toggle")


    }
    const addToPlay = (e) => {
        console.log("play");
        //e.target.classList.toggle("like-toggle")
        e.target.classList.toggle("like-toggle")
    }

    return (
        <Row className='song-list p-2'>
            <div >
                <img className='album-cover mr-4' src={songData.album.cover_medium} alt="" />
                <span>{songData.title}</span>
            </div>
            <div>
                <span onClick={addToLike}>
                    <i className="bi bi-heart-fill mx-2 add-to-like"></i>
                </span>
                <span onClick={addToPlay, () => {
                    dispatch(addToPlayerWithThunk({ title: songData.title, image: songData.album.cover_medium }))
                }}>
                    <i className="bi bi-play-circle mx-1 add-to-play"></i>
                </span>
            </div>
            {/* <Col xs={3}>
                <Link to={`/${songData.title}`}>{songData.title}</Link>
            </Col>
            <Col xs={9} className="d-flex justify-content-between">
                <a href={songData.url} target="_blank" rel="noreferrer">
                    {songData.title}
                </a>
                <Button onClick={() => {
                    console.log(songData.title)
                    // addtoFavourite(data.company_name)
                    dispatch(songData.title)

                }}
                >Add to Favourite</Button>
            </Col> */}
        </Row>
    )
}

export default Song