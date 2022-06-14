import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSongsAction } from '../redux/actions'
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap'
import Song from './Song'

const MainSearch = () => {
    const songs = useSelector((state) => state.songSearchReducer.songs)
    console.log(songs);
    const [query, setQuery] = useState("eminem")



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
            <Row>
                <Col xs={10} className="mx-auto my-3">
                    <h1>Remote Jobs Search</h1>
                </Col>

                <Col xs={10} className="mx-auto">
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
                <Col xs={10} className="mx-auto mb-5">
                    {/* {loading && <Spinner variant="success" animation="border" />} */}
                    {songs && songs.map((songData, i) => (
                        <Song key={i} songData={songData} />
                    ))}
                    {/* {jobs.map((jobData) => (
                        <Job key={jobData._id} data={jobData} />
                    ))} */}
                </Col>
            </Row>
        </Container>
    )
}

export default MainSearch