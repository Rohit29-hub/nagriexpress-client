import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/src/components/ui/table";

interface User{
    _id: any,
    firstName: string,
    lastName: string,
    email: string,
    products: object[],
    cart: object[],
    role: string
}

function AdminUserTable({ users }: { users: object[] }) {
    return (
        <Table className="w-max h-full">
            <TableHead className="w-max h-auto">
                <TableRow className="flex gap-x-8 items-center flex-shrink-0">
                <TableHeader>S.No</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Orders</TableHeader>
                    <TableHeader>Cart</TableHeader>
                    <TableHeader>Role</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user: User,index: number) => (
                    <TableRow key={user._id} className="flex items-center gap-x-3 p-2">
                        <TableCell>{++index}</TableCell>
                        <TableCell>{user.firstName + user.lastName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.products.length}</TableCell>
                        <TableCell>{user.cart.length}</TableCell>
                        <TableCell>{user.role}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
export default AdminUserTable;
