import { useState, useRef } from "react"
import { delay, motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'

import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion"

import Toastify from 'toastify-js'
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:"",
  })
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const {name , value } = e.target;
    setForm({...form, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //template_1hwi4ad service_04o40kp ZqKJ1vFQxsYL_zp7i
    emailjs
      .send(
        "service_04o40kp",
        "template_1hwi4ad",
        {
          from_name: form.name,
          to_name: "Sankalp Salve",
          from_email: form.email,
          to_email: "sankalpbsalve@gmail.com",
          message: form.message,
        },
        "ZqKJ1vFQxsYL_zp7i",
      )
      .then(
        () => {
          setLoading(false);
          Toastify({
            text: "Thank you I'll catch you soon",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          Toastify({
            text: "Something went wrong please contact me on linkedin",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        }
      );
  };






  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left','tween',0.2,1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={`${styles.sectionSubText}`}>
          Get in touch
        </p>
        <h3 className={`${styles.sectionHeadText}`}>
          Contact.
        </h3>
        <form ref={formRef} onSubmit={(handleSubmit)} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What is your name? " className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What is your email? " className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>


          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows="7"  name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say? " className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
          </label>

          <button type="submit"  className="mx-auto bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading? 'Sending...':'Send'}
          </button>

        </form>

      </motion.div>
      <motion.div variants={slideIn('right','tween',0.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas/>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")