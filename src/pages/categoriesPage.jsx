// import { Button } from "antd";
import { Link } from "react-router-dom";

export default function CategoriesPage(){
    return(
        <>
          <body className="bg-grey">
            <div className="box-content h-32 w-32 ml-8 bg-white flex flex-col h-844 w-150">
                <div className="absolute top-8 left-8">
                    <Link to="/">
                        <img src="images/leavePage.png" alt="Home" className="size-8"/>
                    </Link>
                </div>
                <div>

                </div>
            </div>    
          </body>
        </>
    );
}