import { Page, Content } from "../components/page"
import ScrollDown from "../components/scrolldown";

function Project(props: {
    title: string,
    caption: string,
    imagePath: string,
}) {
    return (
        <div className=' bg-slate-800 rounded-lg p-10 max-w-md min-w-[66%] md:min-w-[50%] lg:min-w-[33%] xl:min-w-[25%]'>
            <img
                src={props.imagePath}
                title={props.title}
                className='rounded-lg w-full'
            />
            <h2>{props.title}</h2>
            <p className=''>{props.caption}</p>
        </div>
    )
}


function Projects() {
    return (
        <Page id='projects'>
            <Content>
                <h2>
                    Projects
                </h2>

                <div className="flex flex-nowrap space-x-10 overflow-x-auto no-scrollbar">
                    <Project
                        title='Tend'
                        caption='Tend is a mindfulness and meditation app aimed at a Gen-Z audience'
                        imagePath='/Tend.png'
                    />
                    <Project
                        title='Virgin Red'
                        caption='Virgin Red is a loyalty and rewards offering for customers of the Virgin Group.'
                        imagePath='/VirginRed.png'
                    />
                    <Project
                        title='Student Beans'
                        caption='Student Beans is a market leading student discount and rewards platform.'
                        imagePath='/StudentBeans.png'
                    />
                    <Project
                        title='HandDeco'
                        caption='HandDeco is a handmade and custom embroidery start-up operating in Switzerland.'
                        imagePath='/HandDeco.jpeg'
                    />
                </div>



            </Content>
            <ScrollDown label='Contact' id='#contact' />
        </Page>
    )
}

export default Projects