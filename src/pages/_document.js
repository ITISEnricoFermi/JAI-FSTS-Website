import {Html, Head, Main, NextScript} from 'next/document'
import Navbar from "@/components/navbar";

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
            <Navbar/>
            <div className="mx-[3%]">
                <Main/>
            </div>
            <NextScript/>
            </body>
        </Html>
    )
}
