"use client"
import { signOut } from "@/src/actions/auth"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog"

const LogoutButton = () => {
    const handleLogout = async () => {
        await signOut();
    }
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger>
                        <button className='py-2 mt-4 px-3 bg-blue-600 text-white rounded' type='submit'>Logout</button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure to Logout your Account ?</AlertDialogTitle>
                        <AlertDialogDescription>
                            If you logout your account so your not able to purchase anything and lost the dashbord page access.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-blue-600 hover:bg-blue-500 dark:text-white" onClick={handleLogout}>
                             Logout
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </>
    )
}

export default LogoutButton