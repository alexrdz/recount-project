import { useEffect } from "react";
import { useUserContext } from "../contexts/userContext";
import Member from "./components/Member";
import Person from "./components/Person";

export default function User({ userId }) {
  const { userData, user, getUser } = useUserContext();

  useEffect(() => {
    getUser(userId);
  }, [userData]);

  if (!userData) {
    return <div className="">loading user Data...</div>;
  }

  if (!user) {
    return <div className="">retreiving user...</div>;
  }

  const { name, parentId1, parentId2, spouseId } = user;

  function getFamilyMember(id) {
    if (userData) {
      const member = userData.find((u) => u.id === +id);
      console.log(member);
      return member;
    }
  }

  return (
    <div className="mt-24 w-2/3 mx-auto mt-24">
      <h2 className="text-center mt-24 text-3xl text-gray-600">
        {user.name}'s Information
      </h2>
      <Person person={user} editOnly={true} />
    </div>
  );
}

User.getInitialProps = (props) => {
  const { userId } = props.query;
  return { userId };
};
