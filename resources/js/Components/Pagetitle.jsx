import React from "react";

const PageTitle = ({ dynamictitle }) => {
    return (
        <section className="bg-white py-[70px] dark:bg-dark">
            <div className="mx-auto px-4 sm:container">
                <div className="border-l-[0px]">
                    <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-white">
                        {dynamictitle}
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default PageTitle;
