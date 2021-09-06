import Carousel from 'react-bootstrap/Carousel'

const ApartmentsProfile = () => {
  return (
    <>
    <div className="border">
      <div className="container infoAp-location-price border">
        <div className="row d-flex">
          <div className="row title-plus-location d-block">
            <div className="col-sm">
              Moradia T4 de Luxo
            </div>
            <div className="col-sm">
            Tavira (Santa Maria e Santiago), Tavira, Faro
            </div>
          </div>
          <div className="row d-block top-pricing">
            <div className="col-sm total-price">
              445 000 €
            </div>
            <div className="col-sm price-m2">
              1 738 €/m²
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row d-flex">
          <div className="col-9 carousel-box border">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://lh3.googleusercontent.com/proxy/BRYSgLFjzj9aXOpFWin9d7YdjRMIwJuOYDJgJloM2UZtEmL7h7HW-zVUFnwj6Jh00iZYO-Cj2R1SMAEGQoJaOuoQAQ27XXnSonQjWe6fcq0HnXjn3A930eInw7wbrlyaryflh3wyfA"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://medias.residences-immobilier.com/pict/f600x400/2/5/7/6/ext_0_2576638.jpg?t=9685981"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.proprietesparisiennes-sothebysrealty.com/datas/biens/thumbs/995/995_00-2020-10-21-1630.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-3 contact-box border">
            One of three columns
          </div>
        </div>
      </div>
        
      </div>












    </div>




    </>
  )
}

export default ApartmentsProfile;