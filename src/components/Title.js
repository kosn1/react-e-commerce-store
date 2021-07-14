export default function Title({title}){
    const titleArr = title.split(" ");
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {titleArr[0]} <strong className="text-blue">{titleArr[1]}</strong>
                </h1>
            </div>
        </div>
    );

}