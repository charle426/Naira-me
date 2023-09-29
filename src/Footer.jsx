import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function Footer() {   
    const [waitIcon, setWaitIcon] = React.useState(false)
    const [msg, setMsg] = React.useState("Send")
    const [footerForm, setFooterForm] = React.useState({
       clientName:"", clientEmail: "", clientPhone: "", clientMessage: "",
   })

    function handleChange(e) {
        const { name, value, } = e.target 
        setFooterForm(prev => ({
            ...prev,
            [name]: value
        }))
  }
  
  function BtnMessage() {
    return (
      <button
        id="submitBtn"
        className={waitIcon ? "pointer-events-none flex items-center gap-1" : "pointer-events-auto"}
      >
        {msg}
        {waitIcon && (
          <FontAwesomeIcon
            icon="fa fa-circle"
            className="text-[] animate-pulse"
          />
        )}
      </button>
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (footerForm.clientName.trim() == "")
    {
        return
      }
        setMsg(`${footerForm.clientName} Please Wait` )
        setWaitIcon(true)
        setTimeout(() => {
            setMsg(`${footerForm.clientName} your mail has been delivered`)
            }, 10000);
        setTimeout(() => {
          setMsg("send")
          setWaitIcon(false);
            }, 14000);
        setFooterForm(() => ({
          clientName: "",
          clientEmail: "",
          clientPhone: "",
          clientMessage: "",
        }));
    }
    return (
      <footer className="flex-col gap-8 md:py-16 lg:px-40 md:px-20 px-5 py-9 flex">
        <div className="md:flex-row flex justify-center lg:gap-20 flex-col">
          <div className="col-1 w-full">
            <div className="mb-10">
              <h4>US Office</h4>
              <div className="w-[40px] h-[3px] bg-[#00A85A]"></div>
            </div>
            <div>
              <div className="flex flex-col gap-2 pt-7 pb-5 border-b-2  border-b-[#ffffff4e]">
                <h5>Address</h5>
                <p>773 Selknik Drive, Newport News, Virginia 23602 USA</p>
              </div>
              <div className="flex flex-col gap-2 pt-7 pb-5 border-b-2  border-b-[#ffffff4e]">
                <h5>Phone</h5>
                <p>+1753032881</p>
              </div>
              <div className="flex flex-col gap-2 pt-7 pb-5 border-b-2  border-b-[#ffffff4e]">
                <h5>Email</h5>
                <a href="http://admin@nairame.org" className="font-semibold">
                  <p>admin@nairame.org</p>
                </a>
              </div>
              <div className="flex flex-col pt-7 pb-5">
                <h5>Head office</h5>
                <p>Aba - 39 Azikwe Road, Aba, Abia State</p>
                <p>+234 806 877 2315</p>
                <a href="http://admin@nairame.org" className="font-semibold">
                  <p>admin@nairame.org</p>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full col-2">
            <div className="mb-16">
              <h4>Contact Us</h4>
              <div className="w-[40px] h-[3px] bg-[#00A85A]"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <h4 className="text-[12px] mb-2 uppercase">name*</h4>
                <input
                  type="text"
                  name="clientName"
                  value={footerForm.clientName}
                  className="px-3 py-2 w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <h4 className="text-[12px] mb-2 uppercase">email*</h4>
                <input
                  type="email"
                  name="clientEmail"
                  value={footerForm.clientEmail}
                  className="px-3 py-2 w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <h4 className="text-[12px] mb-2 uppercase">phone*</h4>
                <input
                  type="tel"
                  name="clientPhone"
                  value={footerForm.clientPhone}
                  className="px-3 py-2 w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <h4 className="text-[12px] mb-2 uppercase">your message*</h4>
                <textarea
                  className=" min-h-[200px] max-h-[200px] overflow-auto w-full px-3 py-2 "
                  name="clientMessage"
                  value={footerForm.clientMessage}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>{BtnMessage()}</div>
            </form>
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
            <p>Sixces plaza, No 1&2 Hilltop Avenue,
               <br/> Ugwunchara, Abia State
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
            <p>Spera in Deo Plaza 176 Enugu Abakaliki Road, Ebonyi State, Nigeria</p>
            <p className="font-semibold">
              +234 806 837 1666, +234 901 198 4501, +234 812 559 7871
            </p>
            <a href="http://admin@nairame.org" className="font-semibold">
              <p>admin@nairame.org</p>
            </a>
          </div>
        </div>
      </footer>
    );
}