"use client";

import React, { useState } from "react";
import Input from "../../../components/input";
import Button from "@/components/button";
const form = () => {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  const inputData = [
    {
      key: 1,
      type: "email",
      name: "email",
      id: "email",
      value: formData.email,
      onChange: handleChange,
      placeHolder: "Email",
    },
    {
      key: 2,
      type: "text",
      name: "title",
      id: "title",
      value: formData.title,
      onChange: handleChange,
      placeHolder: "Naslov",
    },
    {
      key: 3,
      type: "text",
      name: "message",
      id: "message",
      value: formData.message,
      onChange: handleChange,
      placeHolder: "Poruka",
    },
  ];
  const isFormTrue = Object.values(formData).every(
    (value) => value.trim() !== ""
  );
  return (
    <form className="flex flex-col items-center text-center content-center justify-center gap-[24px] px-[10px] lg:w-[512px] w-full">
      {inputData.map((data) => (
        <div
          className="flex flex-col items-start justify-center gap-[4px] w-full"
          key={data.key}
        >
          <p className="text-[14px] text-gray-700 font-[500]">
            {data.placeHolder}
          </p>

          {data.name !== "message" ? (
            <Input
              type={data.type}
              name={data.name}
              id={data.id}
              value={data.value}
              onChange={data.onChange}
              className="lg:w-[512px] border border-gray-300 h-[38px] rounded-[6px] text-[12px] text-gray-700 font-[500] px-[5px] w-full"
            />
          ) : (
            <textarea
              name={data.name}
              id={data.id}
              value={data.value}
              onChange={data.onChange}
              className="lg:w-[512px] w-full border border-gray-300 rounded-[6px] h-[98px] text-gray-700 font-[500] px-[5px] text-[12px]"
            />
          )}
        </div>
      ))}
      <Button name="Pošalji" />
    </form>
  );
};

export default form;
