
function Container({ children }) {
    return (
        <div className='container w-full md:max-w-6xl mx-auto space-y-4 px-5'>
            {children}
        </div>
    )
}

export default Container