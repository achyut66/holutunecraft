import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const Submenu = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    return (
        <div className="submenu tableSubmenu">
            <table className="borderless">
                <tbody>
                    <tr 
                        onMouseEnter={() => setHoveredCategory("category1")}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        <td className="category">
                            <a href="/">Singing Bowl</a>
                        </td>
                        <td className="separator"></td>
                        <td className="cat-datas">
                            {hoveredCategory === "category1" && "datas"}
                        </td>
                    </tr>

                    <tr 
                        onMouseEnter={() => setHoveredCategory("category2")}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        <td className="category">
                            <a href="/">Singing Bowl</a>
                            </td>
                        <td className="separator"></td>
                        <td className="cat-datas">
                            {hoveredCategory === "category2" && "datas1"}
                        </td>
                    </tr>

                    <tr 
                        onMouseEnter={() => setHoveredCategory("category3")}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        <td className="category">
                            <a href="/">Singing Bowl</a>
                        </td>
                        <td className="separator"></td>
                        <td className="cat-datas">
                            {hoveredCategory === "category3" && "datas2sdfdsf"}
                        </td>
                    </tr>

                    <tr 
                        onMouseEnter={() => setHoveredCategory("category4")}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        <td className="category">
                            <a href="/">Singing Bowl</a>
                        </td>
                        <td className="separator"></td>
                        <td className="cat-datas">
                            {hoveredCategory === "category4" && "datasksdjdhfjkdhf"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Submenu;
