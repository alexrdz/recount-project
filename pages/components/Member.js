export default function Member({ member, type }) {
  return (
    <div className="mt-4 border-b py-4">
      {type}: {member.name}
    </div>
  );
}
