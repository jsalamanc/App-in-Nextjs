

const ListData = ({data}) => {

    return (
        <>
            {data.data.map((user) =>
                <div key={user.id} className='p-6 w-64 bg-white rounded-xl shadow-lg flex justify-center items-center space-x-4 m-7'>
                    <div>
                        <figure>
                            <img className="w-24 h-24 rounded-full mx-auto" src={user.avatar} alt='image'/>
                        </figure>
                        <div className="mt-4">
                            <div className="text-center">
                                <span className="font-bold txtCardDisabled">Name</span>
                                <p className="txtCardDisabled">{`${user.first_name} ${user.last_name}`}</p>
                            </div>
                            <div className="text-center mt-4">
                                <span className="font-bold txtCardDisabled">Email</span>
                                <h5 className="txtCardDisabled">{user.email}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .txtCardDisabled{
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            `}</style>
        </>
    );
}

export {ListData};