import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { EyeIcon, Trash } from "lucide-react";
import Image from "next/image";

interface Product {
  _id: any,
  images: string[],
  title: string,
  category: string,
  brand: string,
  description: string
  color: string,
  size: string[],
  price: number,
  discount: number,
  stock: number,
  // reviews: [
  //   {
  //     username: string,
  //     rating: number,
  //     comment: string
  //   }
  // ],
  // shipping_info: {
  //   weight: string,
  //   dimensions: string,
  //   shipping_cost: number,
  //   estimated_delivery: string,
  //   material: string,
  //   care_instructions: string,
  //   country_of_origin: string
  // },
  model_info: {
    height: string,
    size_worn: string
  },
  tags: string[]
}
function AdminProductTable({ products }: { products: object[] }) {
  return (
    <Table className="w-max h-full">
      <TableHead className="w-max h-auto">
        <TableRow className="flex gap-x-8 items-center flex-shrink-0">
          <TableHeader>S.No</TableHeader>
          <TableHeader>Image</TableHeader>
          <TableHeader>Title</TableHeader>
          <TableHeader>Category</TableHeader>
          <TableHeader>Brand</TableHeader>
          <TableHeader>Description</TableHeader>
          <TableHeader>Color</TableHeader>
          <TableHeader>Available Sizes</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Discount</TableHeader>
          <TableHeader>Stock</TableHeader>
          <TableHeader>Model Info</TableHeader>
          <TableHeader>Tags</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product: Product,index: number) => (
          <TableRow key={product._id} className="flex items-center gap-x-3">
            <TableCell>{++index}</TableCell>
            <TableCell>
              <Image width={70} height={70} src={product.images[0]} priority={true} alt={product.title} />
            </TableCell>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.brand}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.color}</TableCell>
            <TableCell>{product.size.join(", ")}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.discount}</TableCell>
            <TableCell>{product.stock}</TableCell>
            {/* <TableCell>
              <ul className=" list-disc">
                <li>Weight: {product.shipping_info.weight}</li>
                <li>Dimensions: {product.shipping_info.dimensions}</li>
                <li>Shipping Cost: {product.shipping_info.shipping_cost}</li>
                <li>Estimated Delivery: {product.shipping_info.estimated_delivery}</li>
                <li>Material: {product.shipping_info.material}</li>
                <li>Care Instructions: {product.shipping_info.care_instructions}</li>
                <li>Country of Origin: {product.shipping_info.country_of_origin}</li>
              </ul>
            </TableCell> */}
            <TableCell>
              Height: {product.model_info.height}
              <br />
              Size Worn: {product.model_info.size_worn}
            </TableCell>
            <TableCell>{product.tags.join(", ")}</TableCell>
            <TableCell><EyeIcon/></TableCell>
            <TableCell><Trash/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default AdminProductTable;
