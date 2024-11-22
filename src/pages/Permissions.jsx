import React, { useContext } from "react";
import { RbacContext } from "../context/RbacContext";

const Permissions = () => {
    const { permissions } = useContext(RbacContext);

    return (
        <div>
            <h1>Permissions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Permission</th>
                    </tr>
                </thead>
                <tbody>
                    {permissions.map((permission, index) => (
                        <tr key={index}>
                            <td>{permission}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Permissions;
