
import books from '../Data/books-data'
import { useMemo } from 'react'
import React, { useState } from 'react'
import { Card, Button, Row, Col, Modal } from 'react-bootstrap'
import { Link, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import ProductDetails from './ProductDetails'

function Books() {

    const [varient, setVarient] = useState('small')
    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedPincode, setSelectedPincode] = useState();
    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!selectedCategory && !selectedPincode) {
            return books;
        }

        else if (selectedPincode && !selectedCategory) {

            if (!selectedPincode) return books
            return books.filter(book => book.pincode == selectedPincode
            )
        }

        else if (!selectedPincode && selectedCategory) return books.filter((book) => book.category === selectedCategory);
        else {
            return books.filter((book) => (book.category === selectedCategory && book.pincode == selectedPincode));
        }
    }

    // Avoid duplicate function calls with useMemo
    var filteredList = useMemo(getFilteredList, [selectedCategory, selectedPincode, books]);

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }
    function handlePincodeChange(event) {
        setSelectedPincode(event.target.value);
    }

    return (
        <>
            <div>
                <Row>
                    <div className="app">
                        <div>
                            <div>Fliter by pincode</div>
                            <div>
                                <label>
                                    <input type="text" value={selectedPincode} onChange={handlePincodeChange} />
                                    Enter Pincode
                                </label>
                            </div>
                        </div>
                        <div className="filter-container">
                            <div>Filter by Category:</div>
                            <div>
                                <select
                                    name="category-list"
                                    id="category-list"
                                    onChange={handleCategoryChange}
                                >
                                    <option value="">All</option>
                                    <option value="maths">maths</option>
                                    <option value="physics">physics</option>
                                    <option value="chemistry">chemistry</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {filteredList.map((book) => (
                        <div>
                            <Card style={{ width: '18rem', marginTop: '30px' }}>
                                <Card.Img variant="top" src={book.image} style={{ height: '130px', cursor: 'pointer' }}
                                    onClick={handleShow} />
                                <Card.Body>
                                    <Card.Title>{book.name}</Card.Title>
                                    <Card.Text>
                                        <Row>
                                            <Col md={6}>
                                                <h6>
                                                    Varients
                                                </h6>
                                                <select value={varient} onChange={e => setVarient(e.target.value)}>
                                                    {book.varients.map(varient => (
                                                        <option  >
                                                            {varient}
                                                        </option>
                                                    ))}
                                                </select>
                                            </Col>
                                            <Col md={6}>
                                                <h6>
                                                    Quantity
                                                </h6>
                                                <select value={quantity} onChange={e => setQuantity(e.target.value)}>
                                                    {[...Array(10).keys()].map((v, i) => (
                                                        <option value={i + 1} >
                                                            {i + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                    <Row>
                                        <Col md={6}>
                                            Price : {book.prices[0][varient] * quantity} /.Rs
                                        </Col>
                                        <Col>
                                            {book.category}
                                        </Col>
                                        <Col md={6}>
                                            {/* <Button className="bg-success text-white" 
                            onClick={addToCartHandler} >
                                Add to Cart

                            </Button> */}
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

                            <Link to={`/product/${book.id}`}>More Details</Link>
                            <div>

                                <Routes>
                                    <Route
                                        path="/product/:id"
                                        render={({ match }) => (
                                            <ProductDetails
                                                book={books.find(
                                                    (book) => String(book.id) === match.params.id
                                                )}
                                            />
                                        )}
                                    />
                                </Routes>
                            </div>
                        </div>

                    ))}
                </Row>

            </div>
        </>
    )
}

export default Books