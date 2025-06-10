import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between border-b px-4">
        <div className="text-lg flex flex-col justify-center">
            <h1 className="text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-900 from-sky-400">PayTM</span></h1>
        </div>
        <div className="flex flex-row justify-center pt-2 ">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}
