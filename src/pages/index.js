import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Home() {
    const animation = {duration: 50000, easing: (t) => t}
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: true,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })
    return (
        <div>
            {/*
            <div ref={sliderRef} className="keen-slider">
                <img src="https://www.itisfermi.edu.it/wp-content/img/slide1"
                     className="keen-slider__slide number-slide1"/>
                <img src="https://www.itisfermi.edu.it/wp-content/img/slide2"
                     className="keen-slider__slide number-slide2"/>
                <img src="https://www.itisfermi.edu.it/wp-content/img/slide3"
                     className="keen-slider__slide number-slide3"/>
                <img src="https://www.itisfermi.edu.it/wp-content/img/slide4"
                     className="keen-slider__slide number-slide4"/>
                <img src="https://www.itisfermi.edu.it/wp-content/img/slide5"
                     className="keen-slider__slide number-slide5"/>
                <img src="https://www.itisfermi.edu.it/wp-content/img/slide6"
                     className="keen-slider__slide number-slide6"/>
                <img src="https://www.itisfermi.edu.it/wp-content/img/slide7"
                     className="keen-slider__slide number-slide7"/>
            </div>
            */}
            <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold">From School To School</h1>
                <p>Our application created just for you.</p>
                <p>FSTS is an app exclusively created by students, with the aim of helping them and understanding them
                    better .
                    Here you can use a demo of the app and then you can also access our dowloads available for andoid
                    and ios
                </p>
            </div>
        </div>
    )
}
