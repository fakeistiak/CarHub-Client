
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/VBCHkJ2/jannis-lucas-9kixbx1zd-Mw-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <i>
            <h1 className="mb-5 text-5xl font-bold text-white">
              Best Place to Choose Your Car
            </h1>
          </i>
          <i>
            <p className="mb-5 text-white">
              Elevating Your Drive. Exceptional cars, service, and experience –
              where passion for vehicles meets uncompromising excellence.
            </p>
          </i>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;