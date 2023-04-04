import React from "react";

export default function Footer() {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-800 text-white">
            <div className="flex flex-col justify-center items-center space-y-4 p-4 ">
                <div className="text-white flex flex-row gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         width="24" height="24"
                         viewBox="0 0 24 24">
                        <path fill="white"
                              d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                    </svg>
                    Instagram: <a href="https://www.instagram.com/_.fromschool.toschool._/">@_.fromschool.toschool._</a>
                </div>
                <div className="text-white flex flex-row gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                    Mail: <a href="mailto:fromSchool.toSchool.2023@gmail.com">fromSchool.toSchool.2023@gmail.com</a>
                </div>
                <div className="flex flex-row justify-center items-center space-x-4">
                    <p>© 2021 From School To School</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>
    )
}