import AutoCarousel from '../AutoCarousel';

function Tech() {
    return (
        <>
            <h2 className='text-center'>Tech we 💙</h2>
            <AutoCarousel>
                <img src="/techlogos/webflow.svg" width={200} />
                <img src="/techlogos/wordpress.svg" width={200} />
                <img src="/techlogos/flutter.svg" width={200} />
                <img src="/techlogos/react.svg" width={200} />
                <img src="/techlogos/nextjs.svg" width={200} />
                <img src="/techlogos/unity.svg" width={200} />
            </AutoCarousel>
        </>
    )
}

export default Tech