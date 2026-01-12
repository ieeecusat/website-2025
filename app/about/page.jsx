"use client";
import React from 'react'
import {useRevealer} from "@/app/hooks/useRevealer";


function About() {
  useRevealer();
  return (
    <>
    <div className="revealer"></div>
    <div>
      <h1>About <sup>(03)</sup></h1>
    </div>
    </>
  )
}

export default About
