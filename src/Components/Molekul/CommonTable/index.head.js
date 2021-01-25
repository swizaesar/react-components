import React from "react";

const TableHead = ({ dataHead = [], dataNav }) => {
    return (
        <thead className="thead-light">
            <tr>
                {dataHead.map((item, key) => {
                    return (
                        <th
                            className={item.className}
                            scope="col"
                            key={key}
                            onClick={() => console.log("click head!")}
                        >
                            {item.headName}
                            {item.required !== undefined && (
                                <span className="text-danger">*</span>
                            )}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHead;
