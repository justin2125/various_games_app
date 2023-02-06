import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Come Again !</h1>
          <p>Pick your destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands  fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands  fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Community</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">Hey buddy</a>
          <a href="/">Versions</a>
        </div>
        <div>
          <h4>Project</h4>
          <a href="/">Github</a>
          <a href="/">Trello</a>
          <a href="/">Linkedin</a>
          <a href="/">Projects</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms and Services</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Privacy policy</a>
          <a href="/">Licenses</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
