import Hero from "../components/heroSection";
import heroVideo from "../assets/heroBg.mp4";
import React from "react";
export default function Partnership(props) {
    props.setActive("partnership");
    function heroImg() {
      return <h1 className="text-white uppercase">Partnership</h1>;
    }

      const [job, setJob] = React.useState({
        firstName: "",
        lastName: "",
        tel: "",
        interestedField: "",
        consent: false,
        contactMe: false,
      });
    
    function handleChange() {
        const {name, value, type, checked} = event.target
        setJob(prev => ({
            ...prev,
            [name] : type === "checkbox" ? checked : value,
        }))
    }
      function handleSubmit(e) {
        if (job.firstName === "" && job.lastName === "" && job.interestedField === "" && job.consent === false && job.contactMe === false)
          {
              document.querySelector(".fillForm").style.opacity = "1"
              return  
          }
            e.preventDefault()
            alert(
                `${job.firstName} ${job.lastName} a member of our team will contact you shortly`
            )
          
    }
    return (
      <>
        <Hero demo={heroVideo} heroDesc={heroImg()} />
        <section className="partnership flex items-center justify-center">
          <div className="w-full lg:max-w-[80%]">
            <div className="bg-white rounded-md px-3 md:px-10 py-5">
              <h4>Partnership Inquiry</h4>
              <p>
                please fill your details and a member of our team will contact
                you shortly
              </p>
              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col items-start gap-3">
                    <label>Name</label>
                    <div className="w-full flex items-center gap-3 md:flex-row flex-col">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={job.firstName}
                        className="w-full rounded-md px-4 py-2 border-none hover:border bg-[#e8e7e7] text-black"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleChange}
                        value={job.lastName}
                        className="w-full rounded-md px-4 py-2 border-none hover:border bg-[#e8e7e7] text-black"
                      />
                    </div>
                    <div className="w-full">
                      <label className="font-bold block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        value={job.tel}
                        className="w-full rounded-md px-4 py-2 border-none hover:border bg-[#e8e7e7] text-black"
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex gap-2 items-center mb-2">
                        <p className="font-bold block">Interested Field</p>
                        <span className="font-thin text-sm text-red-500">
                          <i>(required)</i>
                        </span>
                      </div>
                      <select
                        name="interestedField"
                        value={job.interestedField}
                        onChange={handleChange}
                        className="w-full rounded-md px-4 py-2 border-none hover:border bg-[#e8e7e7] text-black"
                      >
                        <option value="">Partner with us</option>
                        <option value="Vendor">Become a Vendor</option>
                        <option value="Dasher">Become a Dasher</option>
                        <option value="Driver">Become a Drivers</option>
                        <option value="Flezzer">Become a Flezzer</option>
                      </select>
                    </div>
                    <div>
                      <div className="flex gap-2 items-center mb-2">
                        <p className="font-bold block">Consent</p>
                        <span className="font-thin text-sm text-red-500">
                          <i>(required)</i>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={job.consent}
                          id="consent"
                          className=" text-[#e8e7e7]"
                          onChange={handleChange}
                        />
                        <label htmlFor="consent">
                          I agree to privacy policy
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="contactMe"
                          checked={job.contactMe}
                          id="contactMe"
                          className=" text-[#e8e7e7]"
                          onChange={handleChange}
                        />
                        <label htmlFor="contactMe">
                          I consent to be contacted by a staff of NairaMe with
                          regard to my inquiry
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 block">
                    <span className="font-thin text-sm text-red-500 fillForm opacity-0">
                      <i>fill the form</i>
                    </span>
                    <button className="mt-1 block"> Submit </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}