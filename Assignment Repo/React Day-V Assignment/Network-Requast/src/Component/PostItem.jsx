function PostItem(props) {
    let mydata = props.data
    return (
        <>
            {mydata.map((info) => {
                return (
                    <div key={info.id}>
                        <h3>{info.id}</h3>
                        <h3>{info.title}</h3>
                        <p>{info.body}</p>
                    </div>
                )
            })}






        </>


    )
}

export default PostItem