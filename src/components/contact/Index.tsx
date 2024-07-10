import React, { useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimentions";
import {
  MapPin,
  Phone,
  Mail,
  NotebookTabs,
  CheckCircle,
  XCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import MapComponent from "./components/MapComponent";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Index: React.FC = () => {
  const position: [number, number] = [25.73189749143951, -80.25745936138712];
  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
    lastName: "",
  });
  const [showResponse, setShowResponse] = useState({
    response: "",
    text: "",
    show: false,
  });
  const { windowWidth } = useWindowDimensions();

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formElement = event.currentTarget;
    const localErrors = {
      firstName: "",
      email: "",
      phone: "",
      message: "",
      lastName: "",
    };

    const firstName = formData.get("firstName")?.toString().trim() || "";
    const lastName = formData.get("lastName")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    let formIsValid = true;
    if (!firstName) {
      localErrors.firstName = "Please enter your first name.";
      formIsValid = false;
    }
    if (!lastName) {
      localErrors.lastName = "Please enter your last name.";
      formIsValid = false;
    }
    if (!email) {
      localErrors.email = "Please enter your email";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      localErrors.email = "Your email is invalid.";
      formIsValid = false;
    }
    if (!phone) {
      localErrors.phone = "Please enter your number phone.";
      formIsValid = false;
    }
    if (!message) {
      localErrors.message = "Please enter your message.";
      formIsValid = false;
    }

    setErrors(localErrors);

    if (formIsValid) {
      setErrors({
        firstName: "",
        email: "",
        phone: "",
        message: "",
        lastName: "",
      });

      const form = document.createElement("form");
      const emailMessage = `
        Name: ${firstName}
        LastName: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        `;

      form.innerHTML = `
        <input type="hidden" name="from_name" value="${firstName}">
        <input type="hidden" name="from_email" value="${email}">
        <input type="hidden" name="message_html" value="${emailMessage}">
        `;

      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setShowResponse({
              response: "success",
              text: "Email Sent Successfully",
              show: true,
            });
            formElement.reset();
            setTimeout(() => {
              setShowResponse({ response: "", text: "", show: false });
            }, 15000);
          },
          (error) => {
            console.log(error.text);
            setShowResponse({
              response: "error",
              text: "We had a problem sending your message.",
              show: false,
            });
          }
        );
    }
  };
  return (
    <>
      <section className="w-full h-max bg-[#0F0F1C] py-12" id="contact">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center text-neutral mb-20"
        >
          Find Us
        </motion.h2>
        <div className="mx-auto h-full w-full flex items-center">
          <div className="h-[70%] w-full mx-auto flex items-center xs:flex-col sm:flex-col md:flex-row ">
            <div className="grid grid-cols-2 xs:w-full sm:w-full md:w-1/2 p-4 place-items-center xs:place-content-start sm:place-content-start xs:gap-5 sm:gap-5 md:gap-6">
              <div className="flex flex-col items-center justify-start font-lato">
                <div className="border border-neutral xs:p-4 sm:p-4 lg:p-8 rounded-full">
                  <NotebookTabs
                    size={windowWidth > 768 ? 42 : 28}
                    className="text-neutral"
                  />
                </div>
                <p className="font-semibold text-neutral">Contact Us</p>
                <p className="text-center text-balance text-neutral/80">
                  If you're facing legal challenges, don't hesitate to reach out
                  to us for expert guidance and support.
                </p>
              </div>

              <div className="flex flex-col items-center justify-start font-lato">
                <div className="border border-neutral xs:p-4 sm:p-4 lg:p-8 rounded-full">
                  <MapPin
                    size={windowWidth > 768 ? 42 : 28}
                    className="text-neutral"
                  />
                </div>
                <p className="font-semibold text-neutral">Address</p>
                <p className="text-center text-balance text-neutral/80">
                  135 San Lorenzo Ave Penthouse 830
                </p>
                <p className="text-center text-balance text-neutral/80">
                  Coral Gables, FL 33146, USA.
                </p>
              </div>

              <div className="flex flex-col items-center justify-start font-lato">
                <div className="border border-neutral xs:p-4 sm:p-4 lg:p-8 rounded-full">
                  <Phone
                    size={windowWidth > 768 ? 42 : 28}
                    className="text-neutral"
                  />
                </div>
                <p className="font-semibold text-neutral">Call Us</p>
                <p className="text-center text-balance text-neutral/80">
                  +1 305-860-2562
                </p>
              </div>

              <div className="flex flex-col items-center justify-start font-lato">
                <div className="border border-neutral xs:p-4 sm:p-4 lg:p-8 rounded-full">
                  <Mail
                    size={windowWidth > 768 ? 42 : 28}
                    className="text-neutral"
                  />
                </div>
                <p className="font-semibold text-neutral">Email</p>
                <a href="mailto:dm@davidmacey.com">
                  <p className="text-center underline text-balance text-neutral/80">
                    dm@davidmacey.com
                  </p>
                </a>
              </div>
            </div>

            <div className="xs:w-full sm:w-full md:w-1/2 h-full relative">
              <MapComponent position={position} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-container">
        <div className="flex flex-col items-center xs:mt-10 sm:mt-10 xs:px-10 sm:px-10 lg:px-0 lg:my-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center text-[rgb(24,25,26)] "
          >
            Fill the form below
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-text text-center text-[rgb(57,58,59)] mb-8"
          >
            And we'll respond promptly
          </motion.h3>
          <form
            action="POST"
            onSubmit={sendMessage}
            className="flex flex-col items-center gap-6 w-full"
          >
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-6 w-full">
              <div className="relative z-0 mb-4 col-span-3">
                <input
                  type="text"
                  name="firstName"
                  className="peer form-input"
                  placeholder=" "
                  aria-label="First Name"
                />
                <label className="form-label">First name</label>
                {errors.firstName && (
                  <span className="text-red-500 text-md">
                    {errors.firstName}
                  </span>
                )}
              </div>

              <div className="relative z-0 mb-4 col-span-3">
                <input
                  type="text"
                  name="lastName"
                  className="peer form-input"
                  placeholder=" "
                  aria-label="Last Name"
                />
                <label className="form-label">Last name</label>
                {errors.lastName && (
                  <span className="text-red-500 text-md">
                    {errors.lastName}
                  </span>
                )}
              </div>

              <div className="relative z-0 mb-4 col-span-3">
                <input
                  type="email"
                  name="email"
                  className="peer form-input"
                  placeholder=" "
                  aria-label="Email"
                />
                <label className="form-label">Email</label>
                {errors.email && (
                  <span className="text-red-500 text-md">{errors.email}</span>
                )}
              </div>

              <div className="relative z-0 mb-4 col-span-3">
                <input
                  type="text"
                  name="phone"
                  className="peer form-input"
                  placeholder=" "
                  aria-label="Phone"
                />
                <label className="form-label">Phone</label>
                {errors.phone && (
                  <span className="text-red-500 text-md">{errors.phone}</span>
                )}
              </div>

              <div className="relative z-0 mb-4 col-span-full">
                <textarea
                  name="message"
                  className="peer resize-none h-32 form-input"
                  placeholder=" "
                  aria-label="Your Message"
                ></textarea>
                <label className="form-label">Your message</label>
                {errors.message && (
                  <span className="text-red-500 text-md">{errors.message}</span>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col items-end justify-start">
              {showResponse.show ? (
                <div className="flex items-center gap-2">
                  {showResponse.response === "success" ? (
                    <CheckCircle className="text-green-600" size={24} />
                  ) : (
                    <XCircleIcon className="text-green-600" size={24} />
                  )}
                  {showResponse.text}
                </div>
              ) : (
                ""
              )}
              <button
                type="submit"
                className="text-neutral text-lg font-lato font-semibold bg-[#1C3C7B] px-4 py-2 xs:w-full sm:w-full lg:w-auto lg:self-end"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Index;
