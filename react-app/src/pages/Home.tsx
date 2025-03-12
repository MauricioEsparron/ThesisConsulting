import Header from "../components/Header";
import Navbar from "../components/NavBar";
import "../index.css";
import "../css/ContactForm.css";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}

export default Home;
