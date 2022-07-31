
import Icon from '@mdi/react'
import Link from 'next/link'

function IconCard(
    props: {
        icon: string,
        title: string,
        description: string,
        url: string,
    }) {
    return (
        <Link href={props.url}>
            <div className='bg-slate-800 hover:bg-slate-700 flex flex-col items-center rounded-lg p-10 lg:w-1/3 text-center cursor-pointer'>
                <Icon
                    path={props.icon}
                    title={props.title}
                    size={2.5}
                />
                <h3>{props.title}</h3>
                <p className='text-base'>{props.description}</p>
            </div>
        </Link>
    )
}

export default IconCard