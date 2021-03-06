import React from 'react';

function CardGif({ url, title }) {
    return (
        <>
            { /* Card JSX Structure */}

            <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
                    <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                        <img src={ url } alt="" className="h-full w-full" />
                    </div>
                    <h2 className="mt-4 font-bold text-xl"> { title } </h2>
                    <h6 className="mt-2 text-sm font-medium">Founder</h6>
                    <p className="text-xs text-gray-500 text-center mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
                    </p>
                    <ul className="flex flex-row mt-4 space-x-2">
                        <li>
                            <a href className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                                <i className="fab fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a href className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                                <i className="fab fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                    </ul>
            </div>


        </>
    );
}

export default CardGif;