
import React from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {CardComponents} from '../componets/CardComponents'
import { Header } from '../header/Header'

import { Row, Col, Container } from 'react-bootstrap'




const { REACT_APP_APIKEY } = process.env

 export const Home = () => {
  const isLogged = localStorage.getItem('token')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/food/menuItems/search?apiKey=161741b6810e4dd199fed4332d0b084f&query=all&addMenuItemInformation=true',
        )
        console.log(response)
        setItems(response.data.menuItems)
        console.log(111, items)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      {!isLogged && <Navigate to="/login" replace />}

      <Header />
      <Container>
        <Row>
          <Col>
            <h1>Menú</h1>
          </Col>
          <Col>
            <CardComponents/>
          </Col>
        </Row>
      </Container>
      {loading ? (
        <h2>Espere por favor</h2>
      ) : (
        <CardComponents key={items.id} item={items} />
      )}
    </>
  )
}





