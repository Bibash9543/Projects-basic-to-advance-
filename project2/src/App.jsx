import ContactForm from "./components/ContactForm";
import Contacttext from "./components/Contacttext";
import Navi from "./components/Navi";
import "./App.css";

const App = () => {
  return (
    <>
      <Navi />
      <main className="container_shift">
        <Contacttext />
        <ContactForm />
      </main>
    </>
  );
};
export default App;
