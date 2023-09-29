import Hero from "../components/heroSection";
import heroVideo from "../assets/heroBg.mp4";
export default function Contact(props) {
    props.setActive("contact");
    function heroImg() {
        return <h1 className="text-white uppercase">Contact-us</h1>;
    }
    return (
      <>
        <Hero demo={heroVideo} heroDesc={heroImg()} />;
        <div className="py-7 md:px-12 px-5 flex flex-col gap-2 text-center items-center">
          <h3 className="text-center mb-2">Need Help?</h3>
          <p>Phone +234 901 198 4501, +234 812 559 7871</p>
          <p>Mail: adminnairame.org</p>
          <div className="flex md:flex-row flex-col gap-5 items-start md:gap-8">
            <div className="flex flex-col pt-7 pb-5">
              <h4>Head Office</h4>
              <p>
                Aba - 39 Azikwe Road, Aba, <br /> Abia State
              </p>
              <p>+234 806 877 2315</p>
              <a href="http://admin@nairame.org" className="font-semibold">
                <p>admin@nairame.org</p>
              </a>
            </div>
            <div className="flex flex-col pt-7 pb-5">
              <h4>US Office</h4>
              <p>
                773 Selknik Drive, Newport News, <br /> Virginia 23602 USA
              </p>
              <p>+1753032881</p>
              <a href="http://admin@nairame.org" className="font-semibold">
                <p>admin@nairame.org</p>
              </a>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row  gap-7 justify-between max-w-screen-md:flex-wrap">
            <div className="flex flex-col pt-7 pb-5">
              <h5>Owerri</h5>
              <p>23 Ekwema Road by Maris Junction Ikenegbu Layout Owerri</p>
              <p className="font-semibold">
                +234 806 837 1666, +234 901 198 4501, +234 812 559 7871
              </p>
              <a href="http://admin@nairame.org" className="font-semibold">
                <p>admin@nairame.org</p>
              </a>
            </div>
            <div className="flex flex-col pt-7 pb-5">
              <h5>Umuahia</h5>
              <p>
                Sixces plaza, No 1&2 Hilltop Avenue,
                <br /> Ugwunchara, Abia State
              </p>
              <p className="font-semibold">
                +234 806 837 1666, +234 901 198 4501, +234 812 559 7871
              </p>
              <a href="http://admin@nairame.org" className="font-semibold">
                <p>admin@nairame.org</p>
              </a>
            </div>
            <div className="flex flex-col pt-7 pb-5">
              <h5>Abakaliki Office</h5>
              <p>
                Spera in Deo Plaza 176 Enugu Abakaliki Road,
                <br /> Ebonyi State, Nigeria
              </p>
              <p className="font-semibold">
                +234 806 837 1666, +234 901 198 4501, +234 812 559 7871
              </p>
              <a href="http://admin@nairame.org" className="font-semibold">
                <p>admin@nairame.org</p>
              </a>
            </div>
          </div>
        </div>
      </>
    );
}