import React, { useState } from 'react'
import { Row, ListGroup, Col } from 'react-bootstrap'
import "./Player.css"
import { useSelector, useDispatch } from 'react-redux'

const Player = () => {
    const content = useSelector((state) => state.playerReducer.content)
    const [playItem, setPlayItem] = useState(null)
    const changeSongs = (song) => setPlayItem(content)
    console.log(content);
    return (
        <Row xs={10} className='player mx-auto'>
            <Col xs={5}> {playItem}</Col>
            <Col xs={5}> </Col>


        </Row>
    )
}

export default Player