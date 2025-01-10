import "../styles/NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <div className="form">
        <p>Subscribe to Our Newspaper</p>
        <form>
          <label>Email Address</label>
          <input type="text" />
          <label>Your Full Name</label>
          <input type="text" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
