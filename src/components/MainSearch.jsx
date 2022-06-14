import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSongsAction } from '../redux/actions'
import { Container, Row, Col, Form } from 'react-bootstrap'
//import Song from './Song'
import SongList from './SongList'
import Player from './Player.'

const MainSearch = () => {
    //const songs = useSelector((state) => state.songSearchReducer.songs)
    //console.log(songs);
    const [query, setQuery] = useState("")



    // const loading = useSelector((state) => state.loading)

    const dispatch = useDispatch()

    let handleChange = (e) => {
        setQuery(e.target.value)
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(getSongsAction(query))
    }

    return (
        <Container>
            <Row xs={10} className='d-flex justify-content-center my-3'>
                <h1>Song Search</h1>
            </Row>
            <Row>
                <Col xs={3} className="mx-auto">
                    <Row xs={10}>
                        <Form style={{ flexGrow: '1', display: "flex" }} onSubmit={handleSubmit}>
                            <Form.Control
                                type="search"
                                value={query}
                                onChange={handleChange}
                                placeholder="type and press Enter"
                            />
                            {/* <ListIndicator xs={3} /> */}
                        </Form>

                    </Row>
                </Col>
                <Col xs={7} className="mx-auto mb-5">
                    {/* {loading && <Spinner variant="success" animation="border" />} */}
                    {/* {songs && songs.map((songData, i) => (
                        <Song key={i} songData={songData} />
                    ))} */}
                    <SongList />
                </Col>

            </Row>
            <Row>
                <Player />
            </Row>
        </Container>
    )
}

export default MainSearch