export default function friend({ friend }) {
  console.log(friend);
  const { name, email, phone, address } = friend;
  return (
    <div className="card">
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>phone: {phone}</p>
    </div>
  );
}
