import { Form, Button, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {CardComponets} from '../componets/CardComponets'

 export const SearchItems = () => {
  const [searchData, setSearchData] = useState()
  const [searchedItems, setSearchedItems] = useState([])


  const getSearchImput = (e) => {
    const { value } = e.target
    setSearchData(value)
    console.log('data', searchData)
  }
  useEffect(() => {
    const getDataSearch = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/food/menuItems/search?apiKey=161741b6810e4dd199fed4332d0b084f&query=${searchData}`,
        )
        console.log(response)
        setSearchedItems(response.data.menuItems)
        console.log(searchedItems)
        /*  setLoading(false) */
      } catch (error) {
        console.error(error)
      }
    }
    return
  }, [])

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Row>
            <Col sm={8}>
              <Form.Control
                onChange={(e) => getSearchImput(e)}
                type="seach"
                placeholder="Search"
              />
            </Col>
            <Col sm={4}>
              <Button
                onClick={() => getDataSearch()}
                variant="primary"
                type="submit"
              >
              Enviar
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      {/*  {loading ? <h2>Cargando...</h2> : <ItemCard item={searchedItems} />} */}
    </>
  )
}