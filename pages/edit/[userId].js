import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/userContext";

export default function EditUser({ userId }) {
  const { userData, user, getUser } = useUserContext();
  const [userInfo, setUserInfo] = useState(user);

  useEffect(() => {
    getUser(userId);
    setUserInfo(user);
  }, [userData]);

  if (!userData) {
    return <div className="">loading user Data...</div>;
  }
  if (!user) {
    return <div className="">retreiving user...</div>;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  console.log(userInfo);

  if (!userInfo) {
    setUserInfo(user);
    return <div className="">loading user Data...</div>;
  }

  return (
    <div>
      <h2 className="text-center mt-24 text-3xl text-gray-600">
        Editing {user.name}'s Information
      </h2>

      <div className="form-containermt-24 w-2/3 mx-auto mt-24 border bg-white p-12 rounded-md shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col px-24 mx-auto">
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            className="p-2 border border-gray-200 mt-4 shadow-sm"
          />
          <input
            type="text"
            name="born"
            value={userInfo.born}
            onChange={handleInputChange}
            className="p-2 border border-gray-200 mt-4 shadow-sm"
          />
          <input
            type="text"
            name="hometown"
            value={userInfo.hometown}
            onChange={handleInputChange}
            className="p-2 border border-gray-200 mt-4 shadow-sm"
          />

          <button className="w-32 cursor-pointer mt-12 bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-md py-4 px-12 shadow-md transition duration-500 ease-in-out">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

EditUser.getInitialProps = (props) => {
  const { userId } = props.query;
  return { userId };
};
