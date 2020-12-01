import React from "react";
import { useUserContext } from "../../contexts/userContext";
import Link from "next/link";

export default function Person({ person, editOnly }) {
  const { id, name, born, spouseId, hometown } = person;
  const { userData, setUserData } = useUserContext();
  const spouse = userData.find((u) => u.id === +spouseId);

  return (
    <div className="border shadow-md p-12 bg-white">
      <h3>
        <span className="text-xs uppercase text-gray-500">Name:</span>
        <br />
        {name}
      </h3>
      <p className="mt-4">
        <span className="text-xs uppercase text-gray-500">Born:</span>
        <br />
        {born}
      </p>
      {spouse ? <p>spouse {spouse.name}</p> : ""}
      <p className="mt-4">
        <span className="text-xs uppercase text-gray-500">Hometown:</span>
        <br />
        {hometown}
      </p>

      <div className="mt-4 flex text-xs border-t pt-4 mt-4">
        {!editOnly && (
          <Link href={`/${id}`}>
            <a className="text-blue-800 border rounded-md mr-4 p-2 shadow-sm">
              View {name}'s info
            </a>
          </Link>
        )}
        <Link href={`/edit/${id}`}>
          <a className="text-blue-800 border rounded-md mr-4 p-2 shadow-sm">
            Edit {name}'s info
          </a>
        </Link>
      </div>
    </div>
  );
}
