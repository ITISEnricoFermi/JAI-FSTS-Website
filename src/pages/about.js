import Image from "next/image";

function Card({ title }) {
    return (
        <div className="flex flex-col items-center justify-center">

            <h1 className="text-3xl font-bold">{title}</h1>
        </div>
    )
}

export default function About() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Card title="Lo Bue Aurora"/>
            <Card title="Rosati Paolo"/>
            <Card title="Lars Willemse"/>
        </div>
    )
}