
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/balance"
import { Users } from "../components/users"
export function DashBoard()
{
    return (
        <div>
               <Appbar></Appbar>
            <div className="m-8">
                <Balance value={"1000"}></Balance>
                <Users></Users>
             
            </div>
        </div>
    )
}