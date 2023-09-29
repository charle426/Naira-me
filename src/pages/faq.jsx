import Hero from "../components/heroSection";
import heroVideo from "../assets/heroBg.mp4";
import { faqD } from "../components/faqData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Faq(props) {
     props.setActive("faq");
     function heroImg() {
       return <h1 className="text-white">F.A.Qs</h1>;
    }
     const mappedFaq = faqD.map((data) => {
       return (
         <div
           key={data.id}
           className="faqInactive"
           id="faqDiv"
           onClick={handleFaq}
         >
           <div className="flex items-center justify-between" id="faqQuestion">
             <h3 className="text-[20px] md:text-[30px]">{data.question}</h3>
             <p data-id={data.id}>
                <FontAwesomeIcon icon="plus" className="faqIcon"/>
             </p>
           </div>
           <div className="overflow-hidden answer duration-500">
             <p>{data.answer}</p>
           </div>
         </div>
       );
     });

     function handleFaq(e) {
       const currentFaq = e.currentTarget;
       // setActiveFaQ(currentFaq)

       document.querySelectorAll("#faqDiv").forEach((el) => {
         if (currentFaq !== el) {
           el.classList.remove("faqActive");
         } else {
           currentFaq.classList.toggle("faqActive");
         }
       });
     }

    return (
      <>
        <Hero demo={heroVideo} heroDesc={heroImg()} />
        <section className="md:py-16 px-5 py-7 lg:px-16">
          <div className="faq-container flex flex-col text-center mb-20">
            <h2>FAQs</h2>
            <p>
              All frequent asked question about <i>NairaMe</i>
            </p>
          </div>
          <div className="max-w-[850px] mx-auto map-faq">{mappedFaq}</div>
        </section>
      </>
    );
}