import React, { useState } from "react";
import "../External CSS/CallBackForm.css";
import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";
const CallBackForm = () => {

  const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
      const [desc,setDesc]=useState("");



  function submitCallBackForm(e) {
    e.preventDefault();
    console.log("This is submit form");
    // alert("This is submit form..");
    Swal.fire({
      title: "Information Received",
      text: "Our team will contact you shortly..",
      icon: "success",
    });

setName("");
setDesc("")
setPhone("")



  }

  return (
    <section className="callback-section">
      <div className="callback-container">
        <h2>Request A Call Back</h2>
        <p>
          We would be delighted to discuss our solutions, services and
          capabilities in more detail with you.
        </p>

        <form className="callback-form" onSubmit={(event)=>submitCallBackForm(event)}>
          <input type="text" placeholder="Your Name" required value={name} onChange={(e)=>setName(e.target.value)} />

          <select required value={desc} onChange={(e)=>setDesc(e.target.value)}>
            <option value="" disabled selected>
              I Would Like To Discuss
            </option>
            <option value="services">Services</option>
            <option value="pricing">Pricing</option>
            <option value="support">Support</option>
          </select>

          <input type="tel" placeholder="Phone Number" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>

          <button type="submit">
            SUBMIT <FaArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallBackForm;
