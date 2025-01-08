"use client";

import React, { useState, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";

const Generate = () => {
  const searchParams = useSearchParams();

  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle") || "");
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: pic,
      desc: desc,
    });

    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();
    if (result.success) {
      toast.success(result.message);
      setLinks([]);
      setpic("");
      sethandle("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2">
      {/* Render the form */}
      <div className="col1 flex justify-center items-center flex-col text-gray-900">
        {/* Other content */}
      </div>
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

export default function GenerateWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Generate />
    </Suspense>
  );
}
