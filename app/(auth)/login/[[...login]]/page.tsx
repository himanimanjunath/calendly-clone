import { SignIn } from "@clerk/nextjs"
import Image from "next/image";

export default function LoginPage(){
    return(
        <main className="flex flex-col items-center p-5 gap-10 animate-fade-in">
            <Image
                src='/assets/logo.svg'
                width={100}
                height={100}
                alt="Logo"
                /* this is for the calendra image at the top */
            />
            <div className="mt-3">
                <SignIn/> {/* this shows the sign in box */} 
            </div>
        </main>
        //rendering logo and signin component coming from clerk
    )
}
