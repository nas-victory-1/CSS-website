import Footer from "../components/Footer";
import Member from "../components/Member";
import "../styles/Members.css";

const Members = () => {
  return (
    <div className="members">
      <div className="top">
        <div className="overlay">
          <h1>Meet the Executives</h1>
        </div>
      </div>
      <div className="executives">
        <h1>Leadership</h1>
        <div className="row">
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
        {/* <div className="row">
          <Member />
          <Member />
          <Member />
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Members;
