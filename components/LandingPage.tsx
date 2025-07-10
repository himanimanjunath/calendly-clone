'use client'
import { SignIn } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"
import Image from "next/image"

 //marks this file as a client component

export default function LandingPage(){
    return (
       <main className = "flex items-center p-10 gap-24 animate-fade-in max-md:flex-col">
        {/*Section with branding, heading, subheading, and illustration */}

        <section className= "flex flex-col items-center">

        {/*App logo*/}
        <Image
        src='/assets/logo.svg'
        width={300}
        height={300}
        alt="Logo"
        />

        {/*main heading*/}
        <h1 className = "text-2xl font-black lg:text-3xl">Your time, perfectly planned</h1>

        {/*subheading*/}
        <p className = "font-extralight">Join millions of professionals who easily book meetings with the #1 scheduling tool</p>

        {/*illustration below text*/}
        <Image
        src='/assets/planning.svg'
        width={500}
        height={500}
        alt="Logo"
        />


        </section>

        {/*clerk sign in component with custom theme */}

        <div className="mt-3">
          <SignIn

          routing="hash" //keeps sign in UI on same page using hash based routing
          appearance={{
            baseTheme: neobrutalism, //applying neobrutalism theme (from the website options) to the sign in UI 
          }}
          />
        </div>

        
       </main>

    )

}

