import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { useEffect } from "react";

const Home: NextPage = () => {

  useEffect(() => {

  const hiddenElements = document.querySelectorAll(".hidden2");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));
  
    });

  return (

    <>
    <head>
      <MetaHeader />

      <title>Ninit</title>

      <link rel="stylesheet" href="style.css"></link>
        <script defer src="app.js"></script>
        </head>
      <body>
        <section>
      <div className="hidden2">
        <h2>What is Ninit?</h2>
        <p>Ninit is a decentralized, community-driven, open-source project that aims to make it easy for anyone to create and manage their own DAO.</p>
      </div>
      </section>
      <section>
      <div className="hidden2">
        <h2>Why Ninit?</h2>
        <p>Cause its dope!</p>
      </div>
      </section>


        </body>
    </>
  );
};

export default Home;
