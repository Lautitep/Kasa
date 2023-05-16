import Banner from '../components/Banner'
import Cards from '../components/Cards';
import backgroundHome from '../assets/home.jpg'

function Home() {
  return (
    <>
      <Banner backgroundImage={backgroundHome} title/>
      <Cards />
    </>
  );
}

export default Home;
