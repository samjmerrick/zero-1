
import Icon from '@mdi/react'
import Link from 'next/link'

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
            <Link href='/services/ux-design'>Learn more</Link>
        </div>
    )
}

export default IconCard