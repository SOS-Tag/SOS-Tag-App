import './CardsList.css';
import UserCard from "../UserCard";

const CardsList = (props) => {

    const { users } = props;

    return (
        <div className="cl">
            {users.map((user, i) => (
                <UserCard key={`uc-${i}`} type={user.type} name={user.name} firstname={user.firstname} />
            ))}
            <UserCard type="add" />
        </div>
    );
}

export default CardsList;