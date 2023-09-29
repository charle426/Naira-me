import Hero from "../components/heroSection";
import heroVideo from "../assets/heroBg.mp4";
import img from "../assets/niarame-africa-logo.png";
import React from "react"
export default function Career(props){
      props.setActive("careers");
       function heroImg() {
       return <h1 className="text-white">CAREER</h1>;
    }

    const [job, setJob] = React.useState({
        selectCareer: "", firstName: "", lastName: "", email: "", resume: "", coverLetter: ""
    })
  // console.log(job)
    
    function handleChange() {
        const {name, value} = event.target
        setJob(prev => ({
            ...prev,
            [name] : value,
        }))
    }

    const [validSize1, setValidSize1] = React.useState(false)
    const [validSize2, setValidSize2] = React.useState(false)

    function checkSize1() {
      const fileSize = event.target.files[0]
      const fileReg = /(.*?)\.(jpg|JPG|gif|GIF|doc|DOC|png|PNG|pdf|PDF|jpeg|JPEG|svg|SVG)$/
      console.log(fileReg.test(fileSize.name));

        if (fileReg.test(fileSize.name))
        {
          setValidSize1(false);
          console.log("correct file")
        } else
        {
          setValidSize1(true)
          console.log("not correct file")
          fileSize.name = ""
      }
    
    }
    function checkSize2() {
      const fileSize = event.target.files[0]
      const fileReg = /(.*?)\.(jpg|JPG|gif|GIF|doc|DOC|png|PNG|pdf|PDF|jpeg|JPEG|svg|SVG)$/
      console.log(fileReg.test(fileSize.name));

        if (fileReg.test(fileSize.name))
        {
          setValidSize2(false);
          console.log("correct file")
        } else
        {
          setValidSize2(true)
          console.log("not correct file")
          fileSize.name = ""
      }
    
    }

  function handleSubmit(e) {
    e.preventDefault()
    if (validSize1 || validSize2)
    {
      return
    }
    alert(`${job.firstName} ${job.lastName} your application has been successful sent we would get back to you soon`)
    job.coverLetter = ""
    job.email = ""
    job.firstName = ""
    job.lastName = ""
    job.selectCareer = ""
    }

    function handleFiles1() {
      handleChange()
        checkSize1()
    }
    function handleFiles2() {
      handleChange()
        checkSize2()
    }
    
    return (
      <>
        <Hero demo={heroVideo} heroDesc={heroImg()} />;
        <section className="md:px-14 px-5 py-16">
          <div className="flex md:flex-row flex-col items-center gap-8">
            <div>
              <img src={img} alt="" className="w-full" />
            </div>
            <div className="w-full flex flex-col items-start gap-3">
              <h4 className="mb-2">Find Vacanies</h4>
              <form
                className="w-full flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <h5 className="mb-2">Available Positions</h5>
                  <select
                    name="selectCareer"
                    value={job.selectCareer}
                    onChange={handleChange}
                    className="w-full rounded-md px-4 py-2 border-none hover:border bg-[#e8e7e7] text-black"
                  >
                    <option value="">Job Vacancies</option>
                    <option value="Executive Assistance">
                      Executive Assistance
                    </option>
                    <option value="Operations Manager">
                      Operations Manager
                    </option>
                    <option value="Sales Executives">Sales Executives</option>
                    <option value="Drivers">Drivers</option>
                    <option value="Dashers">Dashers</option>
                    <option value="Digital Marketers">Digital Marketers</option>
                  </select>
                </div>
                <div
                  className="
                    w-full"
                >
                  <h5 className="mb-2">Name</h5>
                  <div className="w-full flex md:flex-row gap-5 flex-col">
                    <div>
                      <input
                        required
                        type="text"
                        placeholder="First Name"
                        className="w-full rounded-md px-4 py-2 border-none hover:border bg-[#e8e7e7] text-black"
                        onChange={handleChange}
                        name="firstName"
                        value={job.firstName}
                      />
                    </div>
                    <div>
                      <input
                        required
                        type="text"
                        placeholder="Last Name"
                        className="w-full rounded-md px-4 py-2 border-none hover:border bg-[#e8e7e7] text-black"
                        onChange={handleChange}
                        name="lastName"
                        value={job.lastName}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="mb-2">Email</h5>
                  <div className="w-full">
                    <div>
                      <input
                        required
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-md px-4 py-2 border-none hover:border bg-[#e8e7e7] text-black"
                        onChange={handleChange}
                        name="email"
                        value={job.email}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="mb-2"></h5>
                  <div className="w-full flex md:flex-row gap-5 flex-col">
                    <div>
                      <h4>Upload your Resume</h4>
                      <input
                        required
                        type="file"
                        placeholder="Upload your Resume"
                        className="w-full file rounded-md px-4 py-2 border-none hover:border bg-[#e8e7e7] text-black"
                        onChange={handleFiles1}
                        name="resume"
                        value={job.resume}
                      />
                      {validSize1 && (
                        <p className="mt-1 text-red-500">file is too larger</p>
                      )}
                    </div>
                    <div>
                      <h4>Upload your Cover</h4>
                      <input
                        required
                        type="file"
                        placeholder="Upload your Cover"
                        className="w-full file rounded-md px-4 py-2 border-none hover:border bg-[#e8e7e7] text-black"
                        onChange={handleFiles2}
                        name="coverLetter"
                        value={job.coverLetter}
                      />
                      {validSize2 && (
                        <p className="mt-1 text-red-500">file is too larger</p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <h5>
                    <button> SUBMIT</button>
                  </h5>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
}