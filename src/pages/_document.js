import {Html, Head, Main, NextScript} from 'next/document'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
            <Navbar/>
            <div className="mx-[3%] mt-3">
                <Main/>
            </div>
            <div className="absolute bottom-0 w-full">
                <Footer/>
            </div>
            <NextScript/>
            </body>
        </Html>
    )
}
