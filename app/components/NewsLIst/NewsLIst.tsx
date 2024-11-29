export default function NewLIst({ arr }: any) {

    return (
        <div className="flex flex-wrap gap-6 justify-center w-full">
            {
                arr.map((item: any) => {
                    return (
                        <div className="w-96 p-3 box-border border my-8 border-neutral-400 rounded-xl" key={item.id}>
                            <img
                                className="w-full" 
                                src={item.img ||  'https://minneapolis.aaa.com/sites/default/files/styles/large/public/IMG-Logo900x600_1.jpg?itok=QLZZvd6w' }
                                alt="" 
                            />
                            <div>
                                <h2>{item.name}</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
