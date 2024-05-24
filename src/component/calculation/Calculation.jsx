import Title from "../title/Title";


const Calculation = ({course,left,totaltime}) => {
    return (
        <div className="bg-white p-4 rounded-xl">
            <h1 className="text-2xl font-bold text-blue-500">Credit Hour Remaining {left} hr</h1>
            <hr className="my-6" />
            <div>
                <h1 className="text-2xl font-bold my-4">Course Name </h1>
                {
                    course.map((c,indx)=><Title title={c} key={indx}></Title>)
                }
            </div>
            <hr className="my-6" />
            <h2 className="text-2xl font-semibold" > Total Credit Hour : {totaltime} hr</h2>
        </div>
    );
};

export default Calculation;