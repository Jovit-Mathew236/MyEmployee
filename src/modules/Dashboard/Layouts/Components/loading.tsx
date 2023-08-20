import { ReactNode } from "react";

const Loading = ({children}:{children:ReactNode}) => {
    return ( 
        <div className="w-full h-96 flex justify-center items-center">
            {children}
        </div>
     );
}
 
export default Loading;