import { Page, Content } from "../components/page"

function Project(props: {
    title: string,
    caption: string,
    imagePath: string,
    url: string,

}) {

    function openUrl(url: string) {
        window.open(url, '_blank');
    }

    return (
        <div
            className=' bg-slate-800 rounded-lg p-10 max-w-md min-w-[90%] sm:min-w-[66%] md:min-w-[50%] lg:min-w-[25%] cursor-pointer '
            onClick={() => openUrl(props.url)}
        >
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
                <h2 className="text-center">
                    Showcase
                </h2>

                <div className=" flex flex-row space-x-5 md:space-x-10 no-scrollbar">

                    <Project
                        title='Tend'
                        caption='Tend is a mindfulness and meditation app aimed at a Gen-Z audience'
                        imagePath='/Tend.png'
                        url='https://www.thetendapp.com/'
                    />
                    <Project
                        title='HandDeco'
                        caption='HandDeco is a handmade and custom embroidery start-up operating in Switzerland.'
                        imagePath='/HandDeco.jpeg'
                        url='https://www.handdeco.com/'
                    />
                    <Project
                        title='Virgin Red'
                        caption='Virgin Red is a loyalty and rewards offering for customers of the Virgin Group.'
                        imagePath='/VirginRed.png'
                        url='https://www.virgin.com/virgin-red'
                    />
                    <Project
                        title='Student Beans'
                        caption='Student Beans is a market leading student discount and rewards platform.'
                        imagePath='/StudentBeans.png'
                        url='https://www.studentbeans.com/uk'
                    />
                </div>
            </Content>
        </Page>
    )
}

export default Projects