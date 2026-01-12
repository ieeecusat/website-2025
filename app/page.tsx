"use client";
import React from 'react'
import {useRevealer} from "@/app/hooks/useRevealer";

function page() {
  useRevealer();
  return (
    <>
    <div className="revealer"></div>
    <div className="">
      <h1>Home <sup>(01)</sup></h1>

    </div>
    </>
  )
}

export default page
