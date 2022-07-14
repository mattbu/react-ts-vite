import { ListType } from '../types/ListType'

type Props = {
    data: ListType[] | undefined
}

function User({data}: Props) {
    return (
        <div>
            <h1>리스트</h1>
            {
                data?.map((el, i) => {
                    return (
                        <div key={i}>
                            <h3>
                                <span>{el.id}.</span> {el.title}
                            </h3>
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default User