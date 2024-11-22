import React, { useContext, useState } from "react";
import { RbacContext } from "../context/RbacContext";
import ModalForm from "../components/ModalForm";

const Roles = () => {
    const { roles, addRole } = useContext(RbacContext);
    const [showModal, setShowModal] = useState(false);

    const handleAddRole = (role) => {
        addRole(role);
        setShowModal(false);
    };

    return (
        <div>
            <h1>Roles</h1>
            <button onClick={() => setShowModal(true)}>Add Role</button>
            <table>
                <thead>
                    <tr>
                        <th>Role Name</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role, index) => (
                        <tr key={index}>
                            <td>{role.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <ModalForm
                    title="Add Role"
                    fields={["Role Name"]}
                    onSubmit={handleAddRole}
                />
            )}
        </div>
    );
};

export default Roles;
