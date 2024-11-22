import React, { useContext, useState } from "react";
import { RbacContext } from "../context/RbacContext";
import ModalForm from "../components/ModalForm";

const Users = () => {
    const { users, addUser } = useContext(RbacContext);
    const [showModal, setShowModal] = useState(false);

    const handleAddUser = (user) => {
        addUser(user);
        setShowModal(false);
    };

    return (
        <div>
            <h1>Users</h1>
            <button onClick={() => setShowModal(true)}>Add User</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <ModalForm
                    title="Add User"
                    fields={["Name", "Email", "Role"]}
                    onSubmit={handleAddUser}
                />
            )}
        </div>
    );
};

export default Users;
