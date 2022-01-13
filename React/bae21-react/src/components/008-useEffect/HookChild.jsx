const HookChild = ({setName, name}) => {

    const getData = (data) => {
        setName(data.target.value);
    };

    return ( 
        <div>
            <input type="text" name="my-name" onChange={(event) => getData(event)}/>
            <h2> Name: {name} </h2>
        </div> 
    );
}
 
export default HookChild;