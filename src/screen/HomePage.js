import React from 'react';


const HomePage = () => {
    return (
      <div>
       <h1 className='h1'>Cat store </h1> 
     
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner mh-75">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height='70%' className="d-block w-100 mh-75 cat" alt="cat"/>
    </div>
    <div className="carousel-item">
      <img src= "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  height='70%' className="d-block w-100 mh-75 cat" alt="cat"/>
    </div>
    <div className="carousel-item">
      <img src='https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg'   className="d-block w-100 mh-75 cat" alt="cat"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    );
}

export default HomePage;