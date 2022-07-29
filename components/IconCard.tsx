
import Icon from '@mdi/react'

function IconCard(
    props: {
        icon: string,
        title: string,
        description: string,
    }) {
    return (
        <div className='bg-slate-800 flex flex-col items-center rounded-lg p-10 lg:w-1/3 text-center'>
            <Icon
                path={props.icon}
                title={props.title}
                size={2.5}
            />
            <h3>{props.title}</h3>

            <a href='/services/ux-design'>Learn more</a>
        </div>
    )
}

export default IconCard