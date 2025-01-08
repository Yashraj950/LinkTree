"use client";

import React, { useState, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";

const GenerateComponent = () => {
  const searchParams = useSearchParams();

  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState(searchParams.get("handle") || "");
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) =>
      initialLinks.map((item, i) =>
        i === index ? { link, linktext } : item
      )
    );
  };

  const addLink = () => {
    setLinks([...links, { link: "", linktext: "" }]);
  };

  const submitLinks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ links, handle, pic, desc }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
        setLinks([{ link: "", linktext: "" }]);
        setHandle("");
        setPic("");
        setDesc("");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the links.");
      console.error("Submit Links Error:", error);
    }
  };

  return (
    <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2">
      <div className="col1 flex justify-center items-center flex-col text-gray-900">
        <div className="flex flex-col gap-5 my-8">
          <h1 className="font-bold text-4xl">Create your Bittree</h1>

          {/* Step 1: Handle */}
          <div className="item">
            <h2 className="font-semibold text-2xl">
              Step 1: Claim your Handle
            </h2>
            <div className="mx-4">
              <input
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="px-4 py-2 my-2 focus:outline-pink-300 focus:outline rounded-full"
                type="text"
                placeholder="Choose a Handle"
              />
            </div>
          </div>

          {/* Step 2: Links */}
          <div className="item">
            <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
            {links.map((item, index) => (
              <div key={index} className="mx-4">
                <input
                  value={item.linktext}
                  onChange={(e) =>
                    handleChange(index, item.link, e.target.value)
                  }
                  className="px-4 py-2 mx-2 my-2 focus:outline-pink-300 focus:outline rounded-full"
                  type="text"
                  placeholder="Enter link text"
                />
                <input
                  value={item.link}
                  onChange={(e) =>
                    handleChange(index, e.target.value, item.linktext)
                  }
                  className="px-4 py-2 mx-2 my-2 focus:outline-pink-300 focus:outline rounded-full"
                  type="text"
                  placeholder="Enter link"
                />
              </div>
            ))}
            <button
              onClick={addLink}
              className="p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl"
            >
              + Add Link
            </button>
          </div>

          {/* Step 3: Picture and Description */}
          <div className="item">
            <h2 className="font-semibold text-2xl">
              Step 3: Add Picture and Description
            </h2>
            <div className="mx-4 flex flex-col">
              <input
                value={pic}
                onChange={(e) => setPic(e.target.value)}
                className="px-4 py-2 mx-2 my-2 focus:outline-pink-300 focus:outline rounded-full"
                type="text"
                placeholder="Enter link to your Picture"
              />
              <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="px-4 py-2 mx-2 my-2 focus:outline-pink-300 focus:outline rounded-full"
                type="text"
                placeholder="Enter description"
              />
              <button
                disabled={!pic || !handle || !links[0].linktext}
                onClick={submitLinks}
                className="disabled:bg-slate-500 p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl"
              >
                Create your BitTree
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image and Toast */}
      <div className="col2 w-full h-screen bg-[#E9C0E9]">
        <img
          className="h-full object-contain"
          src="/generate.png"
          alt="Generate your links"
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default function Generate() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateComponent />
    </Suspense>
  );
}
