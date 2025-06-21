"use client";

import React from "react";
import Input from "@/components/input";
import { useState } from "react";
import Button from "@/components/button";
import Footer from "@/layout/footer";
const form = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    date: "",
    gender: "",
    phone: "",
    kategorija: "",
    vozacka: "",
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
  const isFormTrue = Object.values(formData).every(
    (value) => value.trim() !== ""
  );
  return (
    <form className="flex flex-col lg:w-[771px] lg:h-[406px] gap-[24px] w-full">
      <div className="flex flex-col lg:flex-row gap-[24px]">
        <div className="flex flex-col items-start justify-center gap-[4px] w-full">
          <p className="text-[14px] text-gray-700 font-[500]">Ime</p>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="lg:w-[374px] border border-gray-300 h-[38px] rounded-[6px] text-[12px] text-gray-700 font-[500] px-[5px] w-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-[4px] w-full">
          <p className="text-[14px] text-gray-700 font-[500]">Prezime</p>
          <Input
            type="text"
            name="surname"
            id="surname"
            value={formData.surname}
            onChange={handleChange}
            className="lg:w-[374px] border border-gray-300 h-[38px] rounded-[6px] text-[12px] text-gray-700 font-[500] px-[5px] w-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[4px] w-full">
        <p className="text-[14px] text-gray-700 font-[500]">Email</p>
        <Input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="lg:w-[506px] border border-gray-300 h-[38px] rounded-[6px] text-[12px] text-gray-700 font-[500] px-[5px] w-full"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-[4px] w-full">
        <p className="text-[14px] text-gray-700 font-[500]">Datum Rođenja</p>
        <Input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          className="lg:w-[374px] border border-gray-300 h-[38px] rounded-[6px] text-[12px] text-gray-700 font-[500] px-[5px] w-full"
        />
      </div>
      <div className="flex flex-col lg:flex-row content-center justify-center text-center items-center gap-[24px]">
        <div className="flex flex-col items-start justify-center gap-[4px] w-full">
          <p className="text-[14px] text-gray-700 font-[500]">Telefon</p>
          <Input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="lg:w-[232px] border border-gray-300 h-[38px] rounded-[6px] text-[12px] text-gray-700 font-[500] px-[5px] w-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-[4px] w-full">
          <label
            className="text-[14px] text-gray-700 font-[500]"
            htmlFor="oprions"
          >
            Kategorija
          </label>
          <select
            name="kategorija"
            id="options"
            value={formData.kategorija}
            onChange={handleChange}
            className="lg:w-[232px] border border-gray-300 h-[38px] rounded-[6px] text-[12px] text-gray-700 font-[500] px-[5px] w-full"
            required
          >
            <option value="">Izaberi kategoriju</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div className="flex flex-col items-start justify-center gap-[4px] w-full">
          <p className="text-[14px] text-gray-700 font-[500]">
            Posedujem vozačku dozvolu
          </p>
          <select
            name="vozacka"
            id="options"
            value={formData.vozacka}
            onChange={handleChange}
            className="lg:w-[232px] border border-gray-300 h-[38px] rounded-[6px] text-[12px] text-gray-700 font-[500] px-[5px] w-full"
            required
          >
            <option value="">Izaberi kategoriju</option>
            <option value="Ne poseduje">Ne posedujem ni jednu</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="CE">CE</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center text-center gap-[4px] w-full">
        <p className="text-[14px] text-gray-700 font-[500]">Pol</p>
        <div className="flex flex-col lg:flex-row justify-center gap-[22px] lg:gap-[248px] content-center items-center text-center ">
          <div className="flex flex-col justify-center  gap-[12px] content-center items-center text-center ">
            <div className="flex flex-row  justify-center  gap-[12px] content-center items-center text-center">
              <input
                type="radio"
                name="gender"
                id="muski"
                value="muski"
                checked={formData.gender === "muski"}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="muski"
                className="font-[500] text-[14px] text-gray-700 "
              >
                Muški
              </label>
            </div>

            <div className="flex flex-row  justify-center  gap-[12px] content-center items-center text-center">
              <input
                type="radio"
                name="gender"
                id="zenski"
                value="zenski"
                checked={formData.gender === "zenski"}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="zenski"
                className="font-[500] text-[14px] text-gray-700 "
              >
                Ženski
              </label>
            </div>
          </div>
          <Button name="Podnesi prijavu" />
        </div>
      </div>
    </form>
  );
};

export default form;
