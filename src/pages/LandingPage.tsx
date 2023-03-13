import logo from '../assets/logo.png';

const LandingPage = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col w-3/5 items-stretch h-screen justify-between bg-neutral">
        <div className="avatar ml-5">
          <div className="w-24 rounded">
            <img src={logo}/>
          </div>
        </div>
        <div className="card w-82 shadow-xl self-center">
          <figure><img src="https://placeimg.com/400/225/arch"/></figure>
          <div className="card-body text-base-100">
            <h2 className="card-title">Sign in with OKTA</h2>
            <p>Your OKTA token will be saved locally</p>
            <div className="card-actions justify-end mt-5">
              <div className="btn">Sign In</div>
            </div>
          </div>
        </div>
        <footer className="footer footer-start p-4 text-base-100">
          <div className="text-left">
            <p>Config your environment later? <a className="link link-secondary" href="#"
                                                 onClick={() => console.log(1)}>
              Skip and go to the app</a></p>
          </div>
        </footer>
      </div>
      <div className="w-full bg-red-200">
        <div className="hero min-h-screen"
             style={{ backgroundImage: 'url("https://placeimg.com/1000/800/arch")' }}>
          <div className="hero-overlay bg-opacity-60"/>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello! developer</h1>
              <p className="mb-5">This app aims to provide an omnipotent Toolkit for our developers to
                improve the
                efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
