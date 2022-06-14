import React from 'react'
import { Row, Col, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Song = ({ songData }) => {
    const dispatch = useDispatch()
    return (
        <Row
            className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
        >
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
            <ListGroup.Item>{songData.title}</ListGroup.Item>
        </Row>
    )
}

export default Song