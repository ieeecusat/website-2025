"use client";
import React from 'react'
import {useRevealer} from "@/app/hooks/useRevealer";


function page() {
  useRevealer();
  return (
    <>
    <div className="revealer"></div>
    <div>
      <h1>Contact <sup>(02)</sup></h1>
    </div>
    </>
  )
}

export default page
