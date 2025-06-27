import React from "react";
import { HomeCTA } from "@/components";

function Home() {
  return (
    <main className="h-screen grid place-items-center">
      <section className="max-w-3xl">
        <h1 className="text-4xl lg:text-4.5xl font-bold text-center">
          Build a Modern Full-Stack App with Next.js, Drizzle ORM, and Neon
        </h1>
        <h2 className="mt-4 text-center">
          A step-by-step guide to building and deploying a scalable serverless
          web app using the Next.js App Router, Drizzle ORM for type-safe SQL,
          and Neon for PostgreSQL hosting.
        </h2>
        <HomeCTA />
      </section>
    </main>
  );
}

export default Home;
