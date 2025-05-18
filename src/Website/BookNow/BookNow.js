

import React, { useEffect, useRef, useState, useContext } from "react";
import Header from "../../Components/Header/Header";
import "./BookNow.css";
import { Icon } from "@iconify/react";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import Notification from "../../Components/Notification/Notification";
import LoadingContext, { LoadingCon } from "../../Context/LoadingContext/LoadingContext";

const BookNow = () => {
  const scrollRef = useRef(null);
  const LoadContext = useContext(LoadingCon);
  const setLoading = LoadContext.setLoading;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_number: "",
    project_type: "",
    message: "",
  });
console.log(form);
  useEffect(() => {
    scrollRef.current.scrollIntoView();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone_number", form.phone_number);
    formData.append("message", form.message);
    if (form.project_type !== "") {
      formData.append("project_type", form.project_type);
    }

    try {
      await axios
        .post("https://sunmedagency.com/api/book-now", formData)
        .then((data) => {
          setLoading(false);
          console.log(data);
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-[#fafafa]">
      <Notification />
      <div ref={scrollRef}></div>
      <Header />
      <div className="BookNow px-[7vw] py-7">
        <div className="flex">
          <div className="flex-1">
            <div className="text">
              <h3>Start new project with us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. At ut in at libero integer
                risus. Magna at amet enim habitant sem volutpat aliquam duis nisi.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-8 mt-4 items-center md:flex-row flex-col">
                <div className="input-field">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <Icon icon="basil:user-outline" width="24" height="24" className="icon" />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    placeholder="Email address*"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                  <Icon icon="ic:outline-email" width="24" height="24" className="icon" />
                </div>
              </div>
              <div className="flex gap-8 mt-4 items-center md:flex-row flex-col">
                <div className="input-field">
                  <select
                  required
                    value={form.project_type}
                    onChange={(e) => setForm({ ...form, project_type: e.target.value })}
                  >
                    <option value="">Project Type</option>
                    <option value="Media Production">Media Production</option>
                    <option value="Web Solution">Web Solution</option>
                    <option value="Education Services">Education Services</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Event Management">Event Management</option>
                  </select>
                </div>
                <div className="input-field">
                  <input
                    type="number"
                    placeholder="Phone number"
                    value={form.phone_number}
                    onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
                    required
                  />
                  <Icon icon="mingcute:phone-fill" width="24" height="24" className="icon" />
                </div>
              </div>
              <div className="input-field mt-4 !items-start">
                <textarea
                  type="text"
                  placeholder="Message"
                  className="appearance-none h-32"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
                <Icon icon="mynaui:message" width="24" height="24" className="icon" />
              </div>

              <button type="submit">
                <span>Send message</span>
                <Icon icon="iconamoon:send" width="24" height="24" className="icon" />
              </button>
            </form>
          </div>
          <div className="img">
            <img src={require("../../Images/book-now.png")} alt="book now" loading="lazy" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookNow;
