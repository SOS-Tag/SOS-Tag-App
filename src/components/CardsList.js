import UserCard from "./UserCard";

const CardsList = (props) => {

    const { users } = props;

    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(220px,_100%),_1fr))] gap-[40px]">
            {users.map(user => (
                <UserCard key={`uc-${user.id}`} type={user.id === 1 ? "main" : "child"} name={user.name} firstname={user.firstname} />
            ))}
            <UserCard type="add" />
        </div>
    );
}

export default CardsList;