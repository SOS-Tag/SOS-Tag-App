import UserCard from "./UserCard";

const CardsList = (props) => {

    const { users, handleSelect, selectedIDs } = props;

    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(220px,_100%),_1fr))] gap-[40px]">
            {users.map(user => (
                <UserCard key={`uc-${user.id}`} id={user.id} selected={selectedIDs.includes(user.id)} type={user.id === 1 ? "main" : "child"} name={user.name} firstname={user.firstname} handleSelect={handleSelect}/>
            ))}
            <UserCard type="add" />
        </div>
    );
}

export default CardsList;