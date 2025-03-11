import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import "../index.css";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <Navbar />
      <Header />
      <ContactForm />
    </>
  );
}

export default Home;
