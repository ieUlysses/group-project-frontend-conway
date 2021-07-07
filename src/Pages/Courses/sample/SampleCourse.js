//Sample page for a course ( 1 page per course?)

//image, title, about , teacher , rules, book now btn(Componant) map location? date, time, group size, 


//style: height 80% gives 10% top + btm for nav + footer, allign center (ml0 mr0)

//Slideshow of images? Ready to eat componant 

//Componants: Book now btn, photo + title combo, map screenshot, teacher card, info:date,time,age, remote/not
import Policies from "../../../Componants/Policies/ClassPolicies"
import Preview from "../../../Componants/Preview/Preview"
import Carousel from "../../../Componants/Carousel/Carousel"
import Reviews from "../../../Componants/Reviews/Reviews"
import Timetable from "../../../Componants/Timetable/Timetable"
import TeacherIntro from "../../../Componants/TeacherIntro/TeachIntro"

export default function () {


    return (
        <div className=" bg-light d-grid gap-2 ">
            <Preview />
            <TeacherIntro />
            <Carousel />
            <Timetable />
            <Policies />
            <Reviews />
        </div>
    )
}