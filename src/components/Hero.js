import React from 'react';

function Hero() {
  return (
    <section id="home" className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg/bg-1.jpg')" }}>
      <div className="container-fluid px-0 top-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <h1 className="text-4xl font-bold text-red text-center pt-0 pb-20">
                Discover Quality Products at Unbeatable Prices 
              </h1>
              <p className="text-lg text-black mt-4">
                "Welcome to shop me, your one-stop shop for quality products at unbeatable prices! We offer a wide variety of carefully selected items, from the latest fashion trends to innovative tech gadgets, all designed to make your life easier and more enjoyable. With fast shipping, secure payments, and a customer-first approach, we strive to provide an exceptional shopping experience every time. Browse through our collections today and find exactly what you need, all with just a few clicks!"
              </p>
              <div className="mt-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center">
                  Order now <i className="fas fa-shopping-basket ps-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
