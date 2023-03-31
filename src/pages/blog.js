import Image from "next/image";

export default function Blog() {
    return (
        <div>
            <h1 className="text-3xl font-bold">Blog</h1>
            <div className="flex flex-row">
                <div className="flex flex-col justify-center">
                    <p>As already said FromSchoolToSchool is an app made by the students of ITIS fermi, through an hackathon
                        we
                        students can put into practice our skills and come to the rescue of all students in
                        difficulty</p>
                    <p>Our application ,has several branches for pupils , including the possibility of receiving a free
                        tutoring
                        ,or almost, from the school students themselves ,with a free exchange of notes ; we offer a
                        warehouse
                        for lost items where you can collect them online.
                        In addition, our app is based on the resources provided by the school itself, in our case the
                        digital
                        library</p>
                    <p>FromSchoolToSchool is an active app, you can find us in all social media and participate in our
                        surveys to
                        let us know yours and what you would like more in our application.</p>
                </div>
                <Image src="/blog_img1.jpg" alt="img1" width="500" height="500"/>
            </div>
        </div>
    )
}